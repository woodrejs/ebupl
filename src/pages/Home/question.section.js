import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.dark[500]};
  text-align: center;
  margin-bottom: 50px;
  max-width: 980px;
`;
const StyledInputBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const StyledButtonBox = styled.div`
  height: 100%;
  margin-right: 20px;
`;

export default function QuestionSection() {
  return (
    <StyledSection>
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>Masz pytania?</StyledH1>
          <StyledP>
            Zostaw nam swój adres mailowy lub numer telefonu. Nasz konsultant skontaktuje
            się z Tobą w ciągu pół godziny.
          </StyledP>
          <StyledInputBox>
            <StyledButtonBox>
              <Button variant="contained">Wyślij</Button>
            </StyledButtonBox>
            <TextField
              id="standard-basic"
              label="email lub numer telefonu"
              variant="standard"
            />
          </StyledInputBox>
        </StyledContentBox>
      </StyledArticle>
    </StyledSection>
  );
}
