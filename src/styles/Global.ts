import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

a{
  color: var(--secondary);
  text-decoration: none;
}

ul, ol, li{
  list-style: none;
}

button:hover{
  background: var(--variant);
  color: var(--white);
  border: solid 2px var(--variant);
}

a: hover{
  color: var(--variant);
}

:root{

  --primary: #003399;
  --secondary: #0066CC;
  --white: #FFFFFF;
  --black: #000000;
  --variant: #0099FF;
  --background: #EAEAEA;

  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-20: 20px;

  --rem-08: 0.8rem;
  --rem-09: 0.9rem;
  --rem-11: 1.1rem;
  --rem-15: 1.5rem;
  --rem-16: 1.6rem;

}

`

export {GlobalStyle}