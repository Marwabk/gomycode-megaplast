import React from "react"
import {connect} from "react-redux"
import ItemCard from "../components/ItemCard";



function CatSalon(props){

       const it=props.item.map(el=><ItemCard tit={el.title} img={el.img} price={el.price}/>)

        return(
            <>
            {it}
            </>
        )

}

const mapStateToProps = (state)=>({
    item: state.salon
})

export default connect(mapStateToProps)(CatSalon)




