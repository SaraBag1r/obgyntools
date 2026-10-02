// Language: RU/EN. Static text uses <span lang="ru">…</span><span lang="en">…</span>; CSS hides the other language.
(function(){
  var KEY='obgt-lang';
  function detect(){
    try{var s=localStorage.getItem(KEY);if(s==='ru'||s==='en')return s}catch(e){}
    return ((navigator.language||'en').toLowerCase().indexOf('ru')===0)?'ru':'en';
  }
  window.LANG=detect();
  document.documentElement.lang=window.LANG;
  window.t=function(x){return Array.isArray(x)?(window.LANG==='ru'?x[0]:x[1]):x};
  function sync(){
    document.documentElement.lang=window.LANG;
    var bs=document.querySelectorAll('.lang button');
    for(var i=0;i<bs.length;i++)bs[i].setAttribute('aria-pressed',String(bs[i].getAttribute('data-lang')===window.LANG));
    if(window.PAGE_TITLE)document.title=window.t(window.PAGE_TITLE);
  }
  window.setLang=function(l){
    window.LANG=l;try{localStorage.setItem(KEY,l)}catch(e){}
    sync();if(typeof window.onLang==='function')window.onLang();
  };
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('.lang button');
    if(b)window.setLang(b.getAttribute('data-lang'));
  });
  document.addEventListener('DOMContentLoaded',sync);
})();
