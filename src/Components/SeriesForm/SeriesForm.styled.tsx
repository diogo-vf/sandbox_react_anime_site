import styled from "styled-components";
import {Theme} from "@mui/material";

const DivResultsContainer = styled.div<{ theme: Theme }>`
  background: ${({theme}) => theme.palette.mode ==="dark" ?  `rgb(23, 25, 26)` : `rgb(176, 179, 189)`};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
`

const DivResultCard = styled.div<{ theme: Theme }>`
  border-radius: 4px;
  align-items: center;
  display: grid;
  grid-template-columns: 70px auto;
  padding: 20px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {    
    background: ${({theme}) => theme.palette.mode ==="light" ?  `rgb(23, 25, 26)` : `rgb(176, 179, 189)`};
    color: ${({theme}) => theme.palette.mode ==="light" ?  `white` : `black`};
  }
`

const DivResultImage = styled.div<{ src: string | null, size: number }>`
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  vertical-align: top;
  background-image: url(${({src}) => src || ""});
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`

const DivResultTextContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 10px;
`

const DivResultInfo = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding-top: 3px;
`

export {DivResultsContainer, DivResultCard, DivResultImage, DivResultTextContainer, DivResultInfo};