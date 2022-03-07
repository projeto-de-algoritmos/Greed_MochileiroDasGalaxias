import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-color: white;
  border-radius: 10px;
  padding: 16px;
  overflow: auto;
  max-height: 350px;
`; 

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
  width: 200px;
  height: 50px;
  margin: 16px;
  align-self: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;

  :hover {
    background-color: darkgreen;
  }

`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-color: white;
  border-radius: 10px;
  padding: 16px;
  overflow: auto;
  max-height: 500px;
  min-width: 300px;
  max-width: 200px;
  min-height: 400px;

  & p {
    font-size: 16px;
    font-weight: 500;
  }
`; 

export const Label = styled.div`
  color: white;
  font-weight: bold;
`;

export const Heading = styled.h1`
  color: white;
`

export const StarshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

export const Desc = styled.p`
  color: white;
`

export const Clear = styled.p`
  color: white;
  text-decoration: underline;
  margin: 0px;
  cursor: pointer;
  align-self: flex-end;
`