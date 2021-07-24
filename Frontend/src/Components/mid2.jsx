import React, { useState } from "react";
// import styles from "./ashish.module.css"
import styled from "styled-components";

const Mid2 = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  const viewStep1 = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
  };
  const viewStep2 = () => {
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);
  };
  const viewStep3 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
    setStep4(false);
  };
  const viewStep4 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(true);
  };

  return (
    <>
      <Wrapper>
        <h2>HOW TO BOOK A CAR ONLINE</h2>
        {/* <Border></Border> */}
        <div></div>
        <p>
          You can Experience a MyChoize Self Drive Car within 2 minutes in just
          4 Steps
        </p>
        <Mainbox>
          <ButtonWrapper>
            <Button1 value={step1} id="one" onClick={viewStep1}>
              Step 1
            </Button1>
            <Button2 value={step2} id="two" onClick={viewStep2}>
              Step 2
            </Button2>
            <Button3 value={step3} id="three" onClick={viewStep3}>
              Step 3
            </Button3>
            <Button4 value={step4} id="four" onClick={viewStep4}>
              Step 4
            </Button4>
          </ButtonWrapper>
          <ItemWrapper>
            {step1 && (
              <>
                <div>
                  <h3>Search and Book Car Online</h3>
                  <p>
                    Search, Select and Book Car Online of your Choize. Pay a
                    small security deposit which is refunded to your account
                    when you return the car.
                  </p>
                </div>
                <img
                  src="https://www.mychoize.com/imgs/banners/sliders/pick-car.jpg"
                  alt=""
                />
              </>
            )}
            {step2 && (
              <>
                <div>
                  <h3>Upload Documents</h3>
                  <p>
                    Upload your driver’s license and address proof and you are
                    all set to go.
                  </p>
                </div>
                <img
                  src="https://www.mychoize.com/imgs/banners/sliders/upload-dc.jpg"
                  alt=""
                />
              </>
            )}
            {step3 && (
              <>
                <div>
                  <h3>Enjoy your Drive</h3>
                  <p>
                    We deliver your car to your selected location – be it one of
                    our many pickup points spread across the city, your home,
                    your office or the airport you are landing at.
                  </p>
                </div>
                <img
                  src="https://www.mychoize.com/imgs/banners/sliders/get-car.jpg"
                  alt=""
                />
              </>
            )}
            {step4 && (
              <>
                <div>
                  <h3>Return</h3>
                  <p>
                    After enjoying your trip, just return the car to your
                    selected location or have us pick it up from one of our many
                    drop points spread across the city, your home, your office
                    or the airport you are departing from. Your security deposit
                    refund is processed immediately after we receive the car.
                  </p>
                </div>
                <img
                  src="https://www.mychoize.com/imgs/banners/sliders/return.jpg"
                  alt=""
                />
              </>
            )}
          </ItemWrapper>
        </Mainbox>
      </Wrapper>
      <br />
      <br />
      <br />
    </>
  );
};

export default Mid2;

const Wrapper = styled.div`
  background-color: #e0e0e0;
  margin-top: "200px";
  height: 460px;
  padding: 2% 8%;
  text-align: center;
  color: #333333;
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-weight: 500;
  }
`;
const Mainbox = styled.div`
  box-shadow: 0px 5px 5px 9px rgb(0 0 0 / 0.1);
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  button {
    width: 25%;
    border: none;
    border-right: 1px solid lightgray;
    outline: none;
    font-size: 16px;
    font-weight: 600;

    cursor: pointer;
  }
`;
const Button1 = styled.button`
  background: ${(props) => (props.value ? "#FFDD00" : "#EEEEEE")};
  color: ${(props) => (props.value ? "#AD1416" : "#948787")};
`;
const Button2 = styled.button`
  background: ${(props) => (props.value ? "#FFDD00" : "#EEEEEE")};
  color: ${(props) => (props.value ? "#AD1416" : "#948787")};
`;
const Button3 = styled.button`
  background: ${(props) => (props.value ? "#FFDD00" : "#EEEEEE")};
  color: ${(props) => (props.value ? "#AD1416" : "#948787")};
`;
const Button4 = styled.button`
  background: ${(props) => (props.value ? "#FFDD00" : "#EEEEEE")};
  color: ${(props) => (props.value ? "#AD1416" : "#948787")};
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 230px;
  color: #333333;
  div {
    padding: 5px 2%;
    p {
      font-size: 14px;
      font-weight: 400;
    }
  }
  img {
    width: 47%;
  }
  h3 {
    font-weight: 500;
  }
`;
