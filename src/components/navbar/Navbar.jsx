import React, { useEffect, useState } from 'react'
import { CartIcon, MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Button } from '../../GlobalStyles';
function Navbar() {

    const [mobileState, setMobileState] = useState(false);
    const [loginButton, setLoginButton] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setLoginButton(false);
        } else {
            setLoginButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    const handleMenu = () => setMobileState(!mobileState);
    const handleClick = () => { };
    return (
        <Nav>
            <NavbarContainer>
                <IconContext.Provider value={{ color: "#fff" }}>
                    <NavLogo to='/'>
                        CO.CO
                        <NavIcon />
                    </NavLogo>
                    <MobileIcon onClick={handleMenu}>
                        {mobileState ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </IconContext.Provider>
                <NavMenu onClick={handleClick} mobileState={mobileState} >
                    <NavItem>
                        <NavLinks to="/ropa">Ropa</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/calzados">Calzados</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/juguetes">Juguetes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/cart"><CartIcon size={25} /></NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {loginButton ? (<NavBtnLink to="/signup">
                            <Button primary>Ingresar</Button>
                        </NavBtnLink>) : (
                            <NavBtnLink to="/signup">
                                <Button fontBig primary>
                                    Ingresar                           
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
