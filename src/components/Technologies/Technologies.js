import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with different technologies in backend development and machine learning.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem'/> 
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Experienced with <br/> React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/> 
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Experienced with <br/> React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/> 
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>Experienced with <br/> React</ListParagraph>
        </ListContainer>
        
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
