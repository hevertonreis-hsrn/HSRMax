import styled from 'styled-components';


export const FooterBase = styled.footer`
  background:  #0f171e;
  border-top: 5px solid;
  border-image-source: linear-gradient(90deg, rgba(92,71,246,1) 0%, rgba(0,212,255,1) 26%, rgba(0,200,111,1) 52%, rgba(156,211,59,1) 71%, rgba(242,105,6,1) 88%, rgba(255,0,0,1) 100%);
  border-image-slice: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
