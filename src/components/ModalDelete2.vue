<!--
Modal component with customizable slots and CSS transitions.
-->

<script>
import Modal from './ModalDelete.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>
  <button id="show-modal" @click="showModal = true">eliminar 4eveer</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Continuar?</h3>
      </template>
    </modal>
  </Teleport>
</template>