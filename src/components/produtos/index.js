import React, { Component } from 'react'
import api from '../../services/api'
import './styleProdutos.css'
import { Link } from 'react-router-dom'



export default class Produto extends Component {
    state = {
        produto: {}
    }

     async componentDidMount(){
        
        const { id } = this.props.match.params 

        const response = await api.get(`/products/${ id }`)

        this.setState ({ produto: response.data })
    }
    
    
    
    
    
    render(){

        const {produto} = this.state

        return(
            <div className= 'produto'>

                
                <div className= 'produto-info'>

                    <h1> {produto.title} </h1>

                        <p> {produto.description} </p>

                        <p> 
                            URL: <a href={produto.url}>{produto.url}></a>
                        </p>
                        
                         <Link to={`/`}>Voltar ao Inicio</Link>
                        

                </div>

               
            </div>

                        
        )
            
        
    }
}