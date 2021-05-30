import styled from 'styled-components';
export const CustomButtonContainer = styled.button`
${
    ({ styleOf }) => {
        switch (styleOf) {
            case 'HEADERLOGIN': {
                return (
                    `background-color: white;
                    height: 30px;
                    width: 120px;
                    font-weight: 600;
                    color: #2874f0;`
                )
            }
            case 'ORANGEBUTTON': {
                return (
                    `background-color: #fb641b;
                    height: 48px;
                    width: 100%;
                    color: white ;`
                )
            }
            case 'AUTHWITHGOOGLE': {
                return (
                    `background-color: #2874f0;
                    height: 48px;
                    width: 100%;
                    color: white ;`
                )
            }
            default:
                break;
        }
    }
}
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
border: none;
cursor: pointer;
`

export const Context = styled.span`
/* transform: translateY(-10%); */
`