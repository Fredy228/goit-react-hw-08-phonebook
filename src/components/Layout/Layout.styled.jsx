import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;

export const Container = styled.div`
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #dcefff;
`;

export const Header = styled.header`
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 360px) {
        padding: 7px;
    }
`;