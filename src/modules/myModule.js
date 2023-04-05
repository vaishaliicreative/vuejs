import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NewComponent: defineAsyncComponent(() => import('../components/NewComponent.vue'))
  },
  data() {
    return {
      message: 'Hello from MyModule!'
    }
  },
  methods: {
    myMethod() {
      console.log('MyModule method')
    }
  }
}