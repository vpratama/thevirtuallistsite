<template>
    <div class="container-fluid">
      <div class="image-container">
        <div class="row">
          <img
            v-for="i in 21"
            :key="i"
            class="col-lg-4 img-fluid img-thumbnail"
            :src="`https://picsum.photos/500/500/?image=${i}`"
            @click="openModal(`https://picsum.photos/500/500/?image=${i}`)"
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
  max-height: 90vh; /* Set the maximum height to 90vh */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
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