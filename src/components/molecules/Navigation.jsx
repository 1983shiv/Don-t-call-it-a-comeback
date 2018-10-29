import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavigationContainer = styled.nav`
	padding: 15px;
	position: absolute;
	width: 100%;

	color: white;
	text-align: center;

	a {
		display: inline-block;

		~ a {
			margin-left: 15px;
		}
	}
`;
class Navigation extends Component {
	render() {
		return (
			<NavigationContainer>
				<Link to="/">Home</Link>
				<Link to="/cv">CV</Link>
				<Link to="/#work">Work</Link>
				<Link to="/#blog">Blog</Link>
			</NavigationContainer>
		);
	}
}

export default Navigation;