// https://stackoverflow.com/questions/1909441/how-to-delay-the-keyup-handler-until-the-user-stops-typing

const inp = document.getElementById('ssr');

inp.addEventListener('keyup', () => {
//    console.log('dd');
    delay(function(){
        alert('Time elapsed!');
      }, 5000 );
})

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
})();