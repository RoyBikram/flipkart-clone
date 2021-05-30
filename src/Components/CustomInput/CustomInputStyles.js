import styled from 'styled-components';
export const CustomInputContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
`

export const Input = styled.input`
width: 100%;
border:none;
outline: none;
height: 40px;
font-size: 16px;
border-bottom: 1px solid #e0e0e0;
padding: 8px 5px 5px 2px;
background: transparent;
&:focus{
border-bottom: 1px solid #2874f0;
}
&:focus ~ label
{
  transform: translate(1px, -10px);
  font-size: 12px;
}
`
export const Label = styled.label`
color: #878787;
font-size: 16px;
transform: translate(1px, 7px);
position: absolute;
transition: 200ms;
z-index: -1;
&.Shrink{
  transform: translate(1px, -10px);
  font-size: 12px;
}
}
`
