import React from "react";

import * as S from './styles'

const ObjectForm = () => {
  return(
    <S.Wrapper>
      <S.Label>Nome:</S.Label>
      <S.Input placeholder="Nome" />
      <S.Label>Peso:</S.Label>
      <S.Input placeholder="Peso" />
      <S.Label>Valor:</S.Label>
      <S.Input placeholder="Valor" />
      <S.Button>Adicionar</S.Button>
    </S.Wrapper>
  )
}
export default ObjectForm;