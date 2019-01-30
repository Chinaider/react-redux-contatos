import React, { Component } from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import { Provider } from 'react-redux';
import configureStore from './Config/store';


import Configuracao from './Views/Configuracao';
import Lista from './Views/Lista';

/* Navegação e rotas */
const AppNavigation = createStackNavigator(
  {
    Configuracao: { screen: Configuracao},
    Lista: { screen: Lista }
  },
  {
    index: 0,
    initialRouteName: "Lista",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(AppNavigation);
/* Navegação e rotas */




/* App entry point da aplicação */
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={configureStore()}>
        <Root>
          <AppContainer/>
        </Root>
      </Provider>
    )
  }
}