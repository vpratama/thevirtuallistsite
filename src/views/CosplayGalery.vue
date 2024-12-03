<template>
    <div class="container-fluid">
      <div class="image-container">
        <div class="row">
          <img v-if="$route.params.name == 'takina'"
            v-for="i in 10"
            :key="i"
            class="col-md-4 img-fluid img-thumbnail square-img"
            :src="`/img/takina/${i}.jpg`"
            @click="openModal(`/img/takina/${i}.jpg`)"
          />
          <img v-if="$route.params.name == 'mihari'"
            v-for="i in 15"
            :key="i"
            class="col-md-4 img-fluid img-thumbnail square-img"
            :src="`/img/mihari/${i}.jpg`"
            @click="openModal(`/img/mihari/${i}.jpg`)"
          />
        </div>
      </div>
      <ImageModal
        :isOpen="isModalOpen"
        :imageSrc="selectedImage"
        @close="closeModal"
      />
    </div>
  </template>
  
  <style scoped>
  .image-container {
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 0;
    padding-right: 0;
  }
  
  .row {
    padding-left: 0;
    padding-right: 0;
  }
  
  .square-img {
    width: 100%; /* Full width of the column */
    height: 50vh; /* Set a fixed height to make it square */
    object-fit: cover; /* Ensures the image covers the area */
    padding-left: 0;
    padding-right: 0;
  }
  </style>
    
  <script>
    import ImageModal from '@/components/ImageModal.vue';
    
    export default {
      components: { ImageModal },
      data() {
        return {
          isModalOpen: false,
          selectedImage: '',
        };
      },
      methods: {
        openModal(imageSrc) {
          this.selectedImage = imageSrc;
          this.isModalOpen = true;
        },
        closeModal() {
          this.isModalOpen = false;
          this.selectedImage = '';
        },
      },
    };
  </script>