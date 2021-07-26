import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'


class Signup extends Component {
    constructor(){
        super()
        this.state ={
            fullName:'',
            Mobile:'',
            email:'',
            password:'',
            Confirmpassword:'',
        }
        this.changeFullName =this.changeFullName.bind(this)
        this.changemobile = this.changemobile.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeconfirmPassword = this.changeconfirmPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changemobile(event){
        this.setState({
            Mobile:event.target.value
        })
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
    changeconfirmPassword(event){
        this.setState({
            Confirmpassword:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName:this.state.fullName,
            Mobile:this.state.Mobile,
            email:this.state.email,
            password:this.state.password,
            Confirmpassword:this.state.Confirmpassword
        }
        if(!this.validate() )
        {console.log('check password')}
        else{
        axios.post('http://localhost:4000/app/signup', registered)
        .then(res => console.log(res.data))

        this.setState({
            fullName:'',
            Mobile:'',
            email:'',
            password:'',
            Confirmpassword:''
        })
      }
    }
    validate(){
        if(this.state.Confirmpassword !== this.state.password){
            alert('confirmpassword')
            return false
        }
        return true

    }

    render() {
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <label>Full Name</label>
                            <input type='text' placeholder='full Name' onChange={this.changeFullName} value={this.state.fullName}
                            className='form-control form-group'/>
                            <label>Mobile</label>
                            <input type='Phone' placeholder='9999999999' onChange={this.changemobile} value={this.state.Mobile}
                            className='form-control form-group'/>
                            <label>Email</label>
                            <input type='text' placeholder='E-mail' onChange={this.changeEmail} value={this.state.email}
                            className='form-control form-group'/>
                            <label>Password</label>
                            <input type='password' placeholder='password' onChange={this.changePassword} value={this.state.password}
                            className='form-control form-group'/>
                            <label>Confirm Password</label>
                            <input type='password' placeholder='confirmpassword' onChange={this.changeconfirmPassword} value={this.state.Confirmpassword}
                            className='form-control form-group'/>
                           
                            <input type='submit' className='btn btn-danger btn-block' value='submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;