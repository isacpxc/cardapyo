import React from 'react';
import '../styles/details.css';
import Header from '../partials/Header';

class Details extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        
        <div className="hold-all-details">
              <div className="hold-image-ing">
                <div className="img-detail">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                </div>
                  <div className="ing-order">
                    <span className='title-ing'>Ingredientes</span>
                    <div className='hold-list scroll-custom'>

                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      <label className='li-new'>
                        <div className='hold-checkbox'>
                          <input type="checkbox" name="" className='checkbox' />
                          <span></span>
                        </div>
                        <div className="li-content">dasdasd</div>
                        <div className="marked-li"></div>
                      </label>
                      
                    </div>
                  </div> 
              </div> 


              <div className="hold-order-config">
                <div className="hold-all-category">
                  <div className='title-category'><span>NOME CAT - radio</span></div>
                  
                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="choose"><input type="radio" name="" id="" /></div>
                  </div>

                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="choose"><input type="radio" name="" id="" /></div>
                  </div>

                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="choose"><input type="radio" name="" id="" /></div>
                  </div>
                  
                  <div className='title-category'><span>NOME CAT - count</span></div>
                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="hold-count">
                      <div className="hold-minus">
                        <img src="/assets/img/icons/minus48-c-g.png" alt="" />
                      </div>
                      <span>99</span>
                      <div className="hold-plus">
                        <img src="/assets/img/icons/plus48-c-g.png" alt="" />
                      </div>
                    </div>
                  </div>
                  
                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="hold-count">
                      <div className="hold-minus">
                        <img src="/assets/img/icons/minus48-c-g.png" alt="" />
                      </div>
                      <span>99</span>
                      <div className="hold-plus">
                        <img src="/assets/img/icons/plus48-c-g.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="hold-count">
                      <div className="hold-minus">
                        <img src="/assets/img/icons/minus48-c-g.png" alt="" />
                      </div>
                      <span>99</span>
                      <div className="hold-plus">
                        <img src="/assets/img/icons/plus48-c-g.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className='content-category c-span'>
                    <span className='over-hidden'>food</span>
                    <div className="hold-count">
                      <div className="hold-minus">
                        <img src="/assets/img/icons/minus48-c-g.png" alt="" />
                      </div>
                      <span>99</span>
                      <div className="hold-plus">
                        <img src="/assets/img/icons/plus48-c-g.png" alt="" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            
              
        </div>
        <div className="hold-btn-abs">
          <div className='hold-all-btn-details'>
                
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
                      window.location.href = '/pedidos'
                    })}><span>Adicionar</span> <img src="/assets/img/icons/plus60.png" alt="" /></button>
                </div>
              
          </div>
        </div>
        
            
      </div>
    );
  }
}

export default Details;