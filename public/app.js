// Configuration (fill only link placeholders here)
const PORTFOLIO = [
  {title:"YouTube - Hair Oil Edit", url:"https://youtube.com/watch?v=xxx"},
  {title:"TikTok Viral Edit", url:"https://vm.tiktok.com/xxx"},
  {title:"Reels - Before/After", url:"https://instagram.com/p/xxx"}
];

document.getElementById('enterHub').onclick = () => {
  document.getElementById('app').classList.remove('hidden');
  window.scrollTo(0,0);
};

// populate portfolio
const grid = document.getElementById('portfolioGrid');
PORTFOLIO.forEach(item=>{
  const a = document.createElement('a');
  a.className='thumb';
  a.href = item.url;
  a.target = '_blank';
  a.innerText = item.title;
  grid.appendChild(a);
});

// register submit: send to /api/register
document.getElementById('registerForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  try{
    const res = await fetch('/api/register', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const j = await res.json();
    if(j.ok) { alert('✅ Registration sent!'); form.reset(); }
    else alert('❌ Error: ' + (j.error || 'server'));
  }catch(err){ alert('⚠️ Network error'); console.error(err) }
});

// feedback submit: send to /api/feedback
document.getElementById('feedbackForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  try{
    const res = await fetch('/api/feedback', {
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const j = await res.json();
    if(j.ok){ alert('💬 Feedback sent — thank you!'); form.reset(); }
    else alert('❌ Error sending feedback');
  }catch(err){ alert('⚠️ Network error'); console.error(err) }
});
