import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IDataRegisterContat } from "../../hooks/interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledForm } from "../../components/Input/Styled";
import { StyledMain } from "./styled";
import { Header } from "../../components/Header";

function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegisterContat>({
    resolver: yupResolver(registerSchema),
  });

  const { registerContat } = useContext(UserContext);

  return (
    <>
      <Header route="/myContacts" nameRoute="Meus Contatos" />

      <StyledMain>
        <div>
          <h2>Cadastre abaixo seus contatos</h2>
        </div>
        <StyledForm onSubmit={handleSubmit(registerContat)}>
          <Input
            legend="Nome completo"
            type="text"
            placeholder="Digite seu nome"
            register={register}
            nameError="name"
          />
          {errors.name?.message && <span>{errors.name.message}</span>}

          <Input
            legend="Numero de telefone"
            type="text"
            placeholder="Digite seu numero"
            register={register}
            nameError="phone"
          />
          {errors.numero?.message && <span>{errors.numero.message}</span>}

          <Input
            legend="Email"
            type="email"
            placeholder="Digite seu email"
            register={register}
            nameError="email"
          />
          {errors.email?.message && <span>{errors.email.message}</span>}

          <Button type="submit" writing="Cadastrar" />
        </StyledForm>
      </StyledMain>
    </>
  );
}

export { Dashboard };
