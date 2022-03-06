import React from 'react';

import * as S from './styles'

const Item = ({ item }) => {
  return(
    <S.Wrapper>
      <S.Line>
        <S.Label>Nome:</S.Label>
        <S.Text>{item.name}</S.Text>
      </S.Line>
      <S.Column>
        <S.Line>
          <S.Label>Peso: </S.Label>
          <S.Text>{item.weight}</S.Text>
        </S.Line>
        <S.Line>
          <S.Label>Valor: </S.Label>
          <S.Text>{item.value}</S.Text>
        </S.Line>
      </S.Column>
    </S.Wrapper>
  ) 
}
export default Item;