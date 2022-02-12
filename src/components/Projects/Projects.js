import React, {useState} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const prefix =  (process.env.NODE_ENV=='production'?'./':'/')

const Projects = () => {

  projects.forEach(project => {
    console.log(project.image)
  });
  return (<Section nopadding id='projects'>
  <SectionDivider />
  <SectionTitle></SectionTitle>
  <GridContainer>
    {projects.map(({id, image, title, description, tags, source, visit})  =>  (
      <BlogCard key={id}>
        <Img src={prefix + image} alt={title} />
        <TitleContent>
          <HeaderThree>{title}</HeaderThree>
          <Hr></Hr>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>{
            tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))
            }</TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit}> Code </ExternalLinks>
          <ExternalLinks href={source}> Source </ExternalLinks>
        </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
</Section>)
}
  
export default Projects;