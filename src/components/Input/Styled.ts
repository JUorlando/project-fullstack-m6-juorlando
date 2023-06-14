import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border-radius: var(--radius-6);
  border-color: var(--primary);
  width: 80%;

  padding: 0 20px input {
    padding: 5px 10px;

    background-color: var(--background);
    color: var(--secondary);

    outline: none;

    font-size: var(--rem-09);
  }

  input {
    border: none;
    background-color: var(--background);
    max-width: fit-content;
    height: 100%;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

  input::placeholder {
    color: var(--secondary);
    background-color: var(--background);
    font-size: var(--rem-09);
  }
`;
const StyledForm = styled.form`
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;

  span{
    color: red;
    padding-left: 15px;
    font-size: var(--rem-09);
  }
`;
const StyledLegend = styled.legend`
  margin-bottom: 10px;
  color: var(--secondary);
  font-size: var(--rem-08);
`;

export { StyledFieldset, StyledForm, StyledLegend };
