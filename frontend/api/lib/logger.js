import fs from 'fs';
import path from 'path';

const FILE = path.resolve('./api/submissions.json');

export function logSubmission(obj) {
  try {
    let arr = [];
    if (fs.existsSync(FILE)) {
      const raw = fs.readFileSync(FILE, 'utf8');
      arr = JSON.parse(raw || '[]');
    }
    arr.push(obj);
    fs.writeFileSync(FILE, JSON.stringify(arr, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to write submissions backup', err);
  }
}
