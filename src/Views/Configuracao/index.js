import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Left, Icon, Body, Text, Button, View } from 'native-base';
import Topo from '../../Components/Topo';
import style from './style';

const colors = [
    {color:'#d32f2f',textColor:'#ffffff'},
    {color:'#f57c00', textColor:'#000000'},
    {color:'#33691e', textColor:'#ffffff'},
    {color:'#d81b60', textColor:'#ffffff'},
    {color:'#212121', textColor:'#ffffff'},
    {color:'#1565c0', textColor:'#ffffff'}
];

export default class Configuracao extends Component{

    constructor(props){
        super(props);
        this.state = {color:'#1565c0', textColor:'#ffffff'};
    }

    setColor(objColor){
        this.setState(objColor.item);
    }

    render(){

        const ColorItem = (props) => {
            return (
                <Button onPress={() => this.setColor(props)} style={style.boxColorBtn} transparent>
                    <View style={[style.boxColor,{ backgroundColor: props.item.color}]}></View>
                </Button>
            );
        }   

        return (
            <Container>
                <Topo color={this.state.color} textColor={this.state.textColor} navigation={this.props.navigation} titulo='Configuração' hiddenBtnConfig={true} hiddenBtnAdd={true} />
                <Content>
                    <Card style={style.card}>
                        <CardItem>
                            <Left>
                                <Icon style={style.icon} name='md-color-filter'/>
                                <Body>
                                    <Text>Cores</Text>
                                    <Text note> Cores da header e fontes.</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={style.cardItemColor}>
                            {colors.map((item,index) => <ColorItem key={index} item={item} /> )}
                        </CardItem>
                    </Card>
                </Content>
            </Container>   
        );
    }
}
