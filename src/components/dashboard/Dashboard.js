import React , { Component } from 'react';
import Display from '../design/Display';
import Settings from '../design/Setting'
import { storage } from '../../config/firebaseConfig'

class Dashboard extends Component {

   state = {
       tshirtColor :'black',
       upperText:'this is Upper text',
       lowerText:'this is Lower text',
       memeImg: '',
       url:'',
       fontSize:15,
       fontColor:''
   }

   handleTshirtColor = (e) =>{
       this.setState({tshirtColor: e.target.id})
   }

   handleUpperText = (e) =>{
       this.setState({upperText: e.target.value})
   }
   handleLowerText = (e) =>{
       this.setState({lowerText: e.target.value})
   }

   handleImageUpload = (e) =>{
       if(e.target.files[0]){
           const image = (e.target.files[0]);
           const uploadTask = storage.ref(`images/${image.name}`).put(image);
           console.log(uploadTask);
           uploadTask.on('state_changed',
           (snapshot) =>{
           },
           (error)=>{
               console.log(error);
           },
           ()=>{
               storage.ref('images').child(image.name).getDownloadURL().then(url => {
                 this.setState({url})
               })
           })
       }
   }

   handleRange=(e)=>{
       this.setState({fontSize:e.target.value});
   }

   handleColor=(e)=>{
       this.setState({fontColor:e.target.value});
   }
  
    render() {
        return(
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-lg-8">
                        <Display display={this.state} />
                    </div>
                    <div className='col-lg-4'>
                         <Settings 
                         color={this.handleTshirtColor}
                         upperText={this.handleUpperText}
                         lowerText={this.handleLowerText}
                         uploadImage={this.handleImageUpload}
                         handleRange={this.handleRange}
                         handleColor={this.handleColor}
                         />
                    </div>
                </div>  
                 
            </div>
        )
    }
}

export default Dashboard;