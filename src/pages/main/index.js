import React, { Component } from 'react'
import api from '../../services/api'
import './stylesMain.css'

export default class Main extends Component{

    state = {
        produtos: [],
        produtosInfo: {

        }
    }


    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () =>{
        const response  = await api.get('/products')

       console.log(response.data.docs);
       this.setState({produtos: response.data.docs})
        
    }
    
    
    render(){
    return (
        <div className='produto-lista'>
            {this.state.produtos.map(produto =>(
                    <article key={produto._id}> 
                    <strong>{produto.title}</strong>

                    <p>{produto.description}</p>

                   <a href='#'>Acessar</a>
                </article>
               
            ))}
        </div>
    )
    }
}