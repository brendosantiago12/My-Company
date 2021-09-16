import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const NavBar = styled.header`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    box-shadow: 2px 2px 2px 1px rgba(235,235,235,0.5);
    background-color: #1976D2;
    z-index: 999;
`;
export const NavMenu = styled.nav`
    width: 80%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled(Link)`
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    color: white;
    opacity: 0.95;
    transition: .3s;
    &:hover{
        opacity: 1;
    }
`;
export const User = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: rgba(0,0,0,0.7);
    background-color: #FFFFFF;
    font-size: 16px;
    opacity: 0.95;
    transition: .3s;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`;