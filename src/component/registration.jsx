import React, { Component } from "react";
import "../register.css";
import "font-awesome/css/font-awesome.min.css";
class Registration extends Component {
  state = {
    check:false,
    data: {
      npi: "",
      email: "",
      firstname: "",
      lastname: "",
      telephone: "",
      address: "",
    },
  };
  onChangeData = (key, value) => {
    let data = this.state.data;
    if (key == "npi") {
      if (value > 9999999999) return;
    }
    if (key == "email") {
    }
    data[key] = value;
    this.setState({ data: data });
  };
  submitFormHandler = (e) => {
    e.preventDefault();
    let data = this.state.data;
    const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRe.test(String(this.state.data.email).toLowerCase())) {
      return alert("Email is not Valid");
    }

    const telephoneRe = /^\d{3}-\d{3}-\d{4}$/;
    
    if (!telephoneRe.test(data.telephone)){
      
      return alert("Enter telephone in format: 123-456-7890")

    }

    console.log(data);
    data["id"] = data.npi;
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: new Headers({
        Accept: ["application/json", "text/plain", "multipart/form-data"],
        "Access-Control-Allow-Origin": "*",
      }),
      body: JSON.stringify(data),
    })
      .then(function (res) {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        alert("submitted");
      })
      .catch((err) => {
        console.log("err=>", err);
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="registeration-form-wrapper">
          <div className="container">
            <form onSubmit={this.submitFormHandler}>
              <div className="row">
                <h4>Account</h4>
                <div className="input-group input-group-icon">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.data.firstname}
                    onChange={(e) =>
                      this.onChangeData("firstname", e.target.value)
                    }
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={this.state.data.lastname}
                    onChange={(e) =>
                      this.onChangeData("lastname", e.target.value)
                    }
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="email"
                    placeholder="Email"
                    value={this.state.data["email"]}
                    onChange={(e) => this.onChangeData("email", e.target.value)}
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="number"
                    placeholder="NPI Number"
                    value={this.state.data["npi"]}
                    onChange={(e) => this.onChangeData("npi", e.target.value)}
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-key"></i>
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="text"
                    placeholder="Business Address"
                    value={this.state.data.address}
                    onChange={(e) =>
                      this.onChangeData("address", e.target.value)
                    }
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-address-card"></i>
                  </div>
                </div>
                <div className="input-group input-group-icon">
                  <input
                    type="text"
                    placeholder="Telephone"
                    value={this.state.data.telephone}
                    onChange={(e) =>
                      this.onChangeData("telephone", e.target.value)
                    }
                    required
                  />
                  <div className="input-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                </div>
              </div>
           
              <div className="row">
                <h4>Terms and Conditions</h4>
                <div className="input-group">
                  <input id="terms" type="checkbox" required />
                  <label htmlFor="terms">
                    I accept the terms and conditions for signing up to this
                    service, and hereby confirm I have read the privacy policy.
                  </label>
                </div>
              </div>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Registration;
