import React from 'react';

require('./Menu.less');

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (

        	<div id="g_menu" className='pull-left g-menu'>
				<div className='g-container clearfix'>
					<ul className="list-unstyled clearfix">
						<li className="pull-left menu-item">
							<a href="/dev/app/overview">
								<span className="fa fa-home"></span>首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/create">
								<span className="glyphicon glyphicon-home"></span>AAA
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/update">
								<span className="glyphicon glyphicon-home"></span>BBB
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/app/search">
								<span className="glyphicon glyphicon-home"></span>CCC
							</a>
						</li>
						<li className="pull-left menu-item">
							<a href="/dev/a">
								<span className="glyphicon glyphicon-home"></span>DDD
							</a>
						</li><li className="pull-left menu-item">
							<a href="/dev/b">
								<span className="glyphicon glyphicon-home"></span>EEE
							</a>
						</li>
					</ul>
				</div>
			</div>

        );
    }
}