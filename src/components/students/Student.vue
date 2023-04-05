<script>
import StudentDataServices from '../../services/StudentDataServices.js'
export default{
    name:"Student",
    data(){
        return{
            currentStudent:null,
            message:''
        }
    },
    methods:{
        getStudent(id){
            StudentDataServices.getStudent(id)
                .then(response => {
                    this.currentStudent = response.data.data;
                }).catch(e=>{
                    console.log(e);
                })
        },
        updateStudent() {
            let studentData = new FormData();
            studentData.append('first_name',this.currentStudent.first_name)
            studentData.append('last_name',this.currentStudent.last_name)
            studentData.append('age',this.currentStudent.age)
            StudentDataServices.updateStudent(this.currentStudent.id, studentData)
          .then(response => {
            // console.log(response.data);
            this.message = 'The student was updated successfully!'
            this.$router.push('/students')
          })
          .catch(e => {
            console.log(e);
          });
      },
    },
    mounted() {
        this.message = ''
        this.getStudent(this.$route.params.id);
    }
}
</script>
<template>
    <div v-if="currentStudent" class="edit-form">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name"
            v-model="currentStudent.first_name"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName"
            v-model="currentStudent.last_name"
          />
        </div>
  
        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age"
            v-model="currentStudent.age"
          />
        </div>
      </form>
      <div class="pt-3 mb-1">
        <button type="submit" class="btn btn-success me-2"
            @click="updateStudent" >
            Update
        </button>
        <a class="btn btn-dark" href="/students">Cancel</a>
      </div>
      <p>{{ message }}</p>
    </div>
</template>