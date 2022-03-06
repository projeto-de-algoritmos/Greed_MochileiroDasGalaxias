import { useState } from "react";
import Item from "./components/Items";
import ObjectForm from "./components/ObjectForm";
import SpaceCraft from "./components/SpaceCraft";

import * as S from './styles';

function App() {

  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [maxWeight, setMaxWeight] = useState(42);

  const addItem = (item) => {
    setItems([...items, item])
  }

  const generateResult = () => {
    setResult(items);
  }

  return (
    <S.Wrapper>
      <div>
        <ObjectForm addItem={addItem} />
        <S.ItemsContainer>
          {items.map((item) => <Item item={item} key={item.id} />)}
        </S.ItemsContainer>
      </div>
      <div>
        <SpaceCraft />
        <S.Input type="number" value={maxWeight} onChange={(e) => setMaxWeight(parseInt(e.target.value))}/>
        <S.Button onClick={() => generateResult()}>Gerar</S.Button>
      </div>
      <S.ResultContainer>
        {result.map((item) => <Item item={item} key={item.id} />)}
      </S.ResultContainer>
    </S.Wrapper>
  );
}

export default App;
