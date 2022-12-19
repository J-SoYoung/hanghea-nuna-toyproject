// 리듀서, 미들웨어
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API, cookie
import instance from "../../shared/Request";
import { setCookie } from "../../shared/Cookie";

const initialState = {
  // user안에 리듀서가 관리할 데이터가 들어가고
  // isLoading - 서버와의 통신결과
  // error - 에러객체 저장
  user: [],
  isLoading: false,
  error: null,
};


// --------------------------------------------------Diary 미들웨어
// 중복체크 ( 유저 데이터 보내기, 결과 받기 ) 
export const __userCheck = createAsyncThunk(
  "userCheck",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const {data} = await instance.post("api/register", payload);
      console.log('중복확인: ',data)
      // 실제 서버통신 url 
      // const data = await axios.post("https://------/api/user/idcheck", payload)
      // 중복확인에서 할 일 => 서버에서 status, msg출력해줌 => code에 따라서 메세지출력하기

      // 여기서 결과가 출력되면 리듀서, 프론트 단에도 적용, 
      // 비동기라... 응답 받는 즉시 앞단에 출력?... 
      // dispatch끝난 다음 코드(console.)가 실행돼있어서. 
      return thunkAPI.fulfillWithValue(data, payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);


// 회원가입 ( 유저 데이터 보내기, 결과 받기) 
export const __signUpUser = createAsyncThunk(
  "signUpUser",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const {data} = await instance.post('api/register', payload)
      // console.log('로딩데이터: ', data)
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);


// 로그인하기
export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      // 서버에 통신을 보낸다. 
      // payload확인 
      console.log(payload)

      // payload보내는 부분 체크
      // const {data} = await axios.post('https://reqres.in/api/login',{ })
      // 실제 URL
      // const {data} = await axios.post('https://--------//api/user/login',{
      //   "email": "eve.holt@reqres.in",
      //   "password": "cityslicka" })
      const {data} = await instance.post('api/login', payload)
      console.log('로그인유저:', data)

      // 로그인 성공하면 서버에서 토큰, code:200 줌.
      // api호출 성공하면 token값 받아옴(경로확인), 헤더 저장
      // data는 axios에서 기본적으로 결과값들이 들어있는 프로퍼티
      const token = data.token;
      instance.defaults.headers.common["Authorization"] = token;

      // 쿠키에 is_login으로 토큰 저장 => 프론트가서 로그인 유지
      // 토큰은 쿠키에 저장했으니, 스토어로 안감. 굳이.뭐하러. 
      // axios연결 이상 없는데, 리듀서로 가지 않으면 -> config에 연결확인해보기!
      setCookie("is_login",token);
      return thunkAPI.fulfillWithValue(data,payload);

    }catch(err){
      console.log(err)
      return thunkAPI.rejectWithValue(err);
      // 서버가 400번대 코드를 설정해놓으면
      // axios가 여기로 보냄 
    }
  }
);




// 로그인 유지는? 프론트에서 어려움이 있음?

// 로그인 토큰 만료시간이 있음 
// => 포스트/댓글/페이지이동을 할 때마다 로그인 체크

// 1.프론트는 db가 없기 때문에, 새로고침을 하면 데이터가 다 날아감
// 2.만료시간이 지나지 않은 유저에게 다시 로그인 요청을 해야 함, XXXX안됨!!
// 3.쿠키에 저장해놓은 토큰을 가지고 로그인 요청을 하는 API를 새로 만들어야 하지 않을까
// 4.제가 생각한 게 맞는지. 모르겠씀다. 





// ---------------------------- 리듀서
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {

    // 중복확인  ---------------
    [__userCheck.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__userCheck.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      console.log("action-서버값", action);
      state.isLoading = false;
      // status코드를 넘겨 => 프론트 단에서 state변경해
      state.user = action.payload;
    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 회원가입  ---------------
    [__signUpUser.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__signUpUser.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      console.log("action-서버값", action);
      state.isLoading = false;
      state.user = action.payload;
    },
    [__signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 로그인 -----------------받음 payload(username),data
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      // 여기서 뭐해줘야 하지? 스토어에 저장할 값.
      // 토큰은 쿠키에 저장했으니까 안해줘도 될거같고
      // 유저 데이터랑, 성공메세지(알림띄움용) 보내주면 될듯. 
      console.log("action-서버값", action);
      const username = action.meta.email
      console.log(username)

      // store에 들어있는 값은 무엇? 로그인 한 유저의 정보만 있는건가?
      // store는 모든 유저의 데이터가 들어있나??? 아닌것 같음. 
      // 리덕스는 새로고침하면 정보가 사라지니까
      // 토큰도 스토어에 저장하면 안됨. 그렇네.  
      // 그렇다면. 로그인 할때 store값은 별로 중요하지 않다 
      state.user = { username }; 
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
