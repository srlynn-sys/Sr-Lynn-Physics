(()=>{
  const key='srlynn-theme';
  const root=document.documentElement;
  const saved=document.cookie.split('; ').find(x=>x.startsWith(key+'='))?.split('=')[1];
  const preferred=saved==='dark'||saved==='light'?saved:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  root.classList.toggle('dark',preferred==='dark');
  function addButton(){
    if(document.querySelector('.theme-toggle')) return;
    const top=document.querySelector('.top');
    if(!top) return;
    const b=document.createElement('button');
    b.type='button'; b.className='theme-toggle'; b.setAttribute('aria-label','Toggle dark and light mode');
    b.addEventListener('click',()=>{
      const dark=!root.classList.contains('dark');
      root.classList.toggle('dark',dark);
      const value=dark?'dark':'light';
      document.cookie=key+'='+value+'; max-age=31536000; path=/; SameSite=Lax';
      update();
    });
    top.appendChild(b);
    function update(){
      const dark=root.classList.contains('dark');
      b.textContent=dark?'☀️ Light':'🌙 Dark';
      b.title=dark?'Switch to light mode':'Switch to dark mode';
    }
    update();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addButton); else addButton();
})();
