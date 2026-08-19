const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();

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
  },{threshold:.1});
  items.forEach(item=>observer.observe(item));
}