import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection >
      <SectionTitle main center>
        Hello!<br />
        I am Jose Chu
      </SectionTitle>
      <SectionText>
        I am a software engineer with passion for machine learning and DevOps.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;  