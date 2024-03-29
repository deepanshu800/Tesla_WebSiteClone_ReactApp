import React, { useState } from 'react'
import styled from 'styled-components';
// import MenuIcon from '@mui/icons-material/Menu';
// import menueIcon from '/images/icons8-menu-50.png';
import { selectCars } from '../features/car/carSlice'
import { UseSelector, useSelector } from 'react-redux';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars && cars.map((car, index) =>
          <a key={index} href='#'>{car}</a>
        )}
        {/* <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a> */}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) =>
          <li><a key={index} href='#'>{car}</a></li>
        )}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>CyberTruck</a></li>
        <li><a href='#'>Roadster</a></li>
      </BurgerNav>
    </Container >
  )
}

export default Header

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
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px ;
    flex-warp: no-warp;
  }

  @media(max-width : 768px){
    display: none;
  }
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  width:20px;
  height: 20px;
  background-image: url("/images/icons8-menu-50.png");
  background-size: cover;
`
const BurgerNav = styled.div`

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition-duration: 1s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
      font-weigth: 600;

    }
  }
`

const CustomClose = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("images/CloseButton.png");
  background-size: cover;
  
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
