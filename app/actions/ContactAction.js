import {
    API_URL,
    SEND_ATTEMP,
    SEND_SUCCESS,
    SEND_FAILED
  } from './types';

  import axios from 'axios';
  
  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){ return (true) }
      return (false)
  };
  
  const handleResponse = (dispatch, status, message) => {
    if (status=='200') {
      dispatch({ type: SEND_SUCCESS, success: message });
    }else {
      dispatch({ type: SEND_FAILED, error: message});
    }
  }
  
  export const ContactAction = ({ name, email, title, message }) => {
    alert('a')
   /*  return (dispatch) => {
      dispatch({ type: SEND_ATTEMP });
      if(name == "" || email == "" || title == "" || message == "" ){ 
        dispatch({ type: SEND_FAILED, error: 'عفواً ، جميع الحقول مطلوبة.'}); 
      }else if(!validateEmail(email)){
        dispatch({ type: SEND_FAILED, error: 'عفواً ، يجب كتابة صيفة بريد مناسبة.'}); 
      }else{
        axios.post(API_URL+'contact-us', { 
          name: name,
          email: email, 
          subject: title, 
          message: message,
        })
        .then(resp => handleResponse(dispatch, resp.data.status, resp.data.message))
        .catch(error => console.error(error));
      }

    }; */
  }
  