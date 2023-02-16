import styled from 'styled-components';

export const From = styled.form`
    padding: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    button {
        max-width: 140px;
    }
`;

export const Label = styled.label`
    margin-bottom: 15px;
        
    div {
        width: 320px;
        @media screen and (max-width: 415px) {
            width: 250px;
        }
    }
    /* input {
        width: 320px;
        @media screen and (max-width: 415px) {
            width: 100%;
        }
    } */
`;


