import styled from "styled-components"

const Text = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H2 = styled.h2`
    font-size: 2em;
    color: #333;
    position: relative;

    &::after {
        content: "Checkout";
        position: absolute;
        top: 0;
        left: 0;
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
            60deg, #00d0ff, #4dff03, #ff0058,#ffbc00, #ff0058
        );
        -webkit-background-clip: text;
        color: transparent;
    }
`;

export default function TestPage(){
    return (
        <div>
            <Text>
                <H2>Checkout</H2>
            </Text>
        </div>
    )
}