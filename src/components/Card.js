import React from 'react'
import Swal from 'sweetalert2';

const Card =(props)=> {
  return (
    <>
    <div>
      <img src={props.image} />
      <p>{props.nameItem}</p>
      <p>{props.price}</p>
      <button type = "button" onClick={()=> Alert()}>Mua Ngày</button>
    </div>
    </>
  );
};

function Alert() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Cảm ơn bạn đã mùa hàng',
    showConfirmButton: false,
    timer: 1500
  })
}

export default Card;
