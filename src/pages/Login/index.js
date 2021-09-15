import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "../../common/context/Usuario";
import React, { useContext } from "react";

function Login() {
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  const history = useHistory();
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          value={saldo}
          onChange={(evento) => setSaldo(evento.target.value)}
          type="number"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 3}
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
