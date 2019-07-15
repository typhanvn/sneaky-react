import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actPageAllRequest } from './../../actions/index';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        const active = match ? ' active' : '';
        return (
          <li className={`nav-item${active}`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Header extends Component {
  componentDidMount() {
    this.props.pageAll();
  }

  showMenus = menus => {
    let result = null;

    if (menus.length > 0) {
      result = menus.map(menu => {
        return (
          <MenuLink
            key={menu.id}
            label={menu.name}
            to={menu.name === 'home' ? '/' : `/${menu.name}`}
            activeOnlyWhenExact={menu.exact === 1}
          />
        );
      });
    }
    return result;
  };

  render() {
    const { pages } = this.props;

    return (
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
              <Link className="navbar-brand logo_h" to="/">
                <img src="img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  {this.showMenus(pages)}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

//data store to props
const mapStateToProps = state => {
  return { pages: state.pages };
};

//save store
const mapDispatchToProps = (dispatch, props) => {
  return {
    pageAll: () => {
      dispatch(actPageAllRequest());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
