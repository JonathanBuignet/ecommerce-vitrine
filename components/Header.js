import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import BurgerIcon from './icons/Burger';

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.$mobileNavigationActive ? `display: block;` : `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <StyledNav $mobileNavigationActive={mobileNavigationActive}>
            <NavLink href={'/'}>Acceuil</NavLink>
            <NavLink href={'/produits'}>Tous les produits</NavLink>
            <NavLink href={'/categories'}>Catégories</NavLink>
            <NavLink href={'/compte'}>Compte</NavLink>
            <NavLink href={'/panier'}>Panier ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavigationActive((prev) => !prev)}>
            <BurgerIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
