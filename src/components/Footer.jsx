import React from 'react';

require('./Footer.less');

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<footer id="g_footer" className='g-footer'>
        		<div className='g-container clearfix'>
        			<p className="text-center">test</p>
        		</div>
        	</footer>

        );
    }
}