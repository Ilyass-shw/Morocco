import styled, { keyframes, css } from 'styled-components';
import { AnimationProps } from '../types';

export const BarWrapper = styled.div`
  width: 100%;
  height: 2px;
`;

const progress = keyframes`
from{
    width: 0;
}
to{
    width: 100%
}
`;

const animation = (props: AnimationProps) => css`
  animation: ${progress} ${props.durationInSec} ${props.repeate} ;
`;

export const MainBar = styled.div<AnimationProps>`
  height: 100%;
  background-color: black;
  ${(props: AnimationProps) => (props.isHovering ? animation : 'width: 0;')};
`;
