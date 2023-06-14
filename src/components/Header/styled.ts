import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 175px;
  background-color: var(--background);

  h1 {
    font-size: var(--rem-15);
    color: var(--secondary);
  }

  a {
    font-size: var(--rem-11);
    font-weight: 600;
  }

  h2 {
    color: var(--secondary);
    font-size: var(--rem-11);
    font-weight: 600;
  }
`;

export { StyledHeader };
