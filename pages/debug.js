import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Main = styled.div`
    width: 100%;
`;

const Container = styled.div`
    background-color: lightblue;
    border-radius: 100%;
    height: 80px;
    width: 80px;
    position: fixed;
    right: 1vw;
    bottom: 1vw;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: rgb(162, 233, 255);
    }
`;

const Img = styled.img`
    position: absolute;
    top: 14px;
    left: 13px;
    height: 55px;
    width: 55px;
`;

const ContainerBox = styled.div`
    background-color: white;
    height: 300px;
    width: 300px;
    position: fixed;
    right: 1vw;
    bottom: 105px;
    border-radius: 20px;
    font-family: Arial, Helvetica, sans-serif;
    display: none;
`;

const HeadContainer = styled.div`
    background-color: lightblue;
    border-radius: 20px 20px 0px 0px;
    height: 20%;
    display: grid;
`;

const H1 = styled.h1`
    color: black;
    font-size: 16px;
    font-weight: bold;
    padding: 2px 10px;
    position: absolute;
    top: 7px;
`;

const P = styled.p`
    color: black;
    font-size: 13px;
    font-weight: 500;
    padding: 0 10px;
    position: absolute;
    top: 30px;
`;

const CloseBtn = styled.div`
    position: absolute;
    top: 15px;
    right: 18px;
    display: block;
    /* width: fit-content; */
    /* height: fit-content; */
    font-size: 0;
    background-color: red;

    &::before , &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 20px;
        background-color: #acacac;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: top left;
        content: '';
    }

    &::after {
        transform: rotate(-45deg) translate(-50%, -50%);
    }

    &::before , &::after {
        width: 2px;
        height: 20px;
        border-radius: 10px;
    }

    &:hover {
        &::before , &::after {
            background-color: red;
        }
    }
`;

const TimeBox = styled.div`
    text-align: center;
`;

const P1 = styled.p`
    padding-top: 6px;
    padding-bottom: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color: gray;
    font-size: 12px;
`;

const MessageBox = styled.div`
    background-color: lightgray;
    width: 55%;
    height: auto;
    min-height: 55px;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 8px;
`;

const P2 = styled.p`
    color: black;
    font-weight: 500;
    font-size: 14px;
`;

const Span = styled.span`
    padding-left: 4px;
    animation-name: hi-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;      /* Must be inline for the animation work */

    @keyframes hi-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
        100% { transform: rotate( 0.0deg) }
    }
`;

const BtnBox = styled.div`
    margin: auto;
    width: 80%;
    margin-top: 100px;
    /* background-color: red; */
`;

const P3 = styled.p`
    padding: 10px 88.9px;
    font-size: 13px;
    font-weight: bold;
    color: black;
    text-align: center;
`;

const ChatBtn = styled.button`
    background-color: lightblue;    
    border-radius: 15px;

    &:hover {
        background-color: rgb(136, 187, 205);
        
        ${P3} {
            color: white;
        }
    }
`;
  
export default function Debug(){

    const displayMessage = (index) => {
        const mss = document.getElementById("Message");
        const messages = ["<P2>。</P2>", "<P2>。。</P2>", "<P2>。。。</P2>"];   // Define the dot messages to be displayed
        const RealMss = document.getElementById("Last");

        if (index < messages.length) {  // Dot Dot Show Message

            RealMss.style.display = 'none';
            mss.innerHTML = messages[index];
            mss.style.display = 'block';
    
            setTimeout(function () {
                mss.style.display = 'none';
                displayMessage(index + 1);
            }, 500);

        } else {
            // After displaying all dot messages, set RealMss.style.display to 'block'
            RealMss.style.display = 'block';
        }
    };

    // Show Message Box
    const ShowMessage = () => {
        const box = document.getElementById("ContainerBox");

        if(!box.style.display || box.style.display == "none"){   // Display Chat Box if the Chat Box haven display            
            
            box.style.display = 'block';

            setTimeout(function () {
                displayMessage(0);
            }, 100);

        } else {
            box.style.display = 'none'; // Close Chat Box if the Chat Box displayed
        }
    };

    // To Messenger Chat
    const ChatPage = () => {
        location.href = 'https://www.messenger.com/t/154811617722587/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0';
    };
    
    // Real Time JS
    const DisplayTime = () => {
        const [currentTime, setCurrentTime] = useState('');

        useEffect(() => {
            const intervalId = setInterval(() => {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');   /* Hour */
                const minutes = now.getMinutes().toString().padStart(2, '0');   /* Minute */
                const currentTimeString = `${hours}:${minutes}`;    /* Combine together */
                setCurrentTime(currentTimeString);
            }, 1000);   /* refresh every second to catch up with the current time */
            
            // Stop the time
            setTimeout(() => {
                clearInterval(intervalId);
            },1000);

            return () => clearInterval(intervalId);
        }, []);
    
        return currentTime;
    };

    // Close Mesage Box
    const CloseMessage = () => {
        const box = document.getElementById("ContainerBox");
        box.style.display = 'none';
    };

    return (
        <div>
            <Main>
                <Container onClick={ShowMessage}>
                    <Img src="./cs_icon.png" alt="Icon Error"/>
                    
                </Container>

                <ContainerBox id="ContainerBox">
                    <HeadContainer>
                        <H1>Customer Services</H1>
                        <P>Typically replies within a day</P>
                        <CloseBtn onClick={CloseMessage}></CloseBtn>
                    </HeadContainer>

                    <TimeBox>
                        <P1>{DisplayTime()}</P1>
                    </TimeBox>

                    <MessageBox>
                        <P2 id="Message"></P2>
                        
                        <div id="Last">
                            <P2>Hi there <Span>👋</Span></P2>
                            <P2>How can I assist you ?</P2>
                        </div>
                        
                    </MessageBox>

                    <BtnBox>
                        <ChatBtn onClick={ChatPage}>
                            <P3>Start Chat</P3>
                        </ChatBtn>
                    </BtnBox>
                </ContainerBox>
            </Main>
        
        </div>
    )
}