import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MessengerCustomerChat from "react-messenger-customer-chat";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { theme } from "../../utils/theme";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { useTranslation } from "react-i18next";

const PAGEID = "429374910746421";
const APPID = "361563045330984";
const PHONE = "+48 536 859 521";

function setLang(lang) {
  switch (lang) {
    case "PL":
      return "pl_PL";
    case "EN":
      return "en_US";
    case "RUS":
      return "ru_RU";
  }
}

export default function MessangerChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  const { lang } = useSelector(({ appSlice }) => appSlice);
  const { t, i18n } = useTranslation();

  const handleClose = () => setIsOpen(false);
  const handleHideMessage = () => setShowMessage(false);
  const handlePhone = () => window.open(`tel: ${PHONE}`);

  if (!isOpen) return null;

  return (
    <StyledContainer>
      <StyledIconBox onClick={handleClose}>
        <CloseIcon htmlColor={theme.colors.light[700]} fontSize="small" />
      </StyledIconBox>

      <StyledPhoneBox onClick={handlePhone}>
        <StyledCircle>
          <PhoneEnabledIcon htmlColor={theme.colors.primary[500]} />
        </StyledCircle>
      </StyledPhoneBox>

      {showMessage && (
        <StyledMessageBox>
          <StyledMessageText>{t("messanger.title")}</StyledMessageText>
        </StyledMessageBox>
      )}

      <MessengerCustomerChat
        pageId={PAGEID}
        appId={APPID}
        language={setLang(lang)}
        themeColor={theme.colors.primary[500]}
        onCustomerChatDialogShow={handleHideMessage}
      />
    </StyledContainer>
  );
}
const fadeUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const slideUp = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const StyledContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 200;
  animation: ${slideUp} 0.5s linear;
  animation-delay: 2.8s;
  transform: translateY(200px);
  animation-fill-mode: forwards;
  opacity: 0;
  min-height: 60px;
  z-index: 300;
`;
const StyledIconBox = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.primary[500]};

  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;
const StyledPhoneBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: none;
  cursor: pointer;
  margin-right: 70px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    margin-right: 0px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.light[700]};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledMessageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.light[700]};
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  right: 70px;
  bottom: 35px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  animation: ${fadeUp} 0.5s linear;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  opacity: 0;
`;
const StyledMessageText = styled.div`
  color: ${({ theme }) => theme.colors.dark[700]};
  min-width: 150px;
  ${({ theme }) => theme.fonts.body.small}
  line-height: 18px;
`;
