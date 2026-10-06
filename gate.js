// Professional-audience gate for clinician pages. Remembers consent in localStorage.
(function(){
  var KEY='obgt-pro';
  try{ if(localStorage.getItem(KEY)==='1') return; }catch(e){}
  function t(x){ return (window.LANG==='en')?x[1]:x[0]; }
  function show(){
    var d=document.createElement('div');
    d.className='gate'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-labelledby','gate-h');
    d.innerHTML='<div class="gate-box">'+
      '<div class="eyebrow">'+t(['Для специалистов','For professionals'])+'</div>'+
      '<h2 id="gate-h">'+t(['Этот раздел — для медицинских специалистов','This section is for healthcare professionals'])+'</h2>'+
      '<p>'+t(['Материалы предназначены для врачей и людей с медицинским образованием. Это справочные инструменты по клиническим руководствам, а не рекомендации для самостоятельного лечения.','These materials are intended for clinicians and people with medical training. They are reference tools based on clinical guidelines, not advice for self-treatment.'])+'</p>'+
      '<div class="gate-actions">'+
        '<button type="button" class="gate-yes">'+t(['Я медицинский специалист','I am a healthcare professional'])+'</button>'+
        '<a class="gate-no" href="index.html">'+t(['Перейти в раздел для пациенток','Go to the patient section'])+'</a>'+
      '</div></div>';
    document.body.appendChild(d);
    document.documentElement.classList.add('gated');
    var yes=d.querySelector('.gate-yes');
    yes.addEventListener('click',function(){
      try{ localStorage.setItem(KEY,'1'); }catch(e){}
      d.remove(); document.documentElement.classList.remove('gated');
    });
    yes.focus();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',show); else show();
})();
