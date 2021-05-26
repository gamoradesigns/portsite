<template>
  <div class='vectorConatiner' id="app" @mousemove="mousemove">
      <div class="vectorBG">
  <section class="products">
      <Product
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </section>
      </div>
  
  </div>
</template>

.<script>
import Product from "../vectors/VectorContent"

export default {
  name: 'app',
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
      
          color: 'green',
          bgtext: ': 5H ¨ P84',
          shadow: require('../../assets/img/space/14.png'),
            shadoww: require('../../assets/img/space/14.png'),
           ray: require('../../assets/img/space/7.png'),
           walle: require('../../assets/img/space/3.png'),
              sun: require('../../assets/img/space/9.png'),
              sunsm: require('../../assets/img/space/8.png'),
        }
        // {
        //   title: 'Nike flex',
        //   color: 'blue',
        //   bgtext: 'AIR',
        //   src: require('./assets/blue-shoe.png'),
        //    srcs: require('./assets/fluid/fluid 1.png'),
        // },
        // {
        //   title: 'Nike Roche Runs',
        //   color: 'pink',
        //   bgtext: 'MAX',
        //   src: require('./assets/pink-shoe.png'),
        //    srcs: require('./assets/fluid/fluid 1.png'),
        // }
      ]
    }
  },
  methods: {
    mousemove (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let products = document.querySelectorAll('.products .product');

      for (let i = 0; i < products.length; i++) {
        let product = products[i];

        let product_image = product.querySelector('.product-image-wrap');

        let img_x = mouseX - this.coords(product_image).x;
        let img_y = mouseY - this.coords(product_image).y;
        product_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;


//walle animation 
        let product_walle = product.querySelector('.product-image-wrap-walle');


        // let img_y2 = mouseY - this.coords(product_walle).y;
        product_walle.style.transform = ` translateX(-${img_x/10}px) translateZ(100px)`;

// sun bright animation

 let product_sun = product.querySelector('.product-image-wrap-sun');

  
        product_sun.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px) `;

// sun small animation

 let product_sunsm = product.querySelector('.product-image-wrap-sunsm');

      
        product_sunsm.style.transform = `translateY(${img_y/20}px) translateX(${img_x/15}px) translateZ(100px) `;
// sun rays animation

 let product_ray = product.querySelector('.product-image-wrap-ray');

        product_ray.style.transform = `skew(${img_y/40}deg, ${img_x/30}deg) `;
        // rock animation

 let product_shadow = product.querySelector('.product-image-wrap-shadow');

        product_shadow.style.transform = `translateX(-${img_x/40}px) translateZ(100px) `;



        let bgtext = product.querySelector('.bg-text');
      
        bgtext.style.transform = `opacity: 1`;
      }
    },
    coords (el) {
      let coords = el.getBoundingClientRect();

      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
    }
  }
}
</script>

<style>
.vectorBG {
    background-image: url('../../assets/img/space/10.png');
        height: 100%;
    width: 100%;
    background-size: cover;

}

  .vectorConatiner {
width: 81vw;
    height: 69vh;
    overflow: hidden;


    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products {
     display: flex;
    height: 100%;
    width: 97%;
  }
</style>
