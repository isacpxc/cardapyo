import React from "react";
import Header from "../partials/Header";
import "../styles/orders.css"
import { redirect } from "react-router-dom";


class Orders extends React.Component{
  render(){
    return(
      <div className="main">
        <Header/>
        <div className="hold-all ">
          <div className="hold-orders-all scroll-custom">
            <div className="hold-order-all-fields">
              <div className="image-food">
                {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
              <div className="hold-set-btns">
                <div className="set-btns">
                  <button className="add-btn-order">
                    <img src="/assets/img/icons/plus60.png" alt="" />
                  </button>
                  <span className="qtd">2</span>
                  <button className="minus-btn-order"><img src="/assets/img/icons/minus60.png" alt="" /></button>
                </div>
              </div>
              <div className="desc-order">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint. Ex facilis aut perspiciatis tempora, sed laboriosam? Debitis repellat neque voluptate, accusantium impedit enim ex. Asperiores eos consequuntur neque deleniti?</span>
              </div>
            </div>

            <div className="hold-order-all-fields">
              <div className="image-food">
                {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
              <div className="hold-set-btns">
                <div className="set-btns">
                  <button className="add-btn-order"><img src="/assets/img/icons/plus60.png" alt="" /></button>
                  <span className="qtd">2</span>
                  <button className="minus-btn-order"><img src="/assets/img/icons/minus60.png" alt="" /></button>
                </div>
              </div>
              <div className="desc-order">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint. Ex facilis aut perspiciatis tempora, sed laboriosam? Debitis repellat neque voluptate, accusantium impedit enim ex. Asperiores eos consequuntur neque deleniti?</span>
              </div>
            </div>  

            <div className="hold-order-all-fields">
              <div className="image-food">
                {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
              <div className="hold-set-btns">
                <div className="set-btns">
                  <button className="add-btn-order"><img src="/assets/img/icons/plus60.png" alt="" /></button>
                  <span className="qtd">2</span>
                  <button className="minus-btn-order"><img src="/assets/img/icons/minus60.png" alt="" /></button>
                </div>
              </div>
              <div className="desc-order">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint. Ex facilis aut perspiciatis tempora, sed laboriosam? Debitis repellat neque voluptate, accusantium impedit enim ex. Asperiores eos consequuntur neque deleniti?</span>
              </div>
            </div>

            <div className="hold-order-all-fields">
              <div className="image-food">
                {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
              <div className="hold-set-btns">
                <div className="set-btns">
                  <button className="add-btn-order"><img src="/assets/img/icons/plus60.png" alt="" /></button>
                  <span className="qtd">2</span>
                  <button className="minus-btn-order"><img src="/assets/img/icons/minus60.png" alt="" /></button>
                </div>
              </div>
              <div className="desc-order">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint. Ex facilis aut perspiciatis tempora, sed laboriosam? Debitis repellat neque voluptate, accusantium impedit enim ex. Asperiores eos consequuntur neque deleniti?</span>
              </div>
            </div>

            <div className="hold-order-all-fields">
              <div className="image-food">
                {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
              <div className="hold-set-btns">
                <div className="set-btns">
                  <button className="add-btn-order"><img src="/assets/img/icons/plus60.png" alt="" /></button>
                  <span className="qtd">2</span>
                  <button className="minus-btn-order"><img src="/assets/img/icons/minus60.png" alt="" /></button>
                </div>
              </div>
              <div className="desc-order">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint. Ex facilis aut perspiciatis tempora, sed laboriosam? Debitis repellat neque voluptate, accusantium impedit enim ex. Asperiores eos consequuntur neque deleniti?</span>
              </div>
            </div> 


          </div>


          <div className="hold-all-footer">
            <div className="margin-span-btn-top"></div>
            <div className="subtotal-hold">
              <span className="span-sub">SUBTOTAL:</span>
              <span className="span-value">R$ 135,65</span>
            </div>
            <div className="margin-span-btn"></div>
            <div className="hold-btns-order">
              <button className="back-btn" onClick={(e)=>{
                  e.preventDefault();
                  window.location.href = '/'
                }}><span>Voltar</span> <img src="/assets/img/icons/left50.png" alt="" /></button>
                <button type="submit" className="buy-btn" onClick={(e=>{
                  e.preventDefault();
                  window.location.href = '/form'
                })}><span>Enviar</span> <img src="/assets/img/icons/right50.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;