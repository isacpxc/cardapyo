import React from "react";
import Header from "../partials/Header"
import "../styles/home.css"

class Home extends React.Component{
  render(){
    const redirectPlus = ()=>{
      window.location.href = '/pedidos'
    }

    return (
      <div className="hold-page">
        
        <Header/>
        <a className="fixed-menu" href="/pedidos">
          <img src="/assets/img/icons/cart48.png" alt="" />
        </a>
          <div className="carrousel">
            <div className="hold-category-box">
              <div className="category-box extend"><span>asddddsa</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
              <div className="category-box"><span>span</span></div>
            </div>
          </div>

        <div className="body-page">
          
          <div className="content-menu">
            <div className="category">
              <div className="category-name"><span className="category-text">Category</span></div>
              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus">
                  <button className="plus-btn" onClick={(e)=>{
                    e.preventDefault()
                    redirectPlus()
                  }}><img src="/assets/img/icons/plus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>

              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus" >
                  <button className="plus-btn"><img src="/assets/img/icons/plus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>
              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus">
                  <button className="plus-btn"><img src="/assets/img/icons/plus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>
              
            </div>

            <div className="category">
              <div className="category-name"><span className="category-text">Category</span></div>
              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus">
                  <button className="plus-btn"><img src="/assets/img/icons/minus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>

              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus">
                  <button className="plus-btn"><img src="/assets/img/icons/plus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>
              <div className="content">
                <a className="image-food" href="/detalhes">
                  {/* <img src="/assets/img/foodImg/food-1.jpg" alt="" /> */}
                  </a>
                <div className="desc-food">
                  <div className="title-food"><a className="category-text" href="/detalhes">Pizza de Calabresa</a></div>
                  <div className="desc-food-text"><span className="text-desc">Lorem ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am ipsum dolor, sit am</span></div>
                  <div className="price-food"><span className="price-food-text">R$ 6,00</span></div>
                </div>
                <div className="btn-plus">
                  <button className="plus-btn"><img src="/assets/img/icons/plus60.png" alt="eye icon to see the product"/></button>
                </div>
              </div>
              
            </div>
            <div className="phantom-div"></div>
          </div> {/* end of .content-menu */}
          
        </div>{/* end of .body-page */}
        
      {/* end of .content-menu */}</div>
    );
  }
}

export default Home;