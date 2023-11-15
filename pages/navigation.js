import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    margin-top: 0.5rem;

    @media (min-width: 640px) {
        height: 40px;
    }

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 0%;

    @media (min-width: 768px) {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 10px;
    }
`;

const LogoSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
    }
`;

const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

const NavBtn = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Btn = styled.button`
    border: none;
    background: none;
    padding: 8px;
    border-radius: 4px;
    color: #ccc;
    transition: background-color 0.15s ease-in-out;

    &:hover {
        color: #555;
        background-color: #f0f0f0;
    }

    &:focus {
        color: #555;
        background-color: #f0f0f0;
        outline: none;
    }
`;

const Svg = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
`;

const List = styled.div`
      display: ${props => (props.showMenu ? 'flex' : 'none')};

    @media (min-width: 768px) {
        display: flex;

        > * + * {
            margin-left: 2.5rem;
        }
    }
`;

const Button = styled.button`
    width: auto;
    height: 40px;
    border-radius: 6px;
    padding: 0 10px;

    &:hover {
        background-color: #545454;
        outline: none;
        border-color: rgb(0, 0, 255);
        border-width: 1px;

        A {
            color: white;
        }
    }

`;

const A = styled.a`
    font-size: 18px;
    color: lightgray;
    transition: color 0.15s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const LoginPart = styled.div`

    @media (min-width: 768px) {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        top: 0px;
        bottom: 0px;
        right: 0px;
        padding-right: 10px;
    }
`;

const Span = styled.span`
    display: inline-flex;
    border-radius: 6px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    margin-left: 8px;
`;

const CartText = styled.span`
    font-size: 16px;
    color: white;               /* Change Quantity Color */
    font-weight: bold;
    /* margin-left: -24px; */
    /* margin-top: 6px; */
`;

const Login = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-width: 1px;
    border-color: transparent;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    border-radius: 6px;
    color: white;
    /* background-color: blue; */
    transition-duration: 150ms;
    transition: ease-in-out;
    
    &:hover {
        background-color: #545454;
        outline: none;
        border-color: rgb(0, 0, 255);
        border-width: 1px;
    }

`;

const LoginSvg = styled.svg`
    height: 1.3em;
    padding: 0 10px;
    fill: #ffffff;
`;

export default function Debug (){
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnResize = () => {
        if (window.innerWidth >= 768) {
            setShowMenu(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('resize', closeMenuOnResize);
        return () => {
            window.removeEventListener('resize', closeMenuOnResize);
        };
    }, []);
     
    return (
        <div>
            <Container>
                <LogoContainer>
                    <LogoSubContainer>
                        <a href="#" aria-label="Home">
                            <LogoImg src="https://www.svgrepo.com/show/491978/gas-costs.svg" />
                        </a>
                    </LogoSubContainer>
                </LogoContainer>

                <List showMenu={showMenu}>
                    <Button><A href="#">Home</A></Button>
                    <Button><A href="#">Promotion</A></Button>
                    <Button><A href="#">Category</A></Button>
                    <Button><A href="#">About Us</A></Button>
                </List>

                <NavBtn>
                    <Btn type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" onClick={toggleMenu}>
                        <Svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </Svg>
                    </Btn>
                </NavBtn>

                <LoginPart>

                    {/* Shopping Cart Icon */}
                    <Span>
                        <Login href="#" title="Cart">

                            {/* Trolly Cart Icon */}
                            {/* <LoginSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                            </LoginSvg> */}

                            {/* Bag Cart Icon */}
                            <LoginSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                            </LoginSvg>

                            <CartText>1</CartText>      {/*Cart Quantity Display*/}
                        </Login>
                    </Span>

                    {/* Login Icon */}
                    <Span>
                        <Login href="#" title="Login / Sign Up">
                            <LoginSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                            </LoginSvg>
                        </Login>
                    </Span>

                </LoginPart>

            </Container>
        </div>
    )
}