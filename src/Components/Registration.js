import React from 'react';

export default class Registration extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        volunteerType: "",
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onEnter = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            volunteerType: "",
        })
    };

    render() {
        return (
            <form>
                <h1> Volunteer Registration Form</h1>
                <label>First Name: </label><input 
                  name = "firstName"
                  placeholder = "First name"
                  value = {this.state.firstName}
                  onChange = {e => this.change(e)}
                />
                <br/>
                <label>Last Name: </label> <input 
                  name = "lastName"
                  placeholder = "Last name"
                  value = {this.state.lastName}
                  onChange = {e => this.change(e)}
                />
                <br/>
                 <label>Phone Number: </label><input 
                  name = "phone"
                  placeholder = "Phone Number"
                  value = {this.state.phone}
                  onChange = {e => this.change(e)}
                />
                <br/>
                 <label>Email Address: </label><input 
                  name = "email"
                  placeholder = "Email Address"
                  value = {this.state.email}
                  onChange = {e => this.change(e)}
                />
                <br/>
                 <label> Volunteer Type: </label>
                 <select onChange = {e => this.change(e)} value = {this.state.volunteerType} name = "volunteerType">
                     <option defaultValue> Select Volunteer Type</option>
                     <option value = "Core Volunteer"> Core Volunteer</option>
                     <option value = "Regular Volunteer"> Regular Volunteer</option>
                 </select>
                 <br/>
                <br/>
                <button onClick = {e => this.onEnter(e)}> Enter </button>
            </form>
        );
    }
}
