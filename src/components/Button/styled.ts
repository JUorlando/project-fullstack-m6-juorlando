import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
  width: 82%;
  height: 50px;

  font-size: var(--rem-15);

  margin-left: 3px;

  border-radius: var(--radius-6);
  cursor: pointer;
  background-color: var(--primary);
  border: solid 2px var(--primary);
  color: var(--white);

  transition: 0.3s;
`;

export { StyledButton };
