<!--
Modal component with customizable slots and CSS transitions.
-->

<script>
import { mapActions } from 'vuex';
import Modal from './ModalDeleteConfig.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },

  methods: {

    ...mapActions('burgers', ['getBurgers', 'toggleShowModal', 'deleteBurger']),

    async goDelete() {
      this.toggleShowModal({ 'commit': 'commit', target: 'deleteConfirmModal' })
      await this.deleteBurger({ 'comit': 'comit', id: this.$store.state.burgers.current[0].id })
      await this.getBurgers()
      this.$router.push('/hamburguesas/');

    }
  }
}
</script>

<template>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="this.$store.state.burgers.modals.deleteConfirmModal" @confirm="goDelete"
      @close="this.toggleShowModal({ 'commit': 'commit', target: 'deleteConfirmModal' })">
      <template #header>
        <h3>Continuar?</h3>
      </template>
    </modal>
  </Teleport>
</template>