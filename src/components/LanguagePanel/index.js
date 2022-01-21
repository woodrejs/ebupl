import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../redux/app.slice";

export default function LanguagePanel() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { lang } = useSelector(({ appSlice }) => appSlice);

  const handleClick = (lang) => {
    dispatch(setLang(lang));
    i18n.changeLanguage(lang);
  };

  return (
    <StyledLangBox>
      <StyledLang active={lang === "PL"} onClick={() => handleClick("PL")}>
        PL
      </StyledLang>
      <StyledLang active={lang === "EN"} onClick={() => handleClick("EN")}>
        EN
      </StyledLang>
      <StyledLang active={lang === "RUS"} onClick={() => handleClick("RUS")}>
        RUS
      </StyledLang>
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
