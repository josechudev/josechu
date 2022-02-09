import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { HiBriefcase } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, PortfolioContainer } from './HeaderStyles';

const Header = () => (
  <Container>
    
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons><SocialIcons href="https://github.com">
        <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
