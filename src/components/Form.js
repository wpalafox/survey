import React, { Component } from 'react'
import './form.css'

export default class Form extends Component {
    
    state = {
        fullName: '',
        accountEmail: '',
        orgName: '',
        typeIssue: '',
        promoID: '',
        descIssue: '',

    };
    
    
    
    
    render() {
       
        return (
        <form> 
            <div className="container">  
        
                <div className="container">
                        
                        <div className="form-group">
                            <p id="name-p">Full Name</p>
                            <input 
                            placeholder="Will Palafox" 
                            value={this.state.fullName} 
                            onChange={e => this.setState({fullName: e.target.value})}  
                            id="name-input" 
                            type="text"/> 
                        </div>
                        
                        <div className="form-group">   
                            <p id="email-p">Account Email</p>
                            <input id="email-input" type="text"/> 
                        </div>
                        
                        <div className="form-group">   
                            <p id="organization-p">Organization Name</p>
                            <input id="organization-input" type="text"/> 
                        </div>
                        
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

                        <div className="form-group"> 
                            <p id="promotion-p">Promotion ID</p>
                            <input id="promotion-input" type="text"/> 
                        <div/>
                    
                        <div className="form-group"> 
                            <p id="issue-p">Detailed Description of Issue</p>
                            <textarea id="issue-input"/> 
                        </div>
                    
                </div>

                <button type="button" class="btn btn-danger">Submit</button>
            
            </div>  
        </div>
    </form>   
        )
    }
}
