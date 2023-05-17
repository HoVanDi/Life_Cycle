import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import Fisrt from './Fisrt';
 function Fetch() {

  // khai báo state, sử dụng hook: useState
  const[listUser, setListUser] = useState([]);

  // sử dụng useEffect hock như componentDidmout
  useEffect(()=>{
    const getUserAPI ='https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users'

    // gọi API bằng axios
    axios.get(getUserAPI).then((res)=>{
      // cập nhật lại listuser
      setListUser(res.data);
    })
    .catch((err) =>{
      console.log(err);
      swal("Xảy ra lỗi")
    });
  }, []);
  return (
    <div>
      <code>freetuts.net</code>

      <Fisrt listUser= {listUser}/>
    </div>
  );
}

export default Fetch;

