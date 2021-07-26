import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class Login extends Component {
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
            }
      
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


   
   
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    

    onSubmit(event){
        event.preventDefault()

        const registered = {
            email:this.state.email,
            password:this.state.password,
            }
        // if(!this.validate() )
        // {console.log('check password')}
        // else{
        axios.post('http://localhost:4000/app/login', registered)
        .then(res => console.log(res.data))

        this.setState({
            email:'',
            password:''
          
        })
    //   }
    }
    // validate(){
    //     if(this.state.Confirmpassword !== this.state.password){
    //         alert('confirmpassword')
    //         return false
    //     }
    //     return true

    // }

    render() {
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                           
                            <label>Email</label>
                            <input type='text' placeholder='E-mail' onChange={this.changeEmail} value={this.state.email}
                            className='form-control form-group'/>
                            <label>Password</label>
                            <input type='password' placeholder='password' onChange={this.changePassword} value={this.state.password}
                            className='form-control form-group'/>
                           
                           
                            <button type='submit' className='btn btn-danger btn-block' value='submit' >Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;