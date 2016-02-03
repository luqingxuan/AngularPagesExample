import React from 'react';

require('./Nav.less');

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<div id="g_nav" className="g-nav">
				<div className='g-container clearfix'></div>
			</div>

        );
    }
}