import React, { Component } from 'react'
import api from '../../services/api'
import './stylesMain.css'

export default class Main extends Component{

    state = {
        produtos: [],
        produtosInfo: {},
        page: 1,
    }


    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async ( page = 1) =>{
        const response  = await api.get(`/products?page=${page}`)

        const {docs, ...produtosInfo} = response.data

       console.log(response.data.docs);
       this.setState({produtos: docs, produtosInfo, page})

        
    }
    
    prevPage = () =>{
        console.log('Clickei no anterior')
        const {page} = this.state

        if(page == 1)  return

        const pageNumber = page-1

        this.loadProducts(pageNumber)
    }
    nextPage = () =>{
        console.log('Clickei no próximo')
        const {page, produtosInfo} = this.state

        if(page == produtosInfo.pages)  return

        const pageNumber = page+1

        this.loadProducts(pageNumber)
    }
    
    render(){
        const {produtos, page, produtosInfo} = this.state
    return (
        <div className='produto-lista'>
            {this.state.produtos.map(produto =>(
                <article key={produto._id}> 
                    <strong>{produto.title}</strong>

                    <p>{produto.description}</p>

                   <a href='#'>Acessar</a>
                </article>
               
            ))}
            <div className="actions">
                    <button disabled={page==1} onClick ={this.prevPage}>Anterior</button>

                    <button disabled={page == produtosInfo.pages} onClick ={this.nextPage}>Próximo</button>
            </div>
        </div>
    )
    }
}