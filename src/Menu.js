import { Component } from 'react';

export default class Menu extends Component {
	render() {
		return (
			<header>
				<nav>
					<h1 className="logo">
						Reac<em>Tube</em>
					</h1>
					<ul className="mainMenu">
						<li>
							<a href="#">Vidéos</a>
						</li>
						<li>
							<a href="#">Ajouter</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
