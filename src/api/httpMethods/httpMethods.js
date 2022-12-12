import axios from 'axios'

 const Post = (url, body) => {
  //return axios.post(url, data)
   return axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: body
  })
}


 const Get = (url) => {
    //return axios.post(url, data)
     return axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      }
    })
}
  

 const Put = (url, body) => {
    //return axios.post(url, data)
     axios({
      method: "put",
      url: url,
      headers: {
        "Content-Type": "application/json",
        },
      data: body
    })
}
  
 const Del = (url, body) => {
    //return axios.post(url, data)
 axios({
      method: "delete",
      url: url,
      headers: {
        "Content-Type": "application/json",
        }
    })
 }
  
 export { Post, Get, Put, Del}