// Express app with routes, exported via serverless-http for Vercel functions
import express from 'express';
import rateLimit from 'express-rate-limit';
import serverless from 'serverless-http';
import registerHandler from './handlers/register.js';
import feedbackHandler from './handlers/feedback.js';

const app = express();

// Basic middlewares
app.use(express.json({ limit: '10kb' })); // limit request sizes

// Rate limiter (simple)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute window
  max: 10, // limit to 10 requests per window per IP
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// Basic routes
app.post('/api/register', registerHandler);
app.post('/api/feedback', feedbackHandler);

// health check
app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// For local dev you might run node server.js
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(API running on http://localhost:${port}));
}

// Export handler for serverless platforms
export const handler = serverless(app);
export default app;
