import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

import LogoDribbble from "../../../assets/images/icons/brands/dribbble.svg";

const DribbbleComponent = styled.section`
	display: flex;
	margin: 32px 0;
	min-height: 400px;

	@media ${device.xs} {
		margin: 64px 0;
	}

	h3 {
		margin-top: 0;

		font-weight: bold;
		font-size: 24px;
	}

	img {
		display: block;
		width: 100%;
	}

	.dribbble__contents {
		max-width: 600px;
		width: 100%;
	}

	.dribbble__overflow {
		margin-left: 144px;
		position: relative;
		width: 100%;
	}

	.dribbble__shots {
		align-items: flex-start;
		display: flex;
		flex: 1;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		width: 1000%;

		a {
			display: block;
			text-decoration: none;
		}

		p {
			margin: 0;
		}
	}

	.dribbble__shot__meta {
		padding: 16px;
	}

	.dribbble__shot__thumbnail {
		position: relative;
	}

	.dribbble__shot__logo {
		height: 32px;
		position: absolute;
		right: -16px;
		top: -16px;
		width: 32px;

		background: #ea4c89;
		border-radius: 50%;
		fill: #c32361;
	}

	.dribbble__shot {
		width: 250px;

		background: ${props => props.white};
		box-shadow: 0px 2px 6px rgba(20, 18, 19, 0.1);
		opacity: 0;

		+ .dribbble__shot {
			margin-left: 32px;
		}

		&[data-index="0"] {
			opacity: 1;
		}

		&[data-index="1"] {
			opacity: 1;
		}

		&[data-index="2"] {
			opacity: 0.8;
		}

		&[data-index="3"] {
			opacity: 0.5;
		}

		&[data-index="4"] {
			opacity: 0.2;
		}
	}
`;

export default class Dribbble extends Component {
	state = {
		index: 0,
		shots: []
	};

	async componentDidMount() {
		const accessToken = `${process.env.DRIBBBLE_TOKEN}`;
		const dribbbleData = await fetch(
			`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`
		).then(res => {
			return res.json();
		});

		this.setState({ shots: dribbbleData });
	}

	next() {
		this.setState({ index: this.state.index + 1 });
	}

	prev() {
		this.setState({ index: this.state.index - 1 });
	}

	render() {
		const { data } = this.props;

		return (
			<DribbbleComponent>
				<div
					className="dribbble__contents"
					dangerouslySetInnerHTML={{
						__html: data.content
					}}
				/>
				<div className="dribbble__overflow">
					<div className="dribbble__shots">
						{this.state.shots &&
							this.state.shots.map((shot, index) => (
								<Shot index={index} key={shot.id} shot={shot} />
							))}
					</div>
				</div>
			</DribbbleComponent>
		);
	}
}

class Shot extends Component {
	render() {
		const { index, shot } = this.props;

		return (
			<div className="dribbble__shot" index={index} data-index={index}>
				<a
					className="dribbble__shot__thumbnail"
					href={shot.html_url}
					target="_blank"
				>
					<LogoDribbble className="dribbble__shot__logo" />
					<img src={shot.images.teaser} alt={shot.title} />
				</a>
				<div className="dribbble__shot__meta">
					<a href={shot.html_url} target="_blank">
						<h3>{shot.title}</h3>
					</a>
					<div
						className="shot__description"
						dangerouslySetInnerHTML={{ __html: shot.description }}
					/>
				</div>
			</div>
		);
	}
}