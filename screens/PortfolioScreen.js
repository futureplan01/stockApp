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
            console.log()
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
                <Text style = {{backgroundColor: '#1e90ff', color: 'white'}}>Stocks</Text>
                <ScrollView> 
                    {this.state.stocks.map((stock,num)=>{
                        console.log(stock);
                       return( <Text key = {num}> 
                            {stock.Click} {stock.symbol} {stock.price}
                        </Text>)
                    })}
                </ScrollView>
            </View>
        )
    }
}
export default PortfolioScreen