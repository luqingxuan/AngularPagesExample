import React from 'react';

import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';

import Footer from '../../components/Footer.jsx';
import Header from '../../components/Header.jsx';
import Top from '../../components/Top.jsx';
import Nav from '../../components/Nav.jsx';
import Menu from '../../components/Menu.jsx';

ReactDOM.render(
  <div>
  	<Top></Top>
  	<Header></Header>
  	<Nav></Nav>
  	<Footer></Footer>
  </div>,
  document.getElementById('app')
);