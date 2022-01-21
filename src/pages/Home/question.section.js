import React from "react";
import styled from "styled-components";
import { Checkbox, TextField, Button, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function QuestionSection() {
  const { t } = useTranslation();

  return (
    <StyledSection className="questionSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>{t("questionSection.title")}</StyledH1>
          <StyledP>{t("questionSection.text")}</StyledP>
          <StyledFormBox>
            <div>
              <StyledInputBox>
                <TextField
                  id="standard-basic"
                  label={t("questionSection.nameInput")}
                  variant="standard"
                />
              </StyledInputBox>
              <StyledInputBox>
                <TextField
                  id="standard-basic"
                  label={t("questionSection.contactInput")}
                  variant="standard"
                />
              </StyledInputBox>
            </div>
            <div>
              <StyledCheckBox>
                <Checkbox label="RODO" />
                <StyleInfo>
                  {t("questionSection.termsShort")}
                  <Tooltip title={t("questionSection.termsLong")}>
                    <StyledLink>{t("questionSection.termsButton")}</StyledLink>
                  </Tooltip>
                </StyleInfo>
              </StyledCheckBox>
              <StyledButtonBox>
                <Button variant="contained">{t("questionSection.button")}</Button>
              </StyledButtonBox>
            </div>
          </StyledFormBox>
        </StyledContentBox>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary[300]};
`;
const StyledArticle = styled.article`
  max-width: 1366px;
  margin: 0 auto;
  padding: 140px 40px;
  width: 100%;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledH1 = styled.h1`
  ${({ theme }) => theme.fonts.headers.h1};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.headers.h2};
    margin-bottom: 20px;
  }
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.dark[500]};
  text-align: center;
  margin-bottom: 30px;
  max-width: 980px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.body.small};

    margin-bottom: 20px;
  }
`;
const StyledFormBox = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    padding-top: 30px;
  }
`;
const StyledInputBox = styled.div`
  padding-right: 15px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    padding-bottom: 30px;
  }
`;
const StyledCheckBox = styled.div`
  display: flex;
`;
const StyleInfo = styled.div`
  ${({ theme }) => theme.fonts.body.small}
  color: ${({ theme }) => theme.colors.dark[500]}
`;
const StyledLink = styled.span`
  ${({ theme }) => theme.fonts.body.small}
  color: ${({ theme }) => theme.colors.secoundary[700]};
  cursor: pointer;
`;
