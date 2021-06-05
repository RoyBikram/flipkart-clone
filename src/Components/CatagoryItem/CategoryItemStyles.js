import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 7px 1px #d8d8d8;
transition: 500ms;
position: relative;
padding: 30px 30px 50px 30px;
&:hover{
    box-shadow: 0px 0px 7px 1px #676767;
}
`
export const CategoryImg = styled.img`
max-width: 90%;
max-height: 90%;
margin: auto;
`
export const CategoryTitle = styled.div`
font-size: 18px;
color: black;
font-weight: 500;
position: absolute;
bottom: 20px;
text-align: center;
`