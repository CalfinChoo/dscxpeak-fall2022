import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: #ff9890;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg}
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    margin-top: 100px;
    margin-left: 100px;
    height: 70%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    margin-left: 200px;
    font-size: 100px;
    font-weight: 100;
`

const Desc = styled.p`
    margin-left: 200px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    margin-left: 200px;
    margin-top: 100px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>        
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <a href={item.href}><Button>SHOP NOW</Button></a>
                    </InfoContainer>
                </Slide>
            ))}
            
        </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleClick("right")}>        
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
