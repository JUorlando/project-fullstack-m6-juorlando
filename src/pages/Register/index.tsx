import { Header } from "../../components/Header";
import { UserContext } from "../../context/UserContext";
import { IDataRegister } from "../../hooks/interfaces";
import { useContext } from "react";
import { registerSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { StyledForm } from "../../components/Input/Styled";
import { Button } from "../../components/Button";
import { StyledMain } from "../Dashboard/styled";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(registerSchema),
  });

  const { onSubmitRegister } = useContext(UserContext);

  return (
    <>
      <Header route="/" nameRoute="Login" />
      <StyledMain>
        <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
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

          <Input
            legend="Senha"
            type="password"
            placeholder="Digite sua senha"
            register={register}
            nameError="password"
          />
          {errors.password?.message && <span>{errors.password.message}</span>}

          <Button type="submit" writing="Cadastrar" />
        </StyledForm>
      </StyledMain>
    </>
  );
}

export { Register };
