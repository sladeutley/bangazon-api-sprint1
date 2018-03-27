'use strict';

module.exports.generateOrderProducts = (orderslens, productslens) => {
  
  let orderProducts = [];
  
  for (let i = 0; i < 30; i++) {

      let order_id = Math.floor(Math.random()*(orderslens) + 1);

      let product_id = Math.floor(Math.random()*(productslens) + 1);

      orderProducts.push({order_id, product_id})
      }
  return orderProducts;
}

