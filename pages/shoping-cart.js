import styled from "styled-components"
import React, { useState } from 'react';
import Navigation from "./navigation";

const Container = styled.div`
    background-color: rgb(209, 213, 219);
    height: 100vh;
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: 0;
    padding-right: 0;
`;

const SubContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: 0 1rem;

    @media (min-width: 640px) {
        max-width: 640px;
    }

    @media (min-width: 768px) {
        max-width: 768px;
    }

    @media (min-width: 1024px) {
        max-width: 1024px;
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
    }

    @media (min-width: 1536px) {
        max-width: 1536px;
    }
`;

const Header = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Cart = styled.div`
    @media (min-width: 768px) {
        width: 75%;
    }
`;

const CartBox = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1rem;
`;

const Table = styled.table`
    width: 100%;
    color: black;
`;

const Th = styled.th`
    text-align: center;
    font-weight: 600;
`;

const Td = styled.td`
    padding: 1rem 0;
    text-align: center;
`;

const CartContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
`;

const Img = styled.img`
    height: 6rem;
    width: 6rem;
    margin-right: 1rem;
`;

const ProductName = styled.span`
    font-weight: 600;
`;

const Btn = styled.button`
    border-width: 1px;
    border-radius: 0.375rem;
    padding: 0.25rem 0.75rem;
    font-weight: bold;
    font-size: 18px;

    &:hover {
        background-color: lightgray;
    }
`;

const Qty = styled.span`
    text-align: center;
    width: 2rem;
`;

const Summary = styled.div`
    color: black;
    @media (min-width: 768px) {
        width: 25%;
    }
`;

const SummaryBox = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
`;

const Header2 = styled.h2`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const SummaryContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

const Line = styled.hr`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const SummaryTotal = styled.span`
    font-weight: 600;
`;

const SubmitBtn = styled.button`
    background-color: black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #a6a6a6;

        H2 {
            color: black;
        }
    }
`;

const H2 = styled.h2`
    font-size: 1.25em;
    font-weight: 600;
    color: gray;
    position: relative;

    &::after {
        content: "Checkout";
        position: absolute;
        padding: 0 6.25rem;
        top: 0;
        left: -100px;
        color: teal;

        clip-path: ellipse(
            100px 100px at 0% center
        );

        animation: animate 7s infinite;

        @keyframes animate {
            0% , 100% {
                clip-path: ellipse(
                    100px 100px at 0% center
                );
            }
            50%{
                clip-path: ellipse(
                    100px 100px at 100% center
                );
            }
        }

        background-image: linear-gradient(
            60deg, #00d0ff, #4dff03, #ff0058, #ffbc00
        );
        -webkit-background-clip: text;
        color: transparent;
    }
`;

export default function ShoppingCart(){
    const [selected, setSelected] = useState(false);

    return(
        <div>
            <Navigation/>

            <Container>
                <SubContainer>
                    <Header>Shopping Cart</Header>
                    <BoxContainer>
                        <Cart>
                            <CartBox>
                                <Table>
                                    <thead>
                                        <tr>
                                            <Th>Select</Th>
                                            <Th>Product</Th>
                                            <Th>Price</Th>
                                            <Th>Quantity</Th>
                                            <Th>Total</Th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <Td>
                                                <input type="radio" checked={selected} onClick={() => setSelected(!selected)} />
                                            </Td>
                                            <Td>
                                                <CartContent>
                                                    <Img src="slide-image/test123.jpg" alt="Product image"/>
                                                    <ProductName>Product name</ProductName>
                                                </CartContent>
                                            </Td>
                                            <Td>RM 19.99</Td>
                                            <Td>
                                                <CartContent>
                                                    <Btn>-</Btn>
                                                    <Qty>1</Qty>
                                                    <Btn>+</Btn>
                                                </CartContent>
                                            </Td>
                                            <Td>RM 19.99</Td>
                                        </tr>

                                        {/* <!-- More product rows --> */}

                                    </tbody>
                                </Table>
                            </CartBox>
                        </Cart>

                        <Summary>
                            <SummaryBox>
                                <Header2>Summary</Header2>

                                <SummaryContent>
                                    <span>Subtotal</span>
                                    <span>RM 19.99</span>
                                </SummaryContent>

                                <SummaryContent>
                                    <span>Taxes</span>
                                    <span>RM 1.99</span>
                                </SummaryContent>

                                <SummaryContent>
                                    <span>Shipping</span>
                                    <span>RM 0.00</span>
                                </SummaryContent>

                                <Line/>

                                <SummaryContent>
                                    <SummaryTotal>Total</SummaryTotal>
                                    <SummaryTotal>RM 21.98</SummaryTotal>
                                </SummaryContent>

                                <SubmitBtn>
                                    <H2>Checkout</H2>
                                </SubmitBtn>
                            </SummaryBox>
                        </Summary>
                    </BoxContainer>
                </SubContainer>
            </Container>
        </div>
    )
}