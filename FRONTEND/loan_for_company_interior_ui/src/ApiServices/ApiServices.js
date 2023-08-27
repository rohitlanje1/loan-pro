import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/'

// let user = JSON.parse(sessionStorage.getItem('data'));
// const token = user.data.id;
// "Authorization":`Bearer ${token}`


export const addUser = (data) => {
    data.photo = data.photo[0]
    data.signature = data.signature[0]
    // data.username = data.email
    return axios.post(`${url}user/`,data,{headers:{'Content-Type':'multipart/form-data'}})
}

export const addDefaulter = (data) => {
    return axios.post(`${url}defaulter/`,data)
}
export const addEnquiry = (data) => {
    return axios.post(`${url}enquiry/`,data)
}

export const customerRegist = () => {
    return axios.get(`${url}user_filter/?search=Customer`)
}
export const applicationInprocess = () => {
    return axios.get(`${url}application/`)
}
export const applicationApproved = () => {
    return axios.get(`${url}disbursment/`)
}
// export const applicationRejected= () => {
//     return axios.get(`${url}/`)
// }





//************************************************************** */



export const getApplications = () =>{
    return axios.get(`${url}application/`);
}

export const getUsers = () =>{
    return axios.get(`${url}user/`);
}

export const getUser = (id) =>{
    return axios.get(`${url}user/${id}/`);
}

export const saveUser = (data, id) => {
    console.log('submitted data---->', data)
    if (data.photo != null) {
        data.photo = data.photo[0]
      } else if (data.signature != null) {
        data.signature = data.signaturep[0]
      } else {
        
      }
    
    data.signature = data.signature[0]
    console.log('data.signature---------->', data.signature)
    return axios.put(`${url}user/${id}/`, data, {headers:{'Content-Type':'multipart/form-data'}});
}

export const getDocument= (id) =>{
    return axios.get(`${url}doc/${id}/`);
}
export const getApplication = (id) =>{
    return axios.get(`${url}application/${id}`);
}

export const getDocuments= () => {
    return axios.get(`${url}doc/`);
}
