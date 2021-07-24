import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class MidCarousal extends Component {
  render() {

   
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
        <Wrapper1>
      <Wrapper>
        <h2> FEATURED IN</h2>
        <hr />
        <p>A glimpse of how we are changing the Indian Car Rental Industry, one car at a time</p>
        <Wrapper2>
        <Slider {...settings}>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/et-tech.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/btw.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/iw.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/etnow.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/your-story.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/6.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/uni.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/8.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/9.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/10.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/small-business-economics-times.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/uni.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/the-economics.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/the-economics.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/the-economics.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/outloook.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/india-news.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/experss-drive.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/auto-news-press.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/auto-news-press.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/BS.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/ndtv-c&auto.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/cnbc-18.png" alt="" />
          </div>
          <div>
            <img className="image" src="https://www.mychoize.com/imgs/clients/DNA.png" alt="" />
          </div>

          
        </Slider>
        </Wrapper2>
      </Wrapper>
      <Transparent>
          <div className="left">
           <p>BOOK SELF-DRIVE CARS</p>
           <hr />
           <h1>ON THE GO</h1>
          </div>
          <div className="right">
              <h6>DOWNLOAD THE MYCHOIZE APP TODAY</h6>
              <div>
                  <img src="https://www.mychoize.com/imgs/icons/gp.png" alt="" />
                  <img src="https://www.mychoize.com/imgs/icons/itunes.png" alt="" />
              </div>

          </div>

      </Transparent>
      <Wrapper3>
          <img src="https://www.mychoize.com/imgs/icons/tm-left.png" alt="" />
          <p>Testimonials</p>
          <hr />
          <h4>Here is what our users are saying</h4>


      </Wrapper3>
      </Wrapper1>
    );
  }
}
const Wrapper3 = styled.div`
width: 100%;
margin: auto;
height:100px;
background-color: white;
hr{
    border: 1px solid;
    width:80px;
}
img{
    margin-top: 30px;
}
h4{
    margin-top:-1px;
}
`;

const Transparent =styled.div`

width: 100%;
margin-top: 10px;
display: flex;
justify-content:center;
align-items:center;
gap:17%;
h6{
    color:white;
    font-size:20px;
    margin-top: -20px;


}
img{
    margin-top: -40px;
}
h1{
    font-size:67px;
    color:white;
    margin-top: -10px;
}
hr{
    width:100px;
    border: 1px solid red;
}
p{
    font-size:37px;
    color:white;
    margin-bottom: -10px;

}
.left{

}

`;
const Wrapper2 = styled.div`
width: 70%;
margin: auto;
height:150px;
`;

const Wrapper1 = styled.div`
background-image: url("https://www.mychoize.com/imgs/banners/gp-banner.png");
background-position: sticky !important;
background-size: cover !important;
width: 100%;

`

const Wrapper = styled.div`
background-color: white;
width :100% ;
display:flex;
flex-direction: column;



/* margin-left: 100px; */
margin: auto;
hr{
    border: 1px solid red;
    width: 250px;
 
}
p{
    margin-bottom: 50px;
}
.image{
    cursor: pointer;
    margin-bottom: 40px;
    filter: grayscale(0);
   :hover{
    box-shadow: 0 0 16px -4px rgb(0 0 0 / 75%);
   }
   
}

 .slick-dots{
margin-top: 30px;
z-index: 30;

text-align: center;
li{

button{
:after{
    color:black;
    }

 
:before{

color:#FFDD00;
 font-size:17px;
 
}

 

}
}
}


`;
