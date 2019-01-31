import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left, Icon, Body, Text, Button, View } from 'native-base';
import Topo from '../../Components/Topo';
import style from './style';

import { connect } from 'react-redux';
import { setColor } from '../../Modules/Configuracao/action';

const colors = [
    {color:'#d32f2f',textColor:'#ffffff'},
    {color:'#f57c00', textColor:'#000000'},
    {color:'#33691e', textColor:'#ffffff'},
    {color:'#d81b60', textColor:'#ffffff'},
    {color:'#212121', textColor:'#ffffff'},
    {color:'#1565c0', textColor:'#ffffff'}
];

class Configuracao extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const ColorItem = (props) => {
            return (
                <Button onPress={() => this.props.setColor(props.item)} style={[style.boxColorBtn,this.props.color == props.item.color ? {borderWidth: 2, borderColor: '#a9a9a9'} : {}]} transparent>
                    <View style={[style.boxColor,{ backgroundColor: props.item.color}]}></View>
                </Button>
            );
        }   

        return (
            <Container>
                <Topo navigation={this.props.navigation} titulo='Configuração' hiddenBtnConfig={true} hiddenBtnAdd={true} />
                <Content>
                    <Card style={style.card}>
                        <CardItem>
                            <Left>
                                <Icon style={style.icon} name='md-color-filter'/>
                                <Body>
                                    <Text>Cores</Text>
                                    <Text note> Cabeçalho e fontes.</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={style.cardItemColor}>
                            {colors.map((item,index) => <ColorItem key={index} item={item} /> )}
                        </CardItem>
                    </Card>
                    <Body style={style.botaoSalvar}>
                        <Button style={{backgroundColor:this.props.color}} >
                            <Text>Salvar</Text>
                        </Button>
                    </Body>
                </Content>
            </Container>   
        );
    }
}

const mapStateToProps = state => ({
    loading: state.ConfiguracaoReducer.loading,
    color: state.ConfiguracaoReducer.color,
    textColor: state.ConfiguracaoReducer.textColor
});

Configuracao = connect(mapStateToProps,{setColor})(Configuracao);

export default Configuracao;