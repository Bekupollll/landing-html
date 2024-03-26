new Vue({
    el: '#app',
    data() {
      return {
        swiper: null,
        items: [
          { image: 'image1.jpg', title: 'Slide 1', description: 'Description 1' },
          { image: 'image2.jpg', title: 'Slide 2', description: 'Description 2' },
          { image: 'image3.jpg', title: 'Slide 3', description: 'Description 3' },
        ]
      };
    },
    mounted() {
      // Initialize Swiper
      this.swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    },
    beforeDestroy() {
      // Destroy Swiper instance when component is destroyed
      if (this.swiper) {
        this.swiper.destroy();
      }
    },
  });
  