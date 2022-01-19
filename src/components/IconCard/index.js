import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

export default function IconCard({ src, alt, title }) {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <StyledIconBox>
        <StyledIcon src={src} alt={alt} />
        <Styledh5>{title}</Styledh5>
      </StyledIconBox>
    </Grid>
  );
}

const StyledIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const StyledIcon = styled.img`
  height: 170px;
  margin-bottom: 25px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    height: 220px;
  }
  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    height: 280px;
  }
  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    height: 220px;
  }
`;
const Styledh5 = styled.h5`
  ${({ theme }) => theme.fonts.headers.h5};
  color: ${({ theme }) => theme.colors.primary[700]};
  max-width: 220px;
  text-align: center;
`;
