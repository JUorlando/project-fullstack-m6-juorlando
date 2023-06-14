import { StyledMain } from "../../pages/Dashboard/styled";
import { Contacts } from "../Contacts";
import { StyledContacts } from "./styled";

export const ContactsList = () => {
  return (
    <StyledMain>
      <StyledContacts>
        <h2>Seus Contatos</h2>
        <Contacts />
      </StyledContacts>
    </StyledMain>
  );
};
