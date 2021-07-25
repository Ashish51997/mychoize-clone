// import React from 'react';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

// const UserInfoContainer = styled.div`
//     margin: 1%;
//     border: 1px solid lightgray;
//     border-radius: 3px;

//     & > .head {
//         background-color: gray;
//         display: grid;
//         grid-template-columns: 50% 50%;
//         color: white;
        
//         & > div:nth-child(1) {
//             padding: 2%;
//             font-size: 1.3em;
//             background-color: black;
//         }

//         & > div:nth-child(2) {
//             padding: 2%;
//             font-size: 1.3em;
//             text-align: right;
//             background-color: #c21313;
//         }

//         & > div:hover {
//             cursor: pointer;
//             filter: contrast(70%);
//         } 
//     }

//     & > .userInfo {
        
//         & > .login, .signin {
//             text-align: center;
//             padding: 5%;

//             & > div:nth-child(1) {
//                 padding: 3%;
//             }

//             & > .loginForm, .signinForm {
//                 display: flex;
//                 justify-content: center;
//                 flex-direction: column;
//                 padding: 1% 30%;

//                 & > input {
//                     border: 1px solid gray;
//                     outline: none;
//                     border-radius: 3px;
//                     margin: 1%;
//                     padding: 1%;
//                     font-size: 1.1em;
//                 }

//                 & > .loginBtn, .signinBtn {
//                     background-color: red;
//                     color: white;
//                     font-size: 1.3em;
//                     margin: 5% 0;
//                     padding: 2%;
//                     border-radius: 3px;

//                     :hover {
//                         cursor: pointer;
//                         filter: contrast(70%);
//                     }
//                 }
//             }
//         }

//     }
// `;

const UserInfo = ({handleStep}) => {
    const history = useHistory();
    const auth = localStorage.getItem("token");

    console.log(auth);

    if (auth.trim().length) {
        handleStep(3);
    }
    else {
        history.push('/user/login');
    }
    // const [login, hideLogin] = React.useState(true);

    // const handleLogin = (bool) => {
    //     hideLogin(bool);
    // }
    return (<></>);
    //    <UserInfoContainer>
    //         <div className="head">
    //             <div onClick={() => handleLogin(true)}>LOGIN</div>
    //             <div onClick={() => handleLogin(false)}>SIGNUP</div>
    //         </div>
    //         <div className="userInfo">
    //             {
    //                 login ?
    //                 <div className="login">
    //                     <div>PLEASE LOGIN WITH YOUR <b>REGISTERED MOBILE NUMBER</b></div>
    //                     <div className="loginForm">
    //                         <input type="number" placeholder="Phone Number"/>
    //                         <input type="password" placeholder="Password"/>
    //                         <div className="loginBtn">LOGIN</div>
    //                     </div>
    //                 </div> :
    //                 <div className="signin">
    //                     <div>PLEASE PROVIDE A VALID MOBILE NUMBER AS WE SEND AN OTP FOR SIGNUP CONFIRMATION</div>
    //                     <div className="signinForm">
    //                         <input type="text" placeholder="First Name"/>
    //                         <input type="text" placeholder="Last Name"/>
    //                         <input type="email" placeholder="Email"/>
    //                         <input type="number" placeholder="Phone Number"/>
    //                         <input type="password" placeholder="Password"/>
    //                         <input type="password" placeholder="Re-enter Password"/>
    //                         <div className="signinBtn">SIGNUP</div>
    //                     </div>
    //                 </div>
    //             }
    //         </div>
    //     </UserInfoContainer>
    // )
}

export default UserInfo
