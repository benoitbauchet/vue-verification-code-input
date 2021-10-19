<template>
  <div>
    <input
        v-for="i in length"
        :key="`key-${i}`"
        v-model="content[i-1]"
        :style="styleInput"
        :disabled="disabled"
        @input="onInput($event, i-1)"
        @keydown="onKeydown($event, i-1)"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 35
    },
    fontSize: {
      type: Number,
      default: null
    },
    length: {
      type: Number,
      default: 6
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    if (!this.value) {
      return;
    }
    let i;
    for (i = 0; i < this.value.length; i++) {
      this.content[i] = this.value.charAt(i);
    }
  },
  data() {
    return {
      content: new Array(this.length),
      styleInput: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        fontSize: this.fontSize ? `${this.fontSize}px` : `${this.size / 2}px`,
      }
    }
  },
  methods: {
    onInput(event, index) {
      this.content[index] = event.data
      this.content.fill(null, index + 1, this.length)
      this.$emit('input', this.content.join(''))
      if (event.target.value.length > 0 && index !== this.length - 1) {
        event.target.nextElementSibling.focus()
      } else {
        this.$emit('completed')
        event.target.blur()
      }
    },
    onKeydown(event) {
      let element;
      switch (event.keyCode) {
        case 37:
          element = event.target.previousElementSibling
          break
        case 39:
          element = event.target.nextElementSibling
          break
      }
      if (element && element.tagName === 'input') {
        element.focus()
      }
    }
  }
}
</script>
<style scoped>
input {
  text-align: center;
}

input:not(last-child) {
  margin-right: 5px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>