import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--background);

  div {
    width: 100%;
    font-size: var(--rem-11);
    color: var(--primary);
    background-color: var(--background);
    padding: 0 25px;
    display: flex;
    justify-content: center;
  }
`;

export { StyledMain };
