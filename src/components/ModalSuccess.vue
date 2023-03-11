<!--
Modal component with customizable slots and CSS transitions.
-->

<script>
import { mapActions } from 'vuex';
import Modal from './ModalSucceeConfig.vue'

export default {
  props: {},
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    change() {
    },

    ...mapActions('burgers', ['toggleShowModal']),

    goSuccess() {
      this.toggleShowModal({ 'commit': 'commit', target: 'saveModal' })
      this.$router.push(`/hamburguesas/${this.$store.state.burgers.current[0].id}`)
    },
  }
}
</script>

<template>
  <Teleport to="body">
    <!-- use ethe modal component, pass in the prop -->
    <modal :show="this.$store.state.burgers.modals.saveModal" @close="goSuccess">
      <template #header>
        <h3>Éxito!</h3>
      </template>
    </modal>
  </Teleport>
</template>