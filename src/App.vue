<template>
  <div id="app">
    <VerificationCodeInput v-model="data" />
  </div>
</template>

<script>
import VerificationCodeInput from "./components/VerificationCodeInput";

export default {
  name: 'App',
  components: {VerificationCodeInput},
  data() {
    return {
      data: null
    }
  },
  /*methods: {
    onInput(val) {
      console.log("input ", val)
    },
    onCompleted() {
      console.log("done!")
    }
  }*/
}
</script>