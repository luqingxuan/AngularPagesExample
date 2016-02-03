import React from 'react';

require('./Header.less');

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<header id="g_header" className="g-header">
        		<div className='g-container clearfix'></div>
        	</header>

        );
    }
}
