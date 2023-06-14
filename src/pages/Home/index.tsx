import { yupResolver } from "@hookform/resolvers/yup";
import { IDataLogin } from "../../hooks/interfaces";
import { loginSchema } from "../../schema/schema";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { StyledForm } from "../../components/Input/Styled";
import { StyledMain } from "../Dashboard/styled";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(loginSchema),
  });

  const { onSubmitLogin } = useContext(UserContext);

  return (
    <>
      <Header route="/register" nameRoute="Cadastrar" />
      <StyledMain>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
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

          <Button type="submit" writing="Logar" />
        </StyledForm>
      </StyledMain>
    </>
  );
}

export { Home };
