<template>
	<div>
	<mu-carousel hide-controls>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
</div>
</template>

<script>
	import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';
		export default {
			 data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
		
	}
</script>

<style scoped>
	 .mu-carousel {
    height: 150px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.mu-carousel-item>img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    min-width: 100%;
    max-height: 100%;
    -webkit-transition: inherit;
    -o-transition: inherit;
    transition: inherit;
    will-change: transform;
    max-width: none;
}

</style>