import React,{ Component } from 'react'
import PropTypes from 'prop-types';

const Photo =(props)=>{
    const frame = props.finalPhoto;
        return(
            <figure className='figure'>
                <img  className='photo' src={frame.imageLink} alt={frame.description}/>
                <figcaption><p>{frame.description}</p></figcaption>
                <div className='button-container'>
                   <button className='remove-button' onClick={()=> {
                       props.onRemovePhoto(frame)
                   }
                   }>Remove</button>
                </div>
            </figure>
        )
}

Photo.propTypes= {
    onRemovePhoto:PropTypes.func.isRequired,
    finalPhoto:PropTypes.object.isRequired
}


export default Photo