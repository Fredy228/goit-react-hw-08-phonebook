import styled from "styled-components";

export const BoxHome = styled.div`
    text-align: center;
`;

export const TitleHome = styled.h1`
    font-size: 35px;
    margin-top: 150px;

    @media screen and (max-width: 415px){
        font-size: 27px;
        margin-top: 100px;
    }
`;

export const TextHome = styled.p`
    font-size: 20px;

    @media screen and (max-width: 415px){
        font-size: 16px;
    }
`;