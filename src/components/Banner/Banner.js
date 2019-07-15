import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Banner.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actBannerTextRequest, actBannerImgRequest } from '../../actions/index';

class Banner extends Component {
  componentDidMount() {
    this.props.bannerAll();
    this.props.bannerAll2();
  }

  renderButton = btn => {
    if (btn === true) {
      return (
        <div className="d-sm-flex flex-wrap">
          <a href="#book-now" className="button button-hero button-shadow">
            Book Now
          </a>
          <Link
            className="hero-banner__video"
            to="http://www.youtube.com/watch?v=0O2aH4XLbto"
          >
            Watch Video
          </Link>
        </div>
      );
    }
    return btn;
  };

  bannerClass = btn => {
    if (btn === true) {
      return 'hero-banner';
    }
    return 'hero-banner hero-banner-sm';
  };

  render() {
    const { bannerText, bannerImg } = this.props;
    return (
      <section className={this.bannerClass(this.props.btn)}>
        <div className="hero-wrapper">
          <div className="hero-left">
            {bannerText.map((banner, i) => {
              if (banner.id_page === this.props.id_page) {
                return (
                  <div key={i}>
                    <h1 className="hero-title">{banner.title}</h1>
                    <p>{banner.subText}</p>
                  </div>
                );
              }
              return false;
            })}

            {this.renderButton(this.props.btn)}
            <ul className="hero-info d-none d-lg-block">
              <li>
                <img src="img/banner/fas-service-icon.png" alt="" />
                <h4>Fast Service</h4>
              </li>
              <li>
                <img src="img/banner/fresh-food-icon.png" alt="" />
                <h4>Fresh Food</h4>
              </li>
              <li>
                <img src="img/banner/support-icon.png" alt="" />
                <h4>24/7 Support</h4>
              </li>
            </ul>
          </div>
          <div className="hero-right">
            <OwlCarousel
              className="owl-theme hero-carousel"
              key={`carousel_${bannerImg.length}`}
              margin={30}
              items={1}
            >
              {bannerImg.map((image, i) => {
                if (image.id_banner === this.props.id_page) {
                  return (
                    <div className="hero-carousel-item" key={i}>
                      <img className="img-fluid" src={image.imageUrl} alt="" />
                    </div>
                  );
                }
                return false;
              })}
            </OwlCarousel>
          </div>
          <ul className="social-icons d-none d-lg-block">
            <li>
              <Link to="/facebook">
                <i className="ti-facebook" />
              </Link>
            </li>
            <li>
              <Link to="/twitter">
                <i className="ti-twitter" />
              </Link>
            </li>
            <li>
              <Link to="/instagram">
                <i className="ti-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  bannerText: state.bannerText,
  bannerImg: state.bannerImg,
});

// save store
const mapDispatchToProps = (dispatch, props) => ({
  bannerAll: () => {
    dispatch(actBannerTextRequest());
  },
  bannerAll2: () => {
    dispatch(actBannerImgRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Banner);
