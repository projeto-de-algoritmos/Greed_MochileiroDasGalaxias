import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-color: white;
  padding: 16px;
  border-radius: 10px;
`

export const Input = styled.input`
  border-radius: 10px;
  height: 30px;
  margin-right: 8px;
` 
export const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  width: 120px;
  height: 40px;
  margin: 16px;
  align-self: center;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 18px;

  :hover {
    background-color: darkgreen;
  }

`

export const Label = styled.label`
  color: white;
  font-weight: 600;
  margin-top: 8px;
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
