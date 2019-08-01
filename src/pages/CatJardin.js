import React from "react"
import {connect} from "react-redux"
import ItemCard from "../components/ItemCard";
import { Router,Link } from "@reach/router";



function CatJardin(props){

       const it=props.item.map(el=><Link to={el.link}><ItemCard tit={el.title} img={el.imgUrl} price={el.price}/></Link>)

        return(
            <div className="cat-jardin" style={{margin:'0px 100px 0px 100px'}}>
            {it}
            </div>
        )

}

const mapStateToProps = (state)=>({
    item: state.jardin
})

export default connect(mapStateToProps)(CatJardin)




