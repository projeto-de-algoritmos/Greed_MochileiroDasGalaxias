import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: white;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
`

export const Input = styled.input`
  border-radius: 10px;
  width: 100px;
  height: 30px;
` 
export const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  width: 100px;
  height: 30px;
`

export const Label = styled.label`
  color: white;
  font-weight: 600;
`