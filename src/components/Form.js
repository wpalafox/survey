import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
    
    state = {
        fullName: '',
        accountEmail: '',
        orgName: '',
        promoID: '',
        descIssue: '',

    };
    
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
         
        });


    };

    onSubmit = e => {
        this.props.onSubmit(this.state)
        console.log(this.state)

        this.setState({
            fullName: '',
            accountEmail: '',
            orgName: '',
            promoID: '',
            descIssue: '',

        });
    }
    
    
    render() {
       
        return (
        <form> 
            <div className="container">  
        
                <div className="container">
                        
                        <div className="form-group">
                            <p id="name-p">Full Name</p>
                            <input 
                            name="fullName"
                            placeholder="Will Palafox" 
                            value={this.state.fullName} 
                            onChange={e => this.change(e)}  
                            id="name-input" 
                            type="text"/> 
                        </div>
                        
                        <div className="form-group">   
                            <p id="email-p">Account Email</p>
                            <input 
                            name="accountEmail"
                            placeholder="will@justuno.com"
                            value={this.state.accountEmail}
                            onChange={e => this.change(e)}
                            id="email-input" 
                            type="text"/> 
                        </div>
                        
                        <div className="form-group">   
                            <p id="organization-p">Organization Name</p>
                            <input 
                            name="orgName"
                            value={this.state.orgName}
                            onChange={e => this.change(e)}
                            placeholder="Justuno"
                            id="organization-input" 
                            type="text"/> 
                        </div>
                  
                       <div className="form-group"> 
                            <p id="promotion-p">Promotion ID</p>
                            <input 
                            name="promoID"
                            value={this.state.promoID}
                            onChange={e => this.change(e)}
                            placeholder="12345"
                            id="promotion-input" 
                            type="text"/> 
                        <div/>
                    
                        <div className="form-group"> 
                            <p id="issue-p">Detailed Description of Issue</p>
                            <textarea 
                            name="descIssue"
                            placeholder="My promotion will not fire"
                            id="issue-input"
                            value={this.state.descIssue}
                            onChange={e => this.change(e)}/> 
                        </div>
                    
                </div>

                <button type="button" class="btn btn-danger" onClick={() => this.onSubmit()}>Submit</button>
            
            </div>  
        </div>
    </form>   
        )
    }
}





/*

 <div className="form-group">
                            <label for="labelForTypeOfIssue">Type Of Issue</label>
                            <select class="form-control" id="formcontrolselect">
                                <option>Design Canvas</option>
                                <option>Integrations</option>
                                <option>Analytics</option>
                                <option>Commerce AI</option>
                                <option>Promotions Area</option>
                            </select>
                        </div>

*/ 