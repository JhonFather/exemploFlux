import styled from 'styled-components';
import { styled as styledMui } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
`;

export const StyledPictureList = styled.ul`
    width: 100%;
    margin: 3rem 1rem;
    max-width: 1080px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    list-style: none;

    li {
        display: flex;
        width: 100%;
        flex-direction: column;
        background: ${(props) => props.theme.colors.light};
        border-radius: 4px;

        img {
            border-radius: 3px 3px 0 0;
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: center;
        }

        div {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                color: ${(props) => props.theme.colors.textDark};
                font-size: ${(props) => props.theme.fontSizes.medium};
                font-weight: bold;
            }

            span + span {
                margin-top: 1rem;
            }
        }
    }
`;

export const StyledButtonList = styledMui(ButtonBase)`
    transition: all 0.2s;
    border-radius: 4px;
    @media (hover: hover) {
        &:hover {
            transform: translateY(-10px);
            box-shadow: 0px 0px 25px 5px black;
        }
    }
`;
