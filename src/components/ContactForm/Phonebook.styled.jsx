import styled from 'styled-components';

export const From = styled.form`
    width: 400px;
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
    input {
        width: 300px;
    }
`;


