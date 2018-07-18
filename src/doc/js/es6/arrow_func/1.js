var x = 10;

let foo = {
  x: 20,

  // Динамический `this`.
  bar() {
    return this.x;
  },

  // Лексический `this`.
  baz: () => this.x,

  qux() {
    // Лексический в рамках данного вызова.
    let arrow = () => this.x;
    return arrow();
  }
};

console.log(
  foo.bar(), // 20, из `foo`
  foo.baz(), // 10, из global
  foo.qux(), // 20, из `foo` и стрелочной функции
);