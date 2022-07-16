function Relogio(){
    let Horas = document.getElementById('Horas')
     let Minutos = document.getElementById('Minutos')
       let Segundos = document.getElementById('Segundos')


}
 setInterval(function time(){
     let dateToday = new Date();
     let hr = dateToday.getHours();
     let min = dateToday.getMinutes();
     let s = dateToday.getSeconds();

     Horas.textContent = hr;
     Minutos.textContent = min;
     Segundos.textContent = s;


     if ( hr < 10) hr = '0' + hr;   

     if ( min < 10) min = '0' + min;   

     if ( s < 10) s = '0' + s;   

  })

  
 




