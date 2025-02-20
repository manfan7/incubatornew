import styled, {keyframes, css} from 'styled-components'
import Image from './Rectangle 1.png'
import {useState} from "react";


const StudyTest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme})=>theme.colors.primary};
    box-shadow:0px 4px 10px rgba(33, 25, 25, 0.1);
    border-radius: 15px;
    padding: 10px 0px 22px 0px;
    max-width: 300px;
    text-align: start;
    div {
        max-width: 280px;
        display: flex;
        align-items: start;
        width: 100%;
       padding-left: 20px;
    }
   button + button {
       margin-left: 15px;
   }
`
const Btn = styled.button`
    font-size: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #4e71fe;
    color: white;
    width: 86px;
    height: 30px;
    transition: .4s;
    
    &:hover {
        font-size: 20px;
    }
`
const MyAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
interface BtnProps {
    isClickedd: boolean;
}
const BtnWhite = styled(Btn)<BtnProps>`
    background-color: white;
    color: #4e71fe;
    border: 2px solid #4e71fe;
    &:hover {
        font-size: 10px;
    };
    ${({ isClickedd }) =>
            isClickedd &&
            css<BtnProps>`
      animation: ${MyAnimation} 0.3s ease-in-out;
    `}
`

const Title = styled.h1`
    font-size: 16px;
    color: black;
    line-height: 19.36px;
    font-weight: 700;
`
const P = styled.p`
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    color: #Abb3ba;
    width: 85%;
    
    @media (max-width: 1280px) {
        color: #1a1a1a;
    }
`


function Study() {
const [isClickedd,setIsClicked] = useState(false)
    function  isClci(){

        setIsClicked(true)
        setTimeout(()=>{
            setIsClicked(false)
        },2000)

    }

    return (
        <StudyTest>
            <img src={Image}/>
             <div>
                 <Title>Headline</Title>
             </div>
            <div>
                <P>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</P>
            </div>
        <div>
            <Btn >See more</Btn>
<button>New</button>
            <BtnWhite isClickedd={isClickedd} onClick={()=>isClci()}>Save</BtnWhite>
        </div>

        </StudyTest>
    )
}

export default Study