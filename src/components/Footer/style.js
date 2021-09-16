import styled from 'styled-components'
export const Wrapper = styled.footer`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 2px 1px rgba(235,235,235,0.5);
    background-color: #1976D2;
`;
export const Content = styled.nav`
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Text = styled.span`
    font-size: 14px;
    text-decoration: none;
    color: white;
    opacity: 0.95;
    transition: .3s;
    &:hover{
        opacity: 1;
    }
`;