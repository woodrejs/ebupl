import { v4 as uuidv4 } from "uuid";
import investment_img from "../assets/icons/investment_img.svg";
import support_img from "../assets/icons/support_img.svg";
import office_img from "../assets/icons/office_img.svg";
import accounting_img from "../assets/icons/accounting_img.svg";
import assistant_img from "../assets/icons/assistant_img.svg";
import services_img from "../assets/icons/services_img.svg";
import intelligence_img from "../assets/icons/intelligence_img.svg";
import debtCollection_img from "../assets/icons/debtCollection_img.svg";

export const offersData = [
  {
    id: uuidv4(),
    title: "Usługi rejestracyjne Twojej firmy i wsparcie pecjalistów",
    src: support_img,
    alt: "support image",
    name: "support",
  },
  {
    id: uuidv4(),
    title: "Prowadzenia biura wirtualnego",
    src: office_img,
    alt: "office image",
    name: "office",
  },
  {
    id: uuidv4(),
    title: "Usługi księgowe",
    src: accounting_img,
    alt: "accounting image",
    name: "accounting",
  },
  {
    id: uuidv4(),
    title: "Usługa -  “Konsjerż”",
    src: assistant_img,
    alt: "assistant image",
    name: "assistant",
  },
  {
    id: uuidv4(),
    title: "Obsługa prawna przedsiębiorstw",
    src: services_img,
    alt: "services image",
    name: "services",
  },
  {
    id: uuidv4(),
    title: "Wywiad gospodarczy nowych podmiotów/kontrahentów",
    src: intelligence_img,
    alt: "tutorials image",
    name: "intelligence",
  },
  {
    id: uuidv4(),
    title: "Skuteczna windykacja",
    src: debtCollection_img,
    alt: "portfolio image",
    name: "debtCollection",
  },
  {
    id: uuidv4(),
    title: "Inwestycje",
    src: investment_img,
    alt: "investment image",
    name: "investment",
  },
];
