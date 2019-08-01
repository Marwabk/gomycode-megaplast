import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../actions'
import './ProductDetail.css'



class ProductDetail extends React.Component {
	state = {
		quantity: 0
	} 
	render() {
		const {el, addItem, article} = this.props;
		return <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">

						<div class="preview-pic tab-content">
							<div class="tab-pane active" id="pic-1"><img src={article.imgUrl} /></div>
						</div>
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{article.title}</h3>
						<p class="product-description"> {article.refs}</p>
						<h4 class="price">Prix actuel: <span>{article.price} Dt</span></h4>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button" onClick={()=>addItem({article, quantity:this.state.quantity})}>add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
							<input onChange={(event) => this.setState({ quantity: event.target.value})} type="text"></input>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	}
}

const mapDispatchToProps = dispatch => ({
	addItem: (payload) => dispatch(addItem(payload))
})
export default connect(null, mapDispatchToProps)(ProductDetail)

