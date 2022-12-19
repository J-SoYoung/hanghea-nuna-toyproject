import axios from 'axios'

// .then을 사용하면 응답받는 값
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

// catch를 사용하거나, reject콜백을 두번째 매개변수로 보내면 
// 오류처리를 사용할 수 있다. 
// 기본 동작은 2xx 범위를 벗어나는 상태 코드와 함께 
// 반환되는 모든 응답을 거부하고 오류로 처리하는 것입니다.

axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 요청은 이루어졌고, 서버가 상태코드로 응답
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      //요청은 됐으나 응답이 수신되지 않음
      console.log(error.request);
    } else {
      // 요청 설정하는 동안 오류 발생
      console.log('Error', error.message);
    }
    console.log(error.config);
  });


  // toJson을 사용하면 상세한 에러를 확인할 수 있음
  axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });

  //formData형식으로 보내려면 다시 보기
  //https://github.com/axios/axios