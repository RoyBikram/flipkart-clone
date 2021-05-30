import styled from 'styled-components';
export const LoginandSignupContainer = styled.div`
position: absolute;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`
export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;

background-color: rgba(0,0,0,.6);
`
export const MainBody = styled.div`
height: 528px;
width: 675px;
background-color: white;
border-radius: 4px;
z-index: 5;
display: flex;
flex-direction: row;
position: relative;
`
export const SideBar = styled.div`
width: 40%;
height: 100%;
background-color: #2874f0;
padding: 40px 33px;
background-image: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
background-repeat: no-repeat;
background-position: 50% 85%;
border-radius: 4px 0px 0px 4px;
`
export const SideBarTitle = styled.div`
font-size: 28px;
font-weight: 500;
color: #fff;
`
export const SideBarPara = styled.div`
font-size: 18px;
line-height: 150%;
margin-top: 16px;
color: #dbdbdb;
`
export const CloseButton = styled.div`
position: absolute;
background: none;
border: none;
color: white;
top: -10px;
right: -35px;
font-size: 30px;
cursor: pointer;
transform: rotate(45deg);
`