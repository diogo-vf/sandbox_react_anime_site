import styled, {css, FlattenSimpleInterpolation} from "styled-components";
import { IDivProps } from ".";

export const StyledCard = styled.div`
  position: relative;
  margin: 4rem;
`;

export const StyledCover = styled.img`
  position: relative;
  object-fit: cover;
  object-position: center;
  box-shadow: 0.1rem 0.1rem 0.5rem #000a;
  z-index: 1;
  cursor: pointer;

`

// return the css for mouse hover or opened card
export const styleCardOpened = (value: boolean): FlattenSimpleInterpolation => {
    // css to show card opened
    let base = css`
      transform: rotate(-90deg) translate(-108%, 15%);
      transform-origin: left top;
      box-shadow: -0.1rem 0.1rem 0.2rem #000a;
    `
    // css to apply the opening effects when the card is closed
    let hoverCss = css`${StyledCover}:hover + & {
      ${base}
    }`

    return value ? base : hoverCss
}

export const StyledBackground = styled.div<IDivProps>`
  position: absolute;
  background-color: ${props => props.color};
  height: ${(props) => props.width}px;
  width: ${(props) => props.height}px;
  top: 0;
  left: 0;
  z-index: 0;
  transform: rotate(-90deg) translate(-104%, 3%);
  transform-origin: left top;
  transition: all 300ms;

  ${(props) => styleCardOpened(props.opened)}
`

export const StyledTitle = styled.div`
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
  color: white;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 5px;
  padding-right: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: center;
`
