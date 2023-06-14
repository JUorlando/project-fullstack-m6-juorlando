import React from "react";
import { ContactsList } from "../../components/ContactsList";
import { Header } from "../../components/Header";

function Contact() {
  return (
    <>
      <Header route="/dashboard" nameRoute="Cadastrar Contato" />
      <ContactsList/>
    </>
  );
}

export { Contact };
