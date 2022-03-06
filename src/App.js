import { useState } from "react";
import Item from "./components/Items";
import ObjectForm from "./components/ObjectForm";
import SpaceCraft from "./components/SpaceCraft";
import { knapSack } from './algorithm'

import * as S from './styles';

function App() {

  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [maxWeight, setMaxWeight] = useState(42);

  const addItem = (item) => {
    setItems([...items, item])
  }

  const generateResult = () => {
    if(items.length === 0 ){
      alert('Adicione os itens');
      return;
    }

    const values = items.map(({ value }) => value);
    const weights = items.map(({ weight }) => weight);
    const names = items.map(({ name }) => name);
    const ids = items.map(({ id }) => id); 

    const res = knapSack(values, weights, items.length - 1, maxWeight, []);
    const result = res[1].map((index) => {
      return ({
        id: ids[index],
        name: names[index],
        value: values[index],
        weight: weights[index]
      });
     })
    setResult(result);
  }

  return (
    <S.Wrapper>
      <div>
        <S.Heading>Itens: </S.Heading>
        <ObjectForm addItem={addItem} />
        {items.length > 0 && <S.ItemsContainer>
          {items.map((item) => <Item item={item} key={item.id} />)}
        </S.ItemsContainer>}
      </div>
      <S.StarshipContainer>
        <SpaceCraft />
        <S.Label>Peso máximo: </S.Label>
        <S.Input type="number" min={0} value={maxWeight} onChange={(e) => setMaxWeight(parseInt(e.target.value))}/>
        <S.Button onClick={() => generateResult()}>Calcular</S.Button>
      </S.StarshipContainer>
      <div>
        <S.Heading>Resultado: </S.Heading>
        <S.ResultContainer>
          {result.length === 0 && <S.Desc>Adicione os itens, o peso máximo que a nave consegue carregar e clique no botão calcular</S.Desc>}
          {result.map((item) => <Item item={item} key={item.id} />)}
        </S.ResultContainer>
      </div>
    </S.Wrapper>
  );
}

export default App;
