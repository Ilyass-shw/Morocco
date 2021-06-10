import styled, { css } from 'styled-components';

export const SummaryContainer = styled.aside`
  background-color: #fafafa;
  border-block: 1px solid #e6e6e6;

  @media screen and (min-width: 1200px) {
    position: fixed;
    width: 37vw;
    right: 0;
    top: 0;
    height: 100vh;
    border: 1px solid #e6e6e6;
  }
`;

export const SummaryContent = styled.div`
  max-width: 38rem;
  margin: auto;
  padding: 0 1rem;
  @media screen and (min-width: 1200px) {
    padding: 4rem 2rem;
  }
`;

type SummaryItemsProps = {
  show: boolean;
};

const collapsing = css`
  position: relative;
  max-height: 0;
  overflow: hidden;
`;

export const Summary = styled.div<SummaryItemsProps>`
  margin: auto;
  max-width: 40rem;
  transition: all 0.55s ease;
  max-height: 1000px;
  overflow: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ show }) => (show ? collapsing : '')}
`;
