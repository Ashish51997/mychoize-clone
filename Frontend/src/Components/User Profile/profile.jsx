import React, { useState } from "react";
import Styled from "styled-components";

function Profile() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);
  const [step7, setStep7] = useState(false);

  const viewStep1 = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(false);
    setStep6(false);
    setStep7(false);
  };
  const viewStep2 = () => {
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);
    setStep5(false);
    setStep6(false);
    setStep7(false);
  };
  const viewStep3 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
    setStep4(false);
    setStep5(false);
    setStep6(false);
    setStep7(false);
  };
  const viewStep4 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(true);
    setStep5(false);
    setStep6(false);
    setStep7(false);
  };
  const viewStep5 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(true);
    setStep6(false);
    setStep7(false);
  };
  const viewStep6 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(false);
    setStep6(true);
    setStep7(false);
  };
  const viewStep7 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(false);
    setStep6(false);
    setStep7(true);
  };


  return (
    <Wrapper>
      <Profiles>
        <p>
          {" "}
          USER <strong> PROFILE</strong>
        </p>
        <hr />
        <img
          src="https://www.mychoize.com/imgs/icons/user-profile.png"
          alt=""
        />
        <div>
          <strong>Ashish kumar roul</strong>{" "}
        </div>
        <div>918342094808 </div>
        <Mail>aroul303@gmail.com </Mail>
        <Button1 value={step1} id="one" onClick={viewStep1}>
          Manage Your Documents
        </Button1>
        <Button1 value={step2} id="two" onClick={viewStep2}>
          Update Profile
        </Button1>
        <Button1 value={step3} id="three" onClick={viewStep3}>
          Upcoming Bookings
        </Button1>
        <Button1 value={step4} id="four" onClick={viewStep4}>
          Booking History
        </Button1>
        <Button1 value={step2} id="two" onClick={viewStep5}>
          Subscription Bookings
        </Button1>
        <Button1 value={step3} id="three" onClick={viewStep6}>
          Cancelled Bookings
        </Button1>
        <Button1 value={step4} id="four" onClick={viewStep7}>
          Change Password
        </Button1>
      </Profiles>
      <Descreption>
        <ItemWrapper>
          {step1 && (
            <>
              <Manage>
                <h3>Manage Your Documents</h3>
                <hr />
                <DocumentWrapper>
                  <Document>
                    <Preview></Preview>
                    <div>
                     <FirstInput type='file'  />
                     
                         </div>
                  </Document>
                  <Document>
                    <Preview></Preview>
                    <SecondInput type="file"/>
                  </Document>
                  <Document>
                    <Preview></Preview>
                    <ThirdInput type="file"/>
                  </Document>
                  <Document>
                    <Preview></Preview>
                    <ForthInput type="file"/>
                  </Document>
                  <Document>
                    <Preview></Preview>
                    <FifthInput type="file"/>
                  </Document>
                </DocumentWrapper>
              </Manage>
            </>
          )}
          {step2 && (
            <>
              <Manage>
                <h3>Update Your Profile</h3>
                <hr />
                <Formu>
                  <Input>
                    <input type="text" placeholder="Enter your First name" />
                  </Input>
                  <Input>
                    <input type="text" placeholder="Enter your Last Name" />
                  </Input>
                  <Input>
                    <input type="text" placeholder="Enter your Email ID " />
                  </Input>
                  <Input>
                    <input type="text" placeholder="Enter your Phone Number" />
                  </Input>
                  <Input>
                    <select name="gender" id="gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Dont want to Disclose">
                        Dont want to Disclose
                      </option>
                    </select>
                  </Input>
                  <Input>
                    <input type="text" placeholder="Enter your Date Of Birth" />
                  </Input>
                  <Input>
                    <input
                      type="text"
                      placeholder="Enter your PAN Card Number"
                    />
                  </Input>
                  <Input>
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="2"
                      cols="50"
                      placeholder="Enter your Address"
                    />
                  </Input>
                  <Input>
                    <input type="text" placeholder="pincode" />
                  </Input>

                  <input type="submit" name="Update" id="submit" />
                </Formu>
              </Manage>
            </>
          )}
          {step3 && (
            <>
              <Manage>
                <h3>Your Upcoming Bookings</h3>
                <hr />
              </Manage>
            </>
          )}
          {step4 && (
            <>
              <Manage>
                <h3>Your Booked History</h3>
                <hr />
              </Manage>
            </>
          )}
          {step5 && (
            <>
              <Manage>
                <h3>Your Booked History</h3>
                <hr />
              </Manage>
            </>
          )}
          {step6 && (
            <>
              <Manage>
                <h3>Your Cancelled Bookings</h3>
                <hr />
              </Manage>
            </>
          )}
          {step7 && (
            <>
              <Manage>
                <h3>Change Your Password</h3>
                <hr />
                <Formu>
                  <Input>
                    <input type="text" placeholder="current Password" />
                  </Input>
                  <Input>
                    <input type="text" placeholder="New Password" />
                  </Input>
                  <Input>
                    <input type="text" placeholder="Confrim Password" />
                  </Input>

                  <input type="submit" value="Update" id="submit" />
                </Formu>
              </Manage>
            </>
          )}
        </ItemWrapper>
      </Descreption>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = Styled.div`
display: flex;
width:85%;
margin: auto;
justify-content:center;
gap:5%

`;
const Profiles = Styled.div`
/* display: flex;
flex-direction: column;
justify-content: center; */
width:28%;

min-width:280px;
max-width:280px;
padding: 10px;
border:1px solid red;

`;
const Descreption = Styled.div`


`;
const ItemWrapper = Styled.div`
width:800px;
border:1px solid red;
height:600px;

`;
const Button1 = Styled.div`
width:90%;
height:30px;
text-align:left;
color:blue;
margin-left: 3%;
border-bottom: 1px solid grey;
margin-bottom:10px ;
:hover{
    cursor: pointer;
   text-decoration:underline;
}



`;
const Mail = Styled.div`
height:100px;

`;
const DocumentWrapper = Styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content:center;


`;
const Manage = Styled.div`
width:100%;
height:fit-content;

`;
const Document = Styled.div`
width:200px;

`;
const Preview = Styled.div`
height:100px;

`;
const Input = Styled.div`
  height:40px;
  width:300px;
  display: flex;
  justify-content:left;
  border-radius:5px ;
  align-items:center;
  margin:auto;
  border:1px solid gray;
  input{
    border:none;
    outline:none;
    padding: 5px;

  }
  textarea{
    border:none;
    outline:none;
    padding: 5px;


  }
  select{
    border:none;
    outline:none;
    padding: 5px;
    text-decoration:none;

  }
  /* box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%); */
  
margin-bottom:10px;

`;
const Formu = Styled.div`
#submit{
  background-color:rgb(193,31,34);
  width:200px;
  height:30px;
  border-radius:5px;
  margin-top:20px;
  color:white;
  border:none;
}
`
const FileInput = Styled.input`
border:none;
background-color:red;
color:transparent;
width:100px;
::before{
  color:white;
  background:transparent;
  width:60%;
  padding-left:20px;
}

::-webkit-file-upload-button {
    visibility: hidden;
    }

`
const FirstInput = Styled(FileInput)`
    ::before{
      content: " DL Frontside";
    };
`

const SecondInput = Styled(FileInput)`
    ::before{
      content: "DL Backside"
    }
`
const ThirdInput = Styled(FileInput)`
    ::before{
      content: "Other Documents "
    }
`
const ForthInput = Styled(FileInput)`
    ::before{
      content: "Adhar Frontside"
    }
`
const FifthInput = Styled(FileInput)`
    ::before{
      content: "Adhar Backside"
    }
`

