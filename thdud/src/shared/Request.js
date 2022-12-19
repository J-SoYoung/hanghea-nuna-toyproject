import axios from "axios";

const instance = axios.create({
	baseURL: "https://reqres.in/", 
});
export default instance;


// 헤더에 추가할 일이 생길 때, 
// headers : {
//         "content-type" : "application/json;charset-UTF-8",
//         // "Content-Type": "application/x-www-form-urlencoded",
//         accept : "application/json,",
// }

// instance.defaults.headers.common["X-AUTH-TOKEN"] = USER_TOKEN; 


