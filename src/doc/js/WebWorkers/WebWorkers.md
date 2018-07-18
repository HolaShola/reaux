https://www.html5rocks.com/ru/tutorials/workers/basics/  
https://html.spec.whatwg.org/multipage/workers.html  

No Access to:
 - DOM;
 - Window* (setTimeout и setInterval доступны);
 - Host page;

Коммуникация WebWorker-a и основного потока происходит через метод воркера postMessage()

Для того чтобы получить от воркера информацию есть несколько событий:
 - message
 - error

Основной поток подписывается на эти события:
 - worker.addEventListener();
 - worker.onmessage

Когда воркер передает информацию, то эта информация находится в объекте event в свойстве data

Основной поток выполняет 3 шага:
 - создать воркера
 - инициировать с воркером коммуникацию, передав сообщение
 - получить ответ, слушая события