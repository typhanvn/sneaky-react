import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';
import { actFoodsRequest } from './../../actions/index';

class FeaturedFood extends Component {
  componentWillMount() {
    this.props.foodAll();
  }

  render() {
    const { foods } = this.props;
    return (
      <section className="section-margin mb-lg-100">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Featured Food</h4>
            <h2>Fresh taste and great price</h2>
          </div>
          <OwlCarousel
            className="owl-carousel owl-theme featured-carousel"
            key={`carousel_${foods.length}`}
            items={3}
            margin={30}
            dots={false}
            nav
            navText={[
              '<i class="ti-angle-left"></i>',
              '<i class="ti-angle-right"></i>',
            ]}
          >
            {foods.map((food, i) => {
              if (food.hot === 1)
                return (
                  <div className="featured-item" key={i}>
                    <img
                      className="card-img rounded-0"
                      src={food.image}
                      alt=""
                    />
                    <div className="item-body">
                      <Link to="/{food.title}">
                        <h3>{food.title}</h3>
                      </Link>
                      <p>{food.description}</p>
                      <div className="d-flex justify-content-between">
                        <ul className="rating-star">
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                        </ul>
                        <h3 className="price-tag">{food.price} VND</h3>
                      </div>
                    </div>
                  </div>
                );
              return false;
            })}
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { foods: state.foods };
};

//save store
const mapDispatchToProps = (dispatch, props) => {
  return {
    foodAll: () => {
      dispatch(actFoodsRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeaturedFood);
