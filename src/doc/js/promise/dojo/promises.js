function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления...');
    setTimeout(() => {
        Math.random() > 0.5 ? resolve({}) : reject('В визе отказано!');
    }, 2000);
}

applyForVisa(
    {},
    visa => console.info('Виза получена'),
    (reason) => console.error(reason)
);