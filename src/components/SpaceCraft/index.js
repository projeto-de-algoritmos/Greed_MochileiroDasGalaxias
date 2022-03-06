import React from "react";
import SpaceCraftImage from '../../assets/spacecraft.png'

import * as S from './styles'

const SpaceCraft = () => {

  return(
    <S.Wrapper>
      <S.Image src={SpaceCraftImage}/>
    </S.Wrapper>
  )
}

export default SpaceCraft;