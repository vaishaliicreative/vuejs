<script>
import StudentDataServices from '../services/StudentDataServices.js';
export default{
    name:"Students",
    data(){
        return{
            students:null,
            student:null
        }
    },
    methods:{
        getAllStudent(){
          StudentDataServices.getAllStudent()
            .then(response => {
                this.students = response.data.data
            })
            .catch(error => console.log(error))
        },
        getOneStudent(id){
          StudentDataServices.getStudent(id)
            .then(response => {
                this.student = response.data.data
            })
            .catch(error => console.log(error))
        },
        deleteStudent(id){
          if(confirm("Do you really want to delete?")){
            StudentDataServices.deleteStudent(id)
              .then(response=>{
                  console.log(response.data.data);
                  this.$router.push('/students')
              })
              .catch(error => console.log(error))
          }
        }
    },
    mounted() {
      this.getAllStudent();
    }
}
</script>
<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Student List</h4>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in students"
            :key="index" >
                    <td>{{ post.id }}</td>
                    <td>{{ post.first_name }}</td>
                    <td>{{ post.last_name }}</td>
                    <td>{{ post.age }}</td>
                    <td>
                      <span class="btn btn-info text-white me-2" @click="getOneStudent(post.id)"><i class="fa fa-eye"></i></span>
                      <a class="btn btn-primary me-2" :href="'/student/' + post.id"><i class="fa fa-edit"></i></a>
                      <span class="btn btn-danger" @click="deleteStudent(post.id)" ><i class="fa fa-trash-alt"></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <div v-if="student">
            <h4>Student</h4>
          <div>
            <label><strong>First Name:</strong></label> {{ student.first_name }}
          </div>
          <div>
            <label><strong>Last Name:</strong></label> {{ student.last_name }}
          </div>
          <div>
            <label><strong>Age:</strong></label> {{ student.age }}
          </div>
  
          <a class="btn btn-primary"
            :href="'/student/' + student.id"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
</template>