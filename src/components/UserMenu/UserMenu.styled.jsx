import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

export const BoxUserMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextUser = styled.div`
    font-size: 18px;
    margin: 0 10px;
    @media screen and (max-width: 415px) {
        display: none;
    }
`;

export const AvatarUser = styled(Avatar)`
    @media screen and (max-width: 415px) {
        margin-right: 10px;
    }
`;