import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import {useState} from "react";

import {useSelector} from "react-redux";
import {selectCars} from "../features/car/carSlice";

function Header() {
    const cars = useSelector(selectCars);
    const [closeButton, setCloseButton] = useState(false);
    console.log(cars)
    const handleBurgerMenu = () => {
        setCloseButton(!closeButton);
    }

    return (
        <Container>
            <a>
                <img src="/logo.svg"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a href={"#"} key={index}> {car} </a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={handleBurgerMenu}/>
            </RightMenu>
            <BurgerNav show={closeButton}>
                <CloseWrapper>
                    <CustomClose onClick={() => setCloseButton(handleBurgerMenu)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                   <li key={index}> <a href={"#"} > {car} </a></li>
                ))}
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.25s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
