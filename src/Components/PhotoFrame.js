import React, { Component } from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const PhotoFrame = (props) => {
    return (
        <div>
            <Link className='addIcon' to='/AddPhoto'></Link>
            <div className='photo-grid'>
            {props.PhotoBlock.map((singlePhoto, index) => <Photo key={index} onRemovePhoto={props.onRemovePhoto} finalPhoto={singlePhoto} />)}
              
            </div>
        </div>
    )
}

PhotoFrame.propTypes = {
    PhotoBlock: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoFrame