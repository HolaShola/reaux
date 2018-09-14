// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html  
// https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc  

let basketModule = (function() {
    let basket = [];

    return {
        addItem: function(values) {
            basket.push(values);
        },

        getItemCount: function() {
            return basket.length;
        },

        getTotal: function() {
            let q = this.getItemCount(), p = 0;
            while(q--) {
                p+= basket[q].price;
            }

            return p;
        }
    }
}());

console.log(basketModule);

basketModule.addItem({ item:'bread', price:0.5 });
basketModule.addItem({ item:'butter', price:0.3 });

console.log(basketModule.getTotal());