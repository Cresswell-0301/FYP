import ChatBox from "./chatbox";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 1.5rem;
    @media (min-width: 1024px) {
        padding: 1.5rem;
    }
    background-color: #2D3748;
`;

const Top = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 24rem;
    @media (min-width: 640px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 24rem;
    }
`;

const Img = styled.img`
    margin-left: auto;
    margin-right: auto;
    height: 2.5rem;
    width: auto;
`;

const TxtContainer = styled.div`
    border-radius: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H2 = styled.h2`
    margin-top: 2rem;
    text-align: center;
    font-weight: bold;
    line-height: 2.25rem;
    letter-spacing: -0.025em;
    color: #4299E1;
    font-size: 1.5em;
    position: relative;
    
    &::after {
        content: "Login/SignUp";
        position: absolute;
        padding: 0 6.25rem;
        top: 0;
        left: -100px;
        color: teal;

        clip-path: ellipse(
            100px 100px at 0% center
        );

        animation: animate 8s infinite;

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

const Space = styled.span`
    /* padding: 0 2px; */
`;

const InputContainer = styled.div`
    margin-top: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 24rem;
    @media (min-width: 640px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 24rem;
    }
`;

const Form = styled.form`
    --space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--space-y-reverse));

    & > :not([hidden]) ~ :not([hidden]) {
        --space-y-reverse: 0;
        margin-top: calc(1.5rem * calc(1 - var(--space-y-reverse)));
        margin-bottom: calc(1.5rem * var(--space-y-reverse));
    }
`;

const Label = styled.div`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #4299E1;
`;

const InputDiv = styled.div`
    margin-top: 0.5rem;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    border-radius: 6px;
    border-width: 0px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    color: rgb(17, 24, 39);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    outline: 1px solid #D1D5DB;
    outline-offset: 1px inset;

    &::placeholder {
        color: rgb(156 163 175);
    }

    &:focus {
        outline: 4px solid #4C51BF;
        outline-offset: 2px;
    }

    @media (min-width: 640px) {
        font-size: 0.875rem;
        line-height: 1.5rem;
    }
`;

const PsdDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ForgotDiv = styled.div`
    font-size: 0.75rem;
    margin-top: 3px;
    float: right;
`;

const FgtA = styled.a`
    font-weight: 600;
    color: #4299E1;
    
    &:hover {
        color: #667EEA;
        text-decoration: underline;
    }
`;

const BtnContainer = styled.div`
    padding-top: 1rem;
`;

const Button = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #4C51BF;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
        background-color: #667EEA;
    }
    &:focus-visible {
        outline: 2px solid transparent;
        outline-offset: 2px;
        background-color: #4C51BF;
    }
`;

const Field = styled.fieldset`
    margin-top: 2.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: #A0AEC0;
    padding-bottom: 1.25rem;
    border-top: dotted #718096;
`;

const Legend = styled.legend`
    padding: 0 6px;
`;

const OtherLoginMtd = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 640px) {
        padding-left: 0;
        padding-right: 0;
    }
    padding-top: 1px;
    padding-bottom: 2px;
`;

const OthMtd = styled(OtherLoginMtd)`
    padding-top: 8px;
    padding-bottom: 8px;
`;

const GoogleBtn = styled.button`
    color: #718096;
    font-weight: 600;
    width: 100%;
    background-color: #ffffff;
    &:hover {
        background-color: gray;
        color: white;
    }
    &:focus {
        outline: 4px solid transparent;
        outline-offset: 0;
        background-color: #ffffff;
    }
    border-radius: 0.375rem;
    font-size: 1rem;
    transition-duration: 200ms;
    padding: 0.625rem 1.25rem;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
`;

const GImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const FbBtn = styled.button`
    padding: 0.5rem 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #4299E1;
    &:hover {
        background-color: #2B6CB0;
        color: #FFFFFF;
    }
    &:focus {
        outline: 2px solid #4299E1;
        outline-offset: 2px;
        background-color: #4299E1;
    }
    color: #FFFFFF;
    transition: ease-in 200ms;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem;
`;

const Svg = styled.svg`
    margin-right: 8px;
    width: 28px;
    height: 24px;
`;

const OthBtn = styled.button`
    padding: 0.5rem 1rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(90,193,133);
    color: white;
    transition: ease-in 0.2s;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem;

    &:hover {
        background-color: #2F855A;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #68D391, 0 0 0 4px #C6F6D5;
    }
`;

export default function Home(){
  return(
    <div>
        <Container>
            <Top>
                <Img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="#"/>
                <TxtContainer>
                    <H2>Login<Space></Space>/<Space></Space>Sign<Space></Space>Up</H2>
                </TxtContainer>
            </Top>

            <InputContainer>
                <Form action="#" method="POST">
                    <div>
                        <Label htmlFor="email">Email address</Label>
                        <InputDiv>
                            <Input id="email" name="email" type="email" autoComplete="email" required/>
                        </InputDiv>
                    </div>

                    <div>
                        <PsdDiv>
                            <Label htmlFor="password">Password</Label>
                        </PsdDiv>

                        <InputDiv>
                            <Input id="password" name="password" type="password" autoComplete="current-password" required/>
                        </InputDiv>

                        <ForgotDiv>
                            <FgtA href="#">Forgot password ?</FgtA>
                        </ForgotDiv>

                    </div>

                    <BtnContainer>
                        <Button type="submit">Proceed</Button>
                    </BtnContainer>
                </Form>

                <Field>
                    <Legend>or Login with</Legend>
                </Field>

                <OtherLoginMtd>
                    <GoogleBtn type="button">
                        <GImg src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        Sign in with Google
                        <span></span>
                    </GoogleBtn>
                </OtherLoginMtd>

                <OtherLoginMtd>
                    <FbBtn type="button">
                        <Svg fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                        </Svg>
                        Sign in with Facebook
                        <span></span>
                    </FbBtn>  
                </OtherLoginMtd>

                <OthMtd>
                    <a href="/scroll-down">
                        <OthBtn type="button">
                            Scroll Down Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/navigation">
                        <OthBtn type="button">
                            Navigation Bar Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/slidesShow">
                        <OthBtn type="button">
                            Slides Show Page
                        </OthBtn>
                    </a>  
                </OthMtd>
          
                <OthMtd>
                    <a href="/sideBar">
                        <OthBtn type="button">
                            Sidebar Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/shoping-cart">
                        <OthBtn type="button">
                            Shopping Cart Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/colorText">
                        <OthBtn type="button">
                            Color Text Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/shop">
                        <OthBtn type="button">
                            Shopping Page
                        </OthBtn>
                    </a>  
                </OthMtd>

                <OthMtd>
                    <a href="/debug">
                        <OthBtn type="button">
                            Debugging Page
                        </OthBtn>
                    </a>  
                </OthMtd>

            </InputContainer>

            <ChatBox/>

        </Container>
      
    </div>

  )
}