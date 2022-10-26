import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai'

function Navigation() {
  return (
    <NavContainer>
      <div className='navigation'>
        <NavButton>
          <AiFillStar />
          <span>Home</span>
        </NavButton>
        <NavButton>
          <AiFillStar />
          <span>Home</span>
        </NavButton>
        <NavButton>
          <AiFillStar />
          <span>Home</span>
        </NavButton>
        <NavButton>
          <AiFillStar />
          <span>Home</span>
        </NavButton>
      </div>
    </NavContainer>
  );
}

export default Navigation;

const NavContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  width: 100vw;

  .navigation {
    height: 50px;
    padding: 8px 0;
    background-color: #e7e5e5;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

const NavButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

`