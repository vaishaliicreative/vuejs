import CommonService from "./CommonService";

export default {
    getAllStudent(){
        return CommonService.getAPI("/students");
    },

    getStudent(id){
        return CommonService.getAPI("/student/"+id)
    },

    createStudent(data){
        return CommonService.postAPI("/student",data);
    },

    updateStudent(id,data){
        return CommonService.postAPI("/update_student/"+id,data)
    },

    deleteStudent(id){
        return CommonService.getAPI("/delete_student/"+id)
    }
}