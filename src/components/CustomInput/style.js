import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const InputLabel = styled.label`
  text-transform: uppercase;
  color: ${({ theme }) => theme.darkerText};
  margin-bottom: 14px;
`;
export const Input = styled.input`
  background-color: ${({ theme }) => theme.darkText};
  /* height: ${({ type }) => (type === "text-area" ? "120px" : "50px")}; */
  padding: 14px 8px;
  border-radius: 3px;
  border: 0px;

  &:focus {
    outline: none;
    padding: 13px 7px;
    border: 1px solid ${({ theme }) => theme.secondary};
  }
`;