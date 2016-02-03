import React from 'react';

require('./Top.less');

export default class Top extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<div id="g_top" className='g-top'>
				<div className='g-container clearfix'>
					 <h1 className="pull-left top-logo">
					 	<a>XYZ</a>
					 </h1>
					 <ul className="pull-right list-unstyled top-menu">
					 	<li className="pull-left menu-item">ABC</li>
					 	<li className="pull-left menu-item">XYZ</li>
					 	<li className="pull-left menu-item">MNP</li>
					 </ul>
				</div>
			</div>

        );
    }
}