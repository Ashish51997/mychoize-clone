
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {
  const arr = ["mumbai", "delhi", "hydrabad", "pune", "kolkata", "bhubaneswer"];
  const time = ["00.00", "00.30", "01.00","01.30", "02.30", "02.30","03.00", "03.30", "04.00","04.30", "05.30", "05.30","06.00", "06.30", "07.00","07.30", "08.00", "08.30","09.00", "09.30", "10.00","10.30", "11.30", "11.30","12.00", "12.30", "13.00","13.30", "14.00", "14.30","15.00", "15.30", "16.00","16.30", "17.00", "17.30","18.00", "18.30", "19.00","19.30", "20.00", "20.30","21.00", "21.30", "22.00","22.30", "23.30"];

  const init={
    city:"",
    pickdate:"",
    dropdate:"",
    picktime:"",
    droptime:"",
  
}
  const [data, setdata] = useState(init)
  const{droptime, picktime,dropdate, pickdate, city}=data
  const custom={
    width: "100%"
  }

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const handleChange = (e) => {

     const{ name, value}=e.target
    setdata({...data,[name]:value})

  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
    <Slider {...settings}>
        <div style={custom} >
          <img
            style={carouselimage}
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063052574908.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            style={carouselimage}
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063153854253.jpg"
            alt=""
          />
        </div>
        <div style={carouselimage} >
          <img
            style={carouselimage}
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063226882051.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            style={carouselimage}
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063401979359.jpg"
            alt=""
          />
        </div>
        <div >
          <img
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063459186256.jpg"
            alt=""
          />
          </div>
           <div >
          <img
            src="https://www.mychoize.com/imgs/banners/sliders/web-210719063459186256.jpg"
            alt=""
          />
        </div>
      </Slider>
      <Datecontainer>
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <h3>YOUR SAFETY IS OUR PRIORITY!</h3>
            <div>
              <span>Self Drive Cars for Rent in</span>
              <input
              onChange={handleChange}
              value={data.city}
                className="cityInput"
                list="city"
                placeholder="City Name"
                name="city"
              />
              <datalist id="city">
                {arr.map((item) => (
                  <option value={item} />
                ))}
              </datalist>
            </div>
            <TimeDiv>
              <Picktime>
                <span
                  style={{
                    textAlign: "left",
                    marginLeft: "45px",
                    fontSize: "13px",
                  }}
                >
                  When do you need a car?
                </span>
                <DatePickerStyle>
                  <input type="date"  onChange={handleChange} name="pickdate" value={pickdate} min="2021-07-21" />
                  <div>
                  <input
                      className="cityInput"
                      list="times"
                      placeholder="select"
                      name="time"
                    />
                    <datalist id="times">
                      {time.map((item) => (
                        <option value={item} />
                      ))}
                    </datalist>
                  </div>
                </DatePickerStyle>
              </Picktime>
              <Picktime>
                <span
                  style={{
                    textAlign: "left",
                    marginLeft: "45px",
                    fontSize: "13px",
                  }}
                >
                  Till when do you need it?
                </span>
                <DatePickerStyle
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {/* <DateTime
                    timeFormat={false}
                    isValidDate={disablePastDt}
                    inputProps={{ placeholder: "dd-mm-yy", outline: "none" }}
                    placeholder="ashish"
                  /> */}
                  {/* <DatePickerComponent id="datepicker"  name="pickdate" min={minDate} max={maxDate} onChange={handleChange}   />; */}
                  <input type="date"  onChange={handleChange} name="dropdate" value={dropdate} />
                  <div>
                    <input
                      className="cityInput"
                      list="times"
                      placeholder="select"
                      name="time"
                    />
                    <datalist id="times">
                      {time.map((item) => (
                        <option value={item} />
                      ))}
                    </datalist>
                  </div>
                </DatePickerStyle>
              </Picktime>
            </TimeDiv>
            <input type="submit" />
          </form>
        </div>
      </Datecontainer>
    </div>
  );
}

export default Carousal;

const DatePickerStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
   
    
    input{
        border:none;
        border-bottom: 2px solid black;
        outline: none;
        
    }
    input:focus{
        border:none;
        border-bottom: 2px solid red;
        
    }
`

const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const Picktime = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Datecontainer = styled.div`
  height: 100%;
  width: 85%;
  /* background-color:white; */
  margin-right: 10px;
  z-index: 100;
  margin: auto;
  margin-top: -420px;
  margin-left: 100px;
  display: flex;
  align-items: right;
  justify-content: right;
  .container {
    height: 350px;
    width: 500px;
    background-color: white;
    margin-left: 55%;
    z-index: 100;
  }
  .cityInput {
    border: none;
    outline: none;
    margin-left: 10px;
    border-bottom: 2px dotted black;
  }
`;

const carouselimage = {
  width: "100%",
  height: "100%",
};
const dots = {
  marginTop: "-50px",
};
const dot = {
  backgroundColor: "white",
  borderColor: "white",
};
const active = {
  backgroundColor: "red",
  borderColor: "white",
  padding: "2px",
};
