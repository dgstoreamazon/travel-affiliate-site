document.getElementById('year').textContent = new Date().getFullYear();

// Optional: basic outbound click tracker (no external services)
document.querySelectorAll('a[rel~="sponsored"]').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(window.localStorage){
      const count = Number(localStorage.getItem('affiliate_clicks')||0)+1;
      localStorage.setItem('affiliate_clicks', String(count));
      console.log('Affiliate clicks:', count);
    }
  });
});
