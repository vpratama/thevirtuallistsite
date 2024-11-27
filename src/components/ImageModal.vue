<template>
    <div v-if="isOpen" class="modal" @click="closeModal">
      <img :src="imageSrc" class="modal-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
      imageSrc: {
        type: String,
        default: '',
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .modal-image {
    max-width: 90%;
    max-height: 90%;
  }
  </style>