import React from 'react'
import Slider from "react-slick";
import styled from "styled-components";
function Mid3carousal() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Wrapper>
             <Slider {...settings}>
          <div className="test">
            <img src="https://www.mychoize.com/imgs/testimonial/pt.png" alt="" />
            <p>Thank you for providing unlimited kilometers. Our road trip with friends was so stress free and fun because we knew we did not have to pay anything over the money each of us pooled in no matter where all we went.</p>
            <h4> Rythm Manchanda</h4>
          </div>
          <div className="test">
          <img src="https://www.mychoize.com/imgs/testimonial/rhy.png" alt="" />
          <p>I loved the service. The cars were clean and the delivery guy was polite. Thank you for the surprise gift in your car.</p>
            <h4> Sunil Sharma</h4>
          </div>
          <div className="test">
          <img src="https://www.mychoize.com/imgs/testimonial/sunil-s.png" alt="" />
          <p>Cheapest yet the most wonderful cars. I loved how MyChoize provides Japanese quality at Indian Prices. Great fun and amazing cars. Thanks</p>
            <h4> Preety Naveen</h4>
          </div >
          <div className="test">
          <img src="https://www.mychoize.com/imgs/testimonial/user-identity-icon.png" alt="" />
          <p>Your services are highly professional right from booking the car, to the prompt delivery at the designated pick up, to the Spick and span clean car, and above all extending warmth and being open to suggestions. Most felt it would be convenient and aid in travel especially during this corona pandemic period.</p>
            <h4>  Mrs. Sheikh</h4>
          </div>
        </Slider>
            
        </Wrapper>
    )
}

export default Mid3carousal

const Wrapper= styled.div`
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
width: 70%;
margin: auto;
margin-top: 100px;

.test{
    width:30%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
    img{
        margin: auto;
        border: 0.5rem solid rgb(233,233,233);
        border-radius:50%;
    }
}

`;
