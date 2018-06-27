// асинхронный метод класса
class A {
  async asyncFunc() {
    console.log('async method');
  }  
}

new A().asyncFunc();