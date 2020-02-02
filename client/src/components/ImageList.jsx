import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';

const MainWrapper = styled.div`
  width: auto !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 32px !important;
  display: block;
`;
const FirstInnerWrapper = styled.div`
  max-width: 105vh !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;

const SecondInnerWrapper = styled.div`
margin-left: auto !important;
margin-right: auto !important;
position: relative !important;
transform: translateY(0px) !important;
transition: -ms-transform 0.2s ease-out 0s, -webkit-transform 0.2s ease-out 0s, transform 0.2s ease-out 0s !important;
`;

const FirstGradientDiv = styled.div`
  position: absolute !important;
  height: 64px !important;
  transform: rotate(180deg) !important;
  z-index: 1 !important;
  width: 20px !important;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%) !important;
`;

const SecondGradientDiv = styled.div`
  position: absolute !important;
  right: 0px !important;
  height: 64px !important;
  z-index: 1 !important;
  width: 20px !important;
  background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%) !important;
`;

const Layer1 = styled.div`
  position: relative !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  height: 64px !important;
  overflow: hidden !important;
`;
// main list will have transform: translateX(-56px) per image past 3

export default function ImageList(props) {
  const MainList = styled.ul`
    transform: translateX(${-56 * (props.currentImage > 1 ? props.currentImage - 1 : 0)}px);
    display: flex;
    flex-direction: row;
    position: absolute !important;
    list-style-type: none !important;
    left: 0px !important;
    transition: 0.4s;
    margin: 0px !important;
    padding: 0px 0px 0px 8px !important;
  `;

  //test li <li style={{'marginLeft': '8px'}}><img src='https://picsum.photos/48'></img></li>
  return(
  <MainWrapper>
    <FirstInnerWrapper>
      <SecondInnerWrapper>
        <FirstGradientDiv></FirstGradientDiv>
        <SecondGradientDiv></SecondGradientDiv>
        <Layer1>
          <div style={{position: 'absolute'}}>
            <MainList>
              {props.imgs.map((a, i) => {return <ListItem img={a.image} index={i} currentImage={props.currentImage} click={props.click}/>})}
            </MainList>
          </div>
        </Layer1>
      </SecondInnerWrapper>
    </FirstInnerWrapper>
  </MainWrapper>
  );
}