<script>
export default{
    props:{
        msg:{
            type:String
        }
    },
    // mounted(){
    //     console.log('Original Component mounted')
    // }
}
</script>
<template>
    <!-- <h1>Original Component</h1> -->
    <p>{{ msg }}</p>
</template>