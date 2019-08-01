import React from "react"
import {connect} from "react-redux"
import ItemCard from "../components/ItemCard";
import { Router,Link } from "@reach/router";



function CatSalon(props){

       const it=props.item.map(el=><ItemCard el = {el}/>)

        return(<div className="cat-salon" style={{margin:'0px 100px 0px 100px'}}>
            {it}
            </div>
        )

}

const mapStateToProps = (state)=>({
    item: state.cartReducer.salon
})

export default connect(mapStateToProps)(CatSalon)




