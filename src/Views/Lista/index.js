import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import Topo from '../../Components/Topo';

export default class Lista extends Component{
    render(){
        return (
            <Container>
                <Topo titulo='Lista' navigation={this.props.navigation}/>
                <Content>
                    <Text> Pagina de lista </Text>
                </Content>
            </Container>    
        );
    }
}
