import React from 'react';
import { connect } from 'react-redux'
import './Checkin.css'
import { removeItem } from '../../actions/index'


function CheckIn(props) {
    return (
        <diV>
            <h1>Total:</h1>
            {props.articles.map(el => el && <div class="buy-item">
                <div>
                    <i onClick={() =>{ props.removeItem(el.article.ref); console.log(el.article.ref)}} class="fas fa-times"></i>
                    <img src={el.article.imgUrl} alt="" />
                </div>
                <div>
                    <p>{el.quantity}</p>
                </div>
                <div>
                    <p>{el.article.price}</p>
                    <input type="text"></input>
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