import styled from 'styled-components';

export const ListContacts = styled.ul`
    margin: 10px 0;
    max-width: 420px;
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-height: 420px;
    overflow-y: scroll;
`;

export const ItemContact = styled.li`
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(0, -50%);
        width: 75px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Text = styled.p`
`;

export const Button = styled.button`
    width: 70px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;




