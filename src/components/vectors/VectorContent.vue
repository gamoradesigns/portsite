<template>
  <div class="product">
    <div class="'product-inner '">
      <div class="product-text-wrap">
        <h2 class="bg-text">{{ product.bgtext }}</h2>
      </div>
      <div class="product-image-wrap">
        <img :srcs="product.rock1" class="" />
           
      </div>
        <div class="product-image-wrap-ray">
        <img :src="product.ray" class="image-ray " />
           
      </div>
       <div class="product-image-wrap-walle">
        <img :src="product.walle" class="image-walle" />
           
      </div>
       <div class="product-image-wrap-sun">
        <img :src="product.sun" class="image-sun " />
           
      </div>
        <div class="product-image-wrap-sunsm">
        <img :src="product.sunsm" class="image-sunsm " />
           
      </div>
      
        <!-- <div class="product-image-wrap-rock">
        <img :src="product.rock" class="image-rock " />
           
      </div> -->

      <div class="product-image-wrap-shadow">
        <img :src="product.shadow" class="image-shadow " />
           
      </div> 
       <div class="product-image-wrap-shadoww">
        <img :src="product.shadoww" class="image-shadoww " />
           
      </div> 
      </div>
 
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style>
.bg-text {
  opacity: 0;
  transition: all 1.2s;
}
.product:hover .bg-text {
   opacity: 0.2;
}
  .product {

    width: 100%;
    padding: 25px;
  }

  .product-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 1000px;
    height: 200px;
  }
.product-image-wrap-walle {
    position: absolute;
    bottom: 77vh;
    left: 41vw
}

  .product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    perspective: 1000px;
    height: 200px;
  }
  
  .product-text-wrap h2 {
    color: #313131;
    font-size: 128px;
    font-weight: 900;
    opacity: 0;
    transform-origin: center;
  }

  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  img.image-ray {
    position: relative;
    left: -25vw;
    top: 13vh;
    width: 159%;
    opacity: .08;
}
img.image-walle {
  width: 22%
}
img.image-sun {
      position: relative;
    left: 32vw;
    top: -5vh;
    width: 16%;
}
img.image-shadow {
       position: relative;
    left: 26vw;
    top: 16vh;
    width: 27%;
}
img.image-shadoww {
       position: relative;
    left: 26vw;
      top: 13vh;
    width: 27%;
}
img.image-sunsm {
      position: relative;
 left: 30vw;
    top: -15vh;
    width: 8%;
}
  img.image {
    width: 40%;
}
  .product-image-wrap .image {
       width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }

  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  }

  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }

  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }
</style>