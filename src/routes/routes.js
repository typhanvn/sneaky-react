import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Menu from '../pages/Menu/Menu';
import Chef from '../pages/Chef/Chef';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />,
  },
  {
    path: '/menu',
    exact: false,
    main: () => <Menu />,
  },
  {
    path: '/chef',
    exact: false,
    main: () => <Chef />,
  },
  {
    path: '/blog',
    exact: false,
    main: () => <Blog />,
  },
  {
    path: '/contact',
    exact: false,
    main: () => <Contact />,
  },
];

export default routes;
