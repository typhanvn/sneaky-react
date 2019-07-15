import React, { Component } from 'react';
import axios from 'axios';
import './FoodMenu.css';

export default class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    const $this = this;

    axios
      .get('/foods')
      .then(function(response) {
        // handle success
        $this.setState({
          data: response.data,
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Food Menu</h4>
            <h2>Delicious food</h2>
          </div>
          <div className="row">
            {this.state.data.map(food => {
              return (
                <div className="col-lg-6" key={food.id}>
                  <div className="media align-items-center food-card">
                    <img className="mr-3 mr-sm-4" src={food.image} alt="" />
                    <div className="media-body">
                      <div className="d-flex justify-content-between food-card-title">
                        <h4>{food.title}</h4>
                        <h3 className="price-tag">
                          {`${food.price.substring(0, food.price.length - 3)}K`}
                        </h3>
                      </div>
                      <p>{food.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
