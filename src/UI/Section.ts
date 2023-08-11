import { styled } from 'styled-components';

export interface SectionProps {
  padding?: string;
}

export const Section = styled.section<SectionProps>`
  padding: ${(props) => props.padding};
`;
