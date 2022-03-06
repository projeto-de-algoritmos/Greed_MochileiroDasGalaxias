import React, { useState } from "react";

import * as S from './styles'

const ObjectForm = ({ addItem }) => {

  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [value, setValue] = useState(0);

  const createItem = () => {
    if(name && weight && value) {
      const item = { id: Date.now() ,name, weight, value} 
      addItem(item);
      setName('');
      setValue(0);
      setWeight(0);
    }else{
      alert('Preencha todos os campos!');
    }
  }

  return(
    <S.Wrapper>
      <S.Label>Nome:</S.Label>
      <S.Input placeholder="Nome" value={name} onChange={(e) => setName((e.target.value))}/>
      <S.Label>Peso:</S.Label>
      <S.Input placeholder="Peso" type="number"  value={`${weight}`} onChange={(e) => setWeight(parseInt(e.target.value))}/>
      <S.Label>Valor:</S.Label>
      <S.Input placeholder="Valor" type="number" value={`${value}`} onChange={(e) => setValue(parseInt(e.target.value))}/>
      <S.Button onClick={() => createItem()}>Adicionar</S.Button>
    </S.Wrapper>
  )
}
export default ObjectForm;