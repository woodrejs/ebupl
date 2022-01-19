import React from "react";
import styled from "styled-components";

export default function LanguagePanel() {
  return (
    <StyledLangBox>
      <StyledLang active>PL</StyledLang>
      <StyledLang>ENG</StyledLang>
      <StyledLang>RUS</StyledLang>
    </StyledLangBox>
  );
}
const StyledLangBox = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    display: none;
  }
`;
const StyledLang = styled.span`
  margin-left: 20px;
  cursor: pointer;

  color: ${({ theme, active }) =>
    active ? theme.colors.secoundary[500] : theme.colors.light[700]};
`;
