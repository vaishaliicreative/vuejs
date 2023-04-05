import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

export default {
    getAPI(url){
        let headers = {'Access-Control-Allow-Origin': "*"}
        let res = axios.get(baseURL+url,headers);
        return res;
    },

    postAPI(url,data){
        let headers = {'Access-Control-Allow-Origin': "*"}
        let res = axios.post(baseURL+url,data,headers);
        return res;
    },

    putAPI(url,data){
        let headers = {'Access-Control-Allow-Origin': "*"}
        let res = axios.put(baseURL+url,data,headers);
        return res;
    },

    deleteAPI(url){
        let headers = {'Access-Control-Allow-Origin': "*"}
        let res = axios.delete(baseURL+url,headers);
        return res;
    }
}