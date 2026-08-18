const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

const ragQuery=document.querySelector('.rag-query');
const ragFlow=document.querySelector('.rag-flow');
const ragResults=document.querySelector('.rag-results');

if(ragQuery)ragQuery.textContent='“What is the stock market?”';
if(ragFlow)ragFlow.innerHTML='<span>query</span><i>→</i><span>search</span><i>→</i><span>retrieve</span><i>→</i><span>answer</span>';
if(ragResults)ragResults.innerHTML='<div><b>01</b><span>Companies sell shares of ownership</span><em>STOCKS</em></div><div><b>02</b><span>Investors buy and sell those shares</span><em>TRADING</em></div><div><b>03</b><span>Prices move as buyers and sellers react</span><em>PRICES</em></div>';

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items=document.querySelectorAll('.reveal');
if(reduceMotion||!('IntersectionObserver'in window)){
  items.forEach(item=>item.classList.add('visible'));
}else{
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
}