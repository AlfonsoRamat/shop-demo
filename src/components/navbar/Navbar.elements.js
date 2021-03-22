import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from '../../GlobalStyles';
import { FaRecycle, FaShoppingCart } from 'react-icons/fa';

export const Nav = styled.div`
    background: #c0fcbb;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;    
    position: sticky;
    top: 0;
    font-size: 1.2rem;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content: space-between;
height:80px;
${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaRecycle)`
    color: darkgreen;
    margin-left: 0.6rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction:column;
    width: 100%;
    background: #6c9475;
    height: 90vh;
    position:absolute;
    top: 80px;
    left: ${({ mobileState }) => (mobileState ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
}`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    &:hover{
        border-bottom: 2px solid darkgreen;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        &:hover{
            border: none;
        }
    }`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}`;

export const CartIcon = styled(FaShoppingCart)`
    color: white;
    width: 100%;
&:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
}`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}`;

export const NavBtnLink = styled(Link)`
display:flex;
justify-content:center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%auto;
border: none;
outline: none;
`;
