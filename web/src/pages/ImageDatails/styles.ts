import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-top: -4rem;
        margin-bottom: 4rem;
    }
`;

export const StyledContainerImage = styled.div`
    width: 100%;
    max-width: 1080px;
    height: 600px;
    display: flex;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    box-sizing: border-box;
    align-items: flex-end;

    img {
        border-radius: 6px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.7);
        transition: visibility 0s linear 0s, opacity 300ms;
        opacity: 1;
    }
    img::after {
        opacity: 1;
    }
    div {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 6px 0;
        min-width: 250px;
        box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.3);
        background: ${(props) => props.theme.colors.light};
        span {
            color: ${(props) => props.theme.colors.textDark};
            font-size: ${(props) => props.theme.fontSizes.medium};
            font-weight: bold;
        }

        span + span {
            margin-top: 1rem;
        }
    }
`;
