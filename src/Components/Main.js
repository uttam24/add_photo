import React, {Component} from 'react'
import Title from './Title'
import PhotoFrame from './PhotoFrame'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor(){
        
        super()
        this.state = {
            allPhotos: [{
                id: "0",
                description: "beautiful sea",
                imageLink: "https://picsum.photos/800/600?image=14"
                }, {
                id: "1",
                description: "Coffee cup",
                imageLink: "https://picsum.photos/800/600?image=30"
                }, {
                id: "2",
                description: "Freedom",
                imageLink: "https://picsum.photos/800/600?image=50"
                }, {
                id: "3",
                description: "Farm",
                imageLink: "https://picsum.photos/800/600?image=85"
                }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }
    removePhoto(photoRemoved){
        console.log(photoRemoved.description)
        this.setState((state) => ({
            allPhotos: state.allPhotos.filter((photo) => photo !== photoRemoved )
        }))
    }

    addPhoto(photoSubmitted) {
        this.setState(state => ({
            allPhotos: state.allPhotos.concat([photoSubmitted])
        }))
    }

    
    render() {
        
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                    <Title  title={'Photoframe'}/>
                    <PhotoFrame PhotoBlock={this.state.allPhotos} onRemovePhoto = {this.removePhoto} />
                    </div>
                )} />

                <Route exact path="/AddPhoto" render={({history}) => (
                    <AddPhoto onAddPhoto={(addedPhoto) => {
                        this.addPhoto(addedPhoto)
                        history.push('/')
                    }} />
                )} />
                
                
            </div>
        );
    }
}


export default Main