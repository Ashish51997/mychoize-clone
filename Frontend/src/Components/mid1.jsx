import React from "react";
import styled from "styled-components";

function Mid1() {
  return (
    <Wrapper>
      <h1>Self Drive Car Rental in India</h1>
      <hr />
      <h5>
        Unbeatable Rates. Easy & Quick Online Car Booking. Clean & Well
        Maintained Fleet
      </h5>
      <Stage2>
        <Stage5>
          <p>
            Presenting MyChoize Self Drive Car Rental Service from the house of
            Japan’s Second Largest Self Drive Car Rental Company - ORIX, having
            the know-how and experience of flawlessly managing fleets of over
            63,000 cars in Japan. With MyChoize Car Rental Service, we endeavour
            to provide Indian users with the Best in World Japanese Service and
            Technology at Indian Prices. We are India’s fastest growing self
            drive car rental brand with a wide range of cars on rent for you to
            choose from. MyChoize self drive car rental service is currently
            present in 20 Indian cities including Bangalore, Pune, Mumbai,
            Delhi-NCR, Hyderabad, Chennai, Kolkata, Jaipur, Indore, Chandigarh,
            Ahmedabad, Surat Vadodara, Ludhiana, Amritsar, Bhopal Goa, Dehradun,
            Rishikesh and Haridwar.
          </p>

          <p>
            Be it business travel, leisure travel, intercity getaways or just
            city zipping - be spoilt for choices with our exhaustive range of
            well-maintained Hatchbacks, Sedans, MUVs, SUVs, Hybrids and Luxury
            Cars on rent. We offer over 25 vehicle makes to choose from across
            various cities, ensuring you get the best rental cars at lowest
            prices throughout India.
          </p>
          <p>
            Our self drive car rental come with unlimited kilometres so you can
            concentrate on counting memories, not kilometres.You can either pick
            up the cars on rent from one of our predefined locations near you or
            have the car of your choize hand-delivered to your doorstep, office
            or your arrival airport. So what are you waiting for? Time to book
            self drive cars on rent and ride with Lowest Prices Guaranteed!
          </p>
        </Stage5>
        <Stage3>
          <Stage4>
            <img
              src="https://www.mychoize.com/imgs/icons/ser-unlimited.png"
              alt=""
            />
            <h3>Unlimited Kilometers</h3>
            <p>
              Unlimited Kilometres Unlimited Kilometers No Kilometer Capping.
              Drive as much as you want without paying anything extra!
            </p>
          </Stage4>
          <Stage4>
            <img
              src="https://www.mychoize.com/imgs/icons/ser-limited.png"
              alt=""
            />
            <h3>Limited Liability</h3>
            <p>Freedom of driving cars as you own it minus the liabilities.</p>
          </Stage4>
          <Stage4>
            <img
              src="https://www.mychoize.com/imgs/icons/ser-unlimited.png"
              alt=""
            />
            <h3>Privacy & Freedom</h3>
            <p>
              Make every moment count with the privacy and freedom of having
              your own car.
            </p>
          </Stage4>
          <Stage4>
            <img src="https://www.mychoize.com/imgs/icons/ser-dsd.png" alt="" />
            <h3>Privacy & Freedom</h3>
            <p>
              We hand deliver and pickup your cars from your doorstep, office or
              nearby airports.
            </p>
          </Stage4>
        </Stage3>
      </Stage2>
    </Wrapper>
  );
}

export default Mid1;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;

  hr {
    width: 250px;
    border: 0.1px solid red;
  }
`;
const Stage5 = styled.div`
  width: 500px;
  text-align: left;
  font-size: 14.6px;
`;
const Stage2 = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 50px;
`;

const Stage3 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
`;
const Stage4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  width: 290px;
  height: 240px;

  img {
    height: 50px;
    width: 100px;
    margin: 0 auto;
  }
  p {
    margin-top: 20px;
  }
`;
