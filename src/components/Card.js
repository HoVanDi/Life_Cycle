import React from 'react'

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
  alert("Đã thêm vào giỏ hàng thành công")
}

export default Card;
