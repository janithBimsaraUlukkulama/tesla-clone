import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({title, description, backgroundImage, leftBtnTex, rightBtnTxt}) {
    return (<Wrap bgImage={backgroundImage}>
        <Fade direction="up" triggerOnce={true}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <ButtonGroup>
                <LeftButton>{leftBtnTex}</LeftButton>
                {rightBtnTxt &&
                    <RightButton>{rightBtnTxt}</RightButton>
                }
            </ButtonGroup>
            <DownArrow src='/down-arrow.svg'/>
        </Buttons>
    </Wrap>)
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 756px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: .65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div`

`;
