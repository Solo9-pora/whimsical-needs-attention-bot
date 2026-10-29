(()=>{
  const link=document.querySelector('.attention-agent-link');
  if(!link)return;
  const bot=link.querySelector('.attention-bot');
  const message=link.querySelector('.attention-message');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  let timers=[];
  function clearTimers(){timers.forEach(clearTimeout);timers=[]}
  function conceal(){message.classList.remove('is-visible');window.setTimeout(()=>{message.hidden=true},180)}
  function reveal(){message.hidden=false;requestAnimationFrame(()=>message.classList.add('is-visible'))}
  function startCue(){
    clearTimers();
    if(reduced.matches){bot.src=bot.dataset.stillSrc;bot.classList.add('is-still','is-ready');reveal();return}
    bot.classList.remove('is-still');bot.src='agent_bot_attention.apng';bot.classList.add('is-ready');conceal();
    const cycle=()=>{timers.push(setTimeout(()=>{reveal();timers.push(setTimeout(conceal,2300))},2400));timers.push(setTimeout(cycle,5000))};
    cycle();
  }
  startCue();
  reduced.addEventListener?.('change',startCue);
  document.querySelectorAll('#approveClaim,#passClaim').forEach(control=>control.addEventListener('click',()=>{
    clearTimers();link.hidden=true;link.setAttribute('aria-label','Agent attention resolved.');message.hidden=true;
  }));
})();
