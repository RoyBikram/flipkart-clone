import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100wh;
    height: 56px;
    background-color: #2874f0;
    display: flex;
    justify-content: center;
`
export const HeaderItemsContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 55%;
    margin-left: 20px;
`
export const Img = styled.img`
    height: 30px;
    width: 100px;
`
export const Search = styled.div`
    background-color: white;
    margin: 10px;
    height:36px;
    width: 100%;
    border-radius: 3px;
    min-width: 250px;
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    width: 35%;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 20px;
`
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    width: 60px;
    height: 36px;
`
export const ArrowIconImg = styled.img`
    margin: 5px;
    transform: rotate(270deg);
`

export const IconImg = styled.img`
margin: 5px;
height: 15px;
width: 15px;

`