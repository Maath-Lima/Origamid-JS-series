export default function InitCronometro() {
  const btnStart = document.getElementById('start');
  const btnPause = document.getElementById('pause');
  let timer = document.querySelector('.js-timer');
  
  let i = 0;
  let cronometro;

  function handleStartClick() {
    cronometro = setInterval(() => {
      timer.innerHTML = ++i;   
    }, 1000);
  }
  
  function handlePauseClick() {
    clearInterval(cronometro);
  }

  function handleResetClick() {
    clearInterval(cronometro);
    timer.innerHTML = 0;
    i = 0;  
  }
  
  btnStart.addEventListener('click', handleStartClick);
  btnPause.addEventListener('click', handlePauseClick);
  btnPause.addEventListener('dblclick', handleResetClick);
}