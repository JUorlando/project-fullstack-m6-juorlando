import React, { useContext } from "react";
import { ContactsContext } from "../../context/ContactContext";
import { StyledContact } from "./styled";

interface iElement {
  id: number;
  name: string;
  email: string;
  createdAT: string;
  phone: string;
}

export const Contacts = () => {
  const { showContacts } = useContext(ContactsContext);
  return (
    <>
      {showContacts?.map((element: iElement) => (
        <StyledContact key={element.id}>
          <p>Nome: {element.name}</p>
          <p>Email: {element.email}</p>
          <p>Telefone:{element.phone}</p>
        </StyledContact>
      ))}
    </>
  );
};
