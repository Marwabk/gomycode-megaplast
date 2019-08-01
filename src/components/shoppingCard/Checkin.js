import React from 'react';
import { connect } from 'react-redux'
import './Checkin.css'


function CheckIn(props) {
    return (
        <diV>
            <h1>Total:</h1>
            {props.articles.map(el => el && <div class="buy-item">
                <div>
                    <i class="fas fa-times"></i>
                    <img src={el.imgUrl} alt="" />
                </div>
                <div>
                    <i class="fas fa-plus-square"></i>
                    <input type="text"></input>
                    <i class="fas fa-minus-square"></i>
                </div>
                <div>
                    <p>{el.price}</p>
                    <input type="text"></input>
                </div>
            </div>)}
        </diV>
    )
}

const mapStateToProps = (state) => ({
    articles: state.shoppingCartReducer
})

export default connect(mapStateToProps)(CheckIn)