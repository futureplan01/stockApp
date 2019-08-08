import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';

class PortfolioScreen extends Component{
    constructor(props){
        super(props)
        this.state = {stocks: []}
        this.getStocks = this.getStocks.bind(this);
    }

    getStocks(){
        axios.get('https://api.iextrading.com/1.0/tops/last')
        .then((value)=>{
            this.setState({stocks: value.data});
        })
        .catch((err)=>{
            console.log("Error: "  + err);
        })
    }
    componentDidMount(){
        if(this.state.stocks.length === 0)
        this.getStocks();
    }

    render(){
        return(
            <View> 
                <Text style = {{backgroundColor: '#1e90ff', color: 'white', textAlign:'center'}}>Stocks</Text>
                <ScrollView style= {{height: 120}}> 
                    {this.state.stocks.map((stock,num)=>{
                       return( <Text key = {num}> 
                            {stock.Click} {stock.symbol} {stock.price}
                        </Text>)
                    })}
                </ScrollView>
                <View>
                    <Text style= {{backgroundColor: '#1e90ff', width:'full',color:'white',position: 'absolute',bottom: 0,textAlign:'center'}}>
                        Footer
                    </Text>
                </View>
            </View>
        )
    }
}
export default PortfolioScreen