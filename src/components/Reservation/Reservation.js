import React, { Component } from 'react';
import axios from 'axios';

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtEmail: '',
      txtPhone: '',
      txtDate: '',
      txtPeople: '',
      loading: false,
      message: '',
    };
  }

  dataChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  postData = e => {
    e.preventDefault();
    const { txtName, txtEmail, txtPhone, txtDate, txtPeople } = this.state;
    const name = txtName;
    const email = txtEmail;
    const phone = txtPhone;
    const date = txtDate;
    const people = txtPeople;

    this.setState({
      loading: true,
    });

    const data = {
      name,
      email,
      phone,
      date,
      people,
    };

    axios
      .post('/book-register', data)
      .then(function(response) {
        console.log(response);
        this.setState({
          loading: false,
          message: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  loadOrShowMsg = () => {
    const { loading, message } = this.state;
    if (loading === true) {
      return <div>Loading...</div>;
    }
    return <div>{message}</div>;
  };

  render() {
    const { name, email, phone, date, people } = this.state;
    return (
      <section id="book-now" className="bg-lightGray section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-5 mb-4 mb-md-0">
              <div className="section-intro">
                <h4 className="intro-title">Reservation</h4>
                <h2 className="mb-3">Get experience from sneaky</h2>
              </div>
              <p>
                Him given and midst tree form seas she'd saw give evening one
                every make hath moveth you're appear female heaven had signs own
                days saw they're have let midst given him given and midst tree.
                Form seas she'd saw give evening
              </p>
            </div>
            <div className="col-md-6 offset-xl-2 col-xl-5">
              <div className="search-wrapper">
                <h3>Book A Table</h3>
                <form className="search-form" onSubmit={e => this.postData(e)}>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtName"
                        value={name}
                        onChange={e => this.dataChange(e)}
                        placeholder="Your Name"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="ti-user" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtEmail"
                        value={email}
                        onChange={e => this.dataChange(e)}
                        placeholder="Email Address"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="ti-email" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtPhone"
                        value={phone}
                        onChange={e => this.dataChange(e)}
                        placeholder="Phone Number"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="ti-headphone-alt" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtDate"
                        value={date}
                        onChange={e => this.dataChange(e)}
                        placeholder="Select Date"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="ti-notepad" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtPeople"
                        value={people}
                        onChange={e => this.dataChange(e)}
                        placeholder="Select People"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="ti-layout-column3" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group-position">
                    <button className="button border-0" type="submit">
                      Make Reservation
                    </button>
                  </div>
                </form>
                {this.loadOrShowMsg()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
