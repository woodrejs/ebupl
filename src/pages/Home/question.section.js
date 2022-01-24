import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, TextField, Button, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { object, string, bool } from "yup";

export default function QuestionSection() {
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [contact, setContact] = useState("");
  const [terms, setTerms] = useState(false);
  const [name, setName] = useState("");
  const { t } = useTranslation();

  const validation = object({
    name: string().required(t("questionSection.validation.nameRequired")),
    contact: string()
      .min(6, ({ min }) => t("questionSection.validation.contactLength"))
      .required(t("questionSection.validation.contactRequired")),
    terms: bool().oneOf([true], t("questionSection.validation.termsRequired")),
  });
  const handleSubmit = async () => {
    if (info.length) {
      setInfo("");
    }

    try {
      await validation.validate({
        name,
        contact,
        terms,
      });
      setError("");
      setName("");
      setContact("");
      setTerms(false);
      setInfo(t("questionSection.messageSend"));
    } catch (error) {
      setError(error.message);
    }
  };
  const handleChange = (name, value) => {
    if (info.length) {
      setInfo("");
    }

    switch (name) {
      case "name":
        setName(value);
        break;
      case "contact":
        setContact(value);
        break;
      case "terms":
        setTerms(!terms);
        break;
    }
  };

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
                  value={name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </StyledInputBox>
              <StyledInputBox>
                <TextField
                  id="standard-basic"
                  label={t("questionSection.contactInput")}
                  variant="standard"
                  value={contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                />
              </StyledInputBox>
            </div>
            <div>
              <StyledCheckBox>
                <Checkbox
                  label="RODO"
                  checked={terms}
                  value={terms}
                  onChange={(e) => handleChange("terms")}
                />
                <StyledTermsBox>
                  <StyleInfo>{t("questionSection.termsShort")}</StyleInfo>
                  <StyledTooltip>
                    <Tooltip title={t("questionSection.termsLong")}>
                      <StyledLink>{t("questionSection.termsButton")}</StyledLink>
                    </Tooltip>
                  </StyledTooltip>
                </StyledTermsBox>
              </StyledCheckBox>
              <StyledButtonBox>
                <Button variant="contained" onClick={handleSubmit}>
                  {t("questionSection.button")}
                </Button>
              </StyledButtonBox>
            </div>
          </StyledFormBox>
          <StyledError>{error && `* ${error}`}</StyledError>
          <StyledInfo>{info && `* ${info}`}</StyledInfo>
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
  position: relative;
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
const StyledTermsBox = styled.div`
  position: relative;
`;
const StyledTooltip = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const StyleInfo = styled.div`
  ${({ theme }) => theme.fonts.body.small}
  color: ${({ theme }) => theme.colors.dark[500]};
  max-width: 35ch;
`;
const StyledLink = styled.span`
  ${({ theme }) => theme.fonts.body.small}
  color: ${({ theme }) => theme.colors.secoundary[700]};
  cursor: pointer;
`;
const StyledError = styled.span`
  position: absolute;
  bottom: -60px;
  ${({ theme }) => theme.fonts.body.small};
  color: ${({ theme }) => theme.colors.error};
`;
const StyledInfo = styled.span`
  position: absolute;
  bottom: -60px;
  ${({ theme }) => theme.fonts.body.small};
  color: ${({ theme }) => theme.colors.secoundary[700]};
`;
