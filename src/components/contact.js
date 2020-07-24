import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import headshot from "./headshot.jpg";
import axios from 'axios';

class Contact extends Component{
   constructor(){
     super()

     this.state = {
       name: '',
       email: '',
       message: ''
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange = e => {
     this.setState({ [e.target.name]: e.target.value })
   }
   async handleSubmit(e) {
     e.preventDefault()

     const {name, email, message } = this.state

     const form = await axios.post('/api/form', {
       name,
       email,
       message
     })
   }

   alertFunction(){
     alert("Thanks for your message! I'll get back to you as soon as possible.")
   }

   render(){
      return(
          <div className='contactBody'>
           <Grid className='contactGrid'>
            <Cell col={6} className="left">
             <h2>Paul Prigoda</h2>
              <img src = {headshot} alt = "Logo" className = "contactPic" style={{height: '250px'}}/>
              <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>The best way to contact me is through email or a LinkedIn message.
              I will respond as quick as possible. If you would like to set up some time to talk, weekends are the best time for me.</p>
            </Cell>
            <Cell cold={6} className="right">
              <h2>Contact Me</h2>
              <hr/>
              <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name..." onChange={this.handleChange}/>

                <label>Email</label>
                <input type="text" id="email" name="email" placeholder="Your Email..." onChange={this.handleChange}/>

                <label>Message</label>
                <textarea type="text" id="message" name="message" placeholder="Type Something..." onChange={this.handleChange}/>

                <input type="submit" value="Submit" onClick={this.alertFunction}/>

                </form>
            </Cell>
           </Grid>
          </div>
      );
  }
}


export default Contact;
