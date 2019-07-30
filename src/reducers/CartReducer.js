import React from "react"


const img1= "http://www.sotufab-plast.tn/image/cache/data/produits/article%20domestique/boite%20alimentaire/boite-alimentaire-600x600.png";
const img2= "http://www.sotufab-plast.tn/image/data/produits/article%20domestique/DESIGN/COEBEILLE%20DESIGN.png";
const img3= "http://www.sotufab-plast.tn/image/data/produits/article%20domestique/CUISINE/STORAGE/SEL%20ET%20POIVRES/CARROUSOL%20VERT.png";
const img4= "http://www.sotufab-plast.tn/image/data/produits/article%20domestique/porte%20pain/bread-box-sidney/bread%20box%20saumon.png";
const img5= "http://www.sotufab-plast.tn/image/data/produits/article%20domestique/porte%20pain/bread-box-sidney/bread%20box%20saumon.png";
const img6= "http://www.sotufab-plast.tn/image/data/produits/chaise%20plastique/bistro/afrah/Bistro-afrah.png";
const img7= "http://www.sotufab-plast.tn/image/data/produits/tables/table-basse-zahra/table-basse-zahra-01.png";
const img8= "http://www.sotufab-plast.tn/image/cache/data/produits/chaise%20plastique/fauteuil/BANC%20LARIANA/Fauteuille-Larina-Blanc-600x600.jpg";
const img9= "http://www.sotufab-plast.tn/image/data/produits/salon-the/chaise%20design/ALTESSE/BRONZE.png";
const img10= "http://www.sotufab-plast.tn/image/data/produits/salon-the/MARQUISE/marquise2.jpg";
const img11= "http://www.sotufab-plast.tn/image/data/produits/salon-the/chaise%20design/LE%20PRINCE/VIOLET.png";


const initState={
    cuisine:[
        {title:"Boite alimentaire", desc:"", price:0,img:img1, quantity:0, id:1},
        {title:"Corbeille a pain", desc:"", price:0,img:img2, quantity:0, id:2},
        {title:"Carrousel sel et poivre", desc:"", price:0,img:img3, quantity:0, id:3},
        {title:"Bread box", desc:"", price:0,img:img4, quantity:0, id:4},
        {title:"Porte Assiete", desc:"", price:0,img:img5, quantity:0, id:5}],
    jardin:[
        {title:"Chaise en plastic", desc:"", price:0,img:img6, quantity:"", id:1},
        {title:"Table en plastic", desc:"", price:0,img:img7, quantity:"", id:2},
        {title:"Banc en plastic", desc:"", price:0,img:img8, quantity:"", id:3}],
    salon:[
        {title:"Chaise Altesse", desc:"", price:0,img:img9, quantity:0, id:1},
        {title:"Chaise La Marquise", desc:"", price:0,img:img10, quantity:0, id:2},
        {title:"Chaise Prince", desc:"", price:0,img:img11, quantity:0, id:3}]
}

export default function cartReducer(state = initState, action) {
    switch (action.type) {
        default: return state
    }


}