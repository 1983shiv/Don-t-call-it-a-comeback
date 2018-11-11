import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Codepen = styled.div`
	width: 100%;

	@media screen and (min-width: 768px) {
		margin-right: 30px;
		width: 30%;
		width: calc(33% - 30px);
	}

	h3 {
		margin-bottom: 0;
	}
`;

class CodepenTease extends Component {
	render() {
		return (
			<Codepen>
				<a href={this.props.url} target="_blank">
					<h3>{this.props.title}</h3>
					<p>👀 by {this.props.views}</p>
					<p>❤ by {this.props.loves}</p>
				</a>
			</Codepen>
		);
	}
}

export default CodepenTease;
