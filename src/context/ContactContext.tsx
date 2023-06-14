import { createContext, useEffect, useState } from "react";
import React from "react";
import { api } from "../api/api";

export const ContactsContext = createContext({} as iContactsContext);

interface iContactsProviderProps {
  children: React.ReactNode;
}

export interface iContacts {
  id: number;
  name: string;
  email: string;
  createdAT: string;
  phone: string;
}

export interface iGetContactsResponse {
  id: number;
  name: string;
  email: string;
  createdAT: string;
  phone: string;
}

export interface iContactsContext {
  contacts: iContacts[];
  setContacts: React.Dispatch<React.SetStateAction<iContacts[]>>;
  filtredContacts: string;
  setFiltredContacts: React.Dispatch<React.SetStateAction<string>>;
  showContacts: iContacts[];
}

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
  const [contacts, setContacts] = useState<iContacts[]>([]);

  const [filtredContacts, setFiltredContacts] = useState("");

  const [loading, setLoading] = useState(true);

  const showContacts = !filtredContacts
    ? contacts
    : contacts.filter((iten: iContacts) =>
        iten.name.toLowerCase().includes(filtredContacts.toLowerCase())
      );

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContacts(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setContacts([]);
        setLoading(false);
      }
    })();
  }, [loading]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        filtredContacts,
        setFiltredContacts,
        showContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
