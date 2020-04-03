import React, {useState, useReducer} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

const TYPES = {
  Topla: 'Topla',
  Cikar: 'Cikar',
  Carp: 'Carp',
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.Topla:
      return {...state, result: Number(action.a) + Number(action.b)};
    case TYPES.Cikar:
      return {...state, result: Number(action.a) - Number(action.b)};
    case TYPES.Carp:
      return {...state, result: Number(action.a) * Number(action.b)};
    default:
      return state;
  }
};
const App = () => {
  const [title, setTitle] = useState('titledfdfg');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [{result}, dispatch] = useReducer(reducer, {result: 0});

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput placeholder={'ilk sayıyı gir'} onChangeText={setA} />
        <TextInput placeholder={'ikinci sayıyı gir'} onChangeText={setB} />
        <Text> Sonuç : {result} </Text>
        <Button
          onPress={() =>
            dispatch({
              type: TYPES.Topla,
              a,
              b,
            })
          }
          title="topla"
        />
        <Button
          onPress={() =>
            dispatch({
              type: TYPES.Cikar,
              a,
              b,
            })
          }
          title="Çıkar"
        />
        <Button
          onPress={() =>
            dispatch({
              type: TYPES.Carp,
              a,
              b,
            })
          }
          title="çarp"
        />
      </SafeAreaView>
    </>
  );
};

export default App;
