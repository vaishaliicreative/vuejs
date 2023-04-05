<script>
export default {
  data(){
    return{
      obj: {
        nested: { count: 0 },
        arr: ['Hello', 'world']
      },
      numbers: [1, 2, 3, 4, 5],
      isReverse:false,
      name:'Test',
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  methods:{
    increment(){
      this.obj.nested.count++;
    },
    decrement(){
      this.obj.nested.count--;
    },
    pushElementInArray(){
      this.obj.arr.push('Test');
    },
    removeElementFormArray(){
      this.obj.arr.pop();
    },
    reverseArray(status){
      this.isReverse = status;
      this.numbers.reverse();
    },
    greeting(event){
      alert(`Hello ${this.name} !`)
      if(event){
        alert(event.target.tagName)
      }
    },
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  },
  mounted() {
    this.increment()
    // console.log(this.$refs.items)
    this.$refs.input.focus()
  },
  computed:{
    oldNumbers(){
      return this.numbers.filter( n => n % 2 !== 0)
    }
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count {{ this.obj.nested.count}}</p>
<!--    <button @click="increment">Increment Count</button>-->
<!--    <button @click="decrement">Decrement Count</button>-->
    <button class="btn border me-2" @click="obj.nested.count++">Increment Count</button>
    <button class="btn border" @click="obj.nested.count--">Decrement Count</button>

<!--    <ul>-->
<!--      <li v-for="arr in this.obj.arr" :key="arr">-->
<!--        {{ arr }}-->
<!--      </li>-->
<!--    </ul>-->
<!--    <button class="btn border me-2" @click="pushElementInArray">Add Element</button>-->
<!--    <button class="btn border" @click="removeElementFormArray">Remove Element</button>-->
      <ul>
        <li v-for="n in this.numbers" :key="n" ref="items">{{ n }}</li>
      </ul>
<!--    <button v-if="!isReverse" @click="reverseArray(true)">Reverse Array</button>-->
<!--    <button v-if="isReverse" @click="reverseArray(false)">Inverse Array</button>-->
<!--    <button @click="greeting">Greeting</button>-->
<!--    <button @click="warn('Form cannot be submitted yet.', $event)">-->
<!--      Submit-->
<!--    </button>-->
<!--    <button @click="(event)=>warn('Form cannot be submitted yet.',event)">Submit Warn</button>-->
    <p>
      Ask a yes/no question:
      <input v-model="question" ref="input"/>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /*min-height: 100vh;*/
    /*display: flex;*/
    align-items: center;
  }
}
</style>
