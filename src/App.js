import { useState } from "react";
import Item from "./components/Items";
import ObjectForm from "./components/ObjectForm";
import SpaceCraft from "./components/SpaceCraft";

import * as S from './styles';

function App() {

  const [items, setItems] = useState([]); 

  const addItem = (item) => {
    setItems([...items, item])
  }

  return (
    <S.Wrapper>
      <ObjectForm addItem={addItem} />
      <SpaceCraft />
      <S.ItemsContainer>
        {items.map((item) => <Item item={item} key={item.id} />)}
      </S.ItemsContainer>
    </S.Wrapper>
  );
}

export default App;
