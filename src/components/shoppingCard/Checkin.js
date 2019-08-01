import React from 'react';
import { connect } from 'react-redux'
import './Checkin.css'
import { removeItem } from '../../actions/index'


function CheckIn(props) {
    const prices=props.articles.map(el=>(Number(el.article.price)*Number(el.quantity)))
    
    return (
        <diV>
            <h1>Total:{eval(prices.join('+')) } Dt</h1>
            {props.articles.map(el => el && <div class="buy-item">
                <div>
                    <i onClick={() =>{ props.removeItem(el.article.ref); console.log(el.article.ref)}} class="fas fa-times"></i>
                    <img src={el.article.imgUrl} alt="" />
                </div>
                <div>
                    <p>Quantité:{el.quantity}</p>
                </div>
                <div>
                    <p>Prix unitaire:{el.article.price}</p>
                    <p>Prix total:{Number(el.article.price)*Number(el.quantity)}</p>
                </div>
                <div>
                    <p></p>
                    {/* <input type="text"></input> */}
                </div>
            </div>)}
        </diV>
    )
}

const mapStateToProps = (state) => ({
    articles: state.shoppingCartReducer
})

const mapDispatchToProps = dispatch => ({
    removeItem: (payload) => dispatch(removeItem(payload))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn)