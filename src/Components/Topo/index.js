import React, {Component} from 'react';
import { Header, Title, Right, Left , Body, Button, Icon } from 'native-base';
import { connect } from 'react-redux';

class Topo extends Component{

    botaoAdd(){
        return (!this.props.hiddenBtnAdd) ?  (
            <Button transparent>
                <Icon name='add'/>
            </Button>
        ) : null;
    }

    botaoConfig(){
        return (!this.props.hiddenBtnConfig) ? (
            <Button onPress={() => this.props.navigation.navigate('Configuracao')} transparent>
                <Icon name='settings'/>
            </Button>
        ) : null;
    }

    botaoGoBack(){
        return (this.props.navigation.state.routeName !== "Lista") ? (
            <Left>
                <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon name='md-arrow-back'/>
                </Button>
            </Left>    
        ) : null;
    }

    render(){
        return (
            <Header androidStatusBarColor={this.props.color} style={{backgroundColor:this.props.color,color: this.props.textColor}}>
                   {this.botaoGoBack()} 
                <Body>
                    <Title>{  this.props.titulo }</Title>
                </Body>
                <Right>
                    {this.botaoAdd()}
                    {this.botaoConfig()}
                </Right>
            </Header>
        );
    }

}

const mapStateToProps = state => ({
    loading: state.ConfiguracaoReducer.loading,
    color: state.ConfiguracaoReducer.color,
    textColor: state.ConfiguracaoReducer.textColor
});


Topo = connect(mapStateToProps,null)(Topo);

export default Topo;