const PORTFOLIO = [
  { title: "YouTube - Hair Oil Edit", url: "https://youtube.com/watch?v=xxx" },
  { title: "TikTok Viral Edit", url: "https://vm.tiktok.com/xxx" },
  { title: "Reels - Before/After", url: "https://instagram.com/p/xxx" }
];

document.getElementById('enterHub').onclick = () => {
  document.getElementById('app').classList.remove('d-none');
  window.scrollTo(0, 0);
};

const grid = document.getElementById('portfolioGrid');
PORTFOLIO.forEach(item => {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-2';
  col.innerHTML = <a href="${item.url}" target="_blank" class="btn btn-outline-light w-100">${item.title}</a>;
  grid.appendChild(col);
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const j = await res.json();
    alert(j.ok ? '✅ Registration sent!' : '❌ Error: ' + (j.error || 'server'));
    if (j.ok) form.reset();
  } catch (err) {
    alert('⚠️ Network error');
    console.error(err);
  }
});

document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const j = await res.json();
    alert(j.ok ? '💬 Feedback sent — thank you!' : '❌ Error sending feedback');
    if (j.ok) form.reset();
  } catch (err) {
    alert('⚠️ Network error');
    console.error(err);
  }
});    else alert('❌ Error: ' + (j.error || 'server'));
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
