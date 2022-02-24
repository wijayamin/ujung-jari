export default function ({ $axios, $auth }){
  $axios.interceptors.response.use(function (response) {
    return response; // 2xx
  }, function (error) {
    return Promise.reject(error); // !2xx
  });
}