import React from 'react';
import styled from 'styled-components';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon/index.js";
import UnstyledButton from "../UnstyledButton/index.js";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <Icons>
              <UnstyledButton> <Icon id={'shopping-bag'} /> </UnstyledButton>
              <UnstyledButton> <Icon id={'search'} /> </UnstyledButton>
              <UnstyledButton> <Icon id={'menu'} /> </UnstyledButton>
          </Icons>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

    @media ${QUERIES.tabletAndSmaller} {
        border-top: 4px solid ${COLORS.gray[900]};
    }
        
    @media ${QUERIES.phoneAndSmaller} {
        padding: 24px 16px;
        align-items: center;
    }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
    
    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`;

const Icons = styled.div`
  display: none;

    @media ${QUERIES.tabletAndSmaller} {
        display: flex;
        gap: 32px;
        justify-content: flex-end;
        align-items: center;
    }
    
    @media ${QUERIES.phoneAndSmaller} {
        gap: 16px;
    }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
