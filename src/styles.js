import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: white;
  border-radius: 10px;
  padding: 16px;
  overflow: auto;
  max-height: 500px;
`; 

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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: white;
  border-radius: 10px;
  padding: 16px;
  overflow: auto;
  max-height: 500px;
  min-width: 300px;
`; 