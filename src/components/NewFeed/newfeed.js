import React from 'react'
import './NewFeed.css'

function NewFeed(){
return <div className="new-feed">
    <div className='new-feed-text'>
    <span>Nouveautés</span>
    <p>Découvrez une large gamme de produits </p>
    </div>
    <div className="slider-button">
    <a class="prev" >&#10094;</a>
    <a class="next" >&#10095;</a>
    </div>
</div>
}
export default NewFeed