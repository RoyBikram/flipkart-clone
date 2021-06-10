import styled from 'styled-components';

export const Header = styled.div`
padding: 32px;
width: 100%;
font-size: 24px;
font-weight: 500;
text-align: center;
border-bottom: #c2c2c2 solid 1px;
`
export const ProductItemContainer = styled.div`
max-width: 1000px;
width: 100%;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 20px;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
margin-bottom: 20px;
`