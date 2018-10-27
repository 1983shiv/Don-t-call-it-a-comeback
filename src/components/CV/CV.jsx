import React, { Component } from "react";
import "./CV.css";
import styled from "styled-components";
import Image from "react-image-webp";

import avatar from "../../assets/images/avatar.jpg";
import cloudtenJPG from "../../assets/images/cv/cloud-ten.jpg";
import cloudtenWebP from "../../assets/images/cv/cloud-ten.webp";
import finish2JPG from "../../assets/images/cv/finish-what-you-started-2.jpg";
import finish2WebP from "../../assets/images/cv/finish-what-you-started-2.webp";
import moov2JPG from "../../assets/images/cv/moov2.jpg";
import moov2WebP from "../../assets/images/cv/moov2.webp";
import needJPG from "../../assets/images/cv/need-for-speed.jpg";
import needWebP from "../../assets/images/cv/need-for-speed.webp";
import nofaceJPG from "../../assets/images/cv/noface.jpg";
import nofaceWebP from "../../assets/images/cv/noface.webp";
import offonJPG from "../../assets/images/cv/offline-is-new-online.jpg";
import offonWebP from "../../assets/images/cv/offline-is-new-online.webp";
import pwablendingJPG from "../../assets/images/cv/pwa-blending.jpg";
import pwablendingWebP from "../../assets/images/cv/pwa-blending.webp";
import winchesterJPG from "../../assets/images/cv/winchester-creatives.jpg";
import winchesterWebP from "../../assets/images/cv/winchester-creatives.webp";
import worldskillsJPG from "../../assets/images/cv/worldskills.jpg";
import worldskillsWebP from "../../assets/images/cv/worldskills.webp";

const Container = styled.main`
	margin: 0 auto;
	max-width: 1100px;
	padding-bottom: 128px;
	padding-top: 64px;

	h2 {
		margin: 0 auto 8px;
	}
`;

const CVIntro = styled.div`
	margin: 0 auto 64px;
	text-align: center;

	h1 {
		margin-top: 0;
	}

	img {
		border-radius: 50%;
		margin-bottom: 32px;
		max-width: 200px;
	}

	p {
		margin-left: auto;
		margin-right: auto;
		max-width: 840px;

		font-size: 18px;
		text-align: left;
	}

	@media screen and (min-width: 576px) {
		margin: 0 auto 64px;
	}
`;

const Timeline = styled.div`
	margin-top: 32px;
	position: relative;
`;

const TimelineControls = styled.div`
	margin-bottom: 32px;
	position: relative;

	text-align: center;

	@media screen and (min-width: 576px) {
		margin-bottom: 64px;

		font-size: 1.6rem;
	}

	button {
		padding: 8px 16px;

		background: none;
		border: 1px solid white;
		border-left: none;
		color: white;
		cursor: pointer;
		font-size: 1.2rem;
		transition: 0.2s all ease;

		&:first-child {
			border: 1px solid white;
			border-radius: 5px 0 0 5px;
		}

		&:last-child {
			border-radius: 0 5px 5px 0;
		}

		&:hover {
			color: rgba(255, 255, 255, 0.6);
		}
	}

	.active {
		background: white;
		color: black;

		&:hover {
			color: black;
		}
	}
`;

const TimelineItem = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin-left: 0;
	padding: 16px;
	position: relative;

	&:before {
		content: "";
		display: block;
		height: 1px;
		right: 0;
		position: absolute;
		top: 0;
		width: 100%;

		background-color: #8367dd;
		transition: 0.2s width ease;
	}

	.chapter__image {
		margin-bottom: 16px;

		@media screen and (min-width: 576px) {
			margin-bottom: 0;
			margin-left: 10%;
			width: 40%;
		}
	}

	.timeline__content {
		@media screen and (min-width: 576px) {
			width: 50%;
		}
	}

	a,
	img {
		display: block;
	}

	@media screen and (min-width: 576px) {
		flex-direction: row;
		padding: 32px;
	}
`;

const Wrapper = styled.section`
	background: #1f2e4b;
	background: -moz-linear-gradient(top, #1f2e4b 0%, #353e75 100%);
	background: -webkit-linear-gradient(top, #1f2e4b 0%, #353e75 100%);
	background: linear-gradient(to bottom, #1f2e4b 0%, #353e75 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f2e4b', endColorstr='#353e75',GradientType=0 );
	color: white;
	min-height: 100vh;
`;

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();

var myTimeline = [
	{
		title: "Freelance Front-end Developer",
		date: "October 2017 - " + monthNames[d.getMonth()] + " " + d.getFullYear(),
		dateTimeline: d,
		description:
			"NoFace is a design agency focused solely on helping local businesses define their identities, and form a holistic brand that will represent their message.",
		event: "NoFace",
		image: nofaceJPG,
		imageWebP: nofaceWebP,
		type: "jobs",
		url: "https://noface.co.uk"
	},
	{
		title: "Front-end Developer & Designer",
		date: "June 2016 - November 2017",
		dateTimeline: new Date("November 1, 2017 03:24:00"),
		description:
			"As a web developer, I was responsible assisting with both the front end designs of websites and helping by using web technologies, front end and back end languages such as HTML, CSS, SCSS.",
		event: "Moov2",
		image: moov2JPG,
		imageWebP: moov2WebP,
		type: "jobs",
		url: "https://moov2.com"
	},
	{
		title: "Front-end Developer & Designer",
		date: "April 2016 - June 2016",
		dateTimeline: new Date("June 1, 2016 03:24:00"),
		description:
			"As a web developer, I was tasked with creating designs for clients and following a structured creative process when generating ideas and solutions. As well as the initial designs, I was also responsible for creating the website applications and interfaces that will be used as an end product.",
		event: "CloudTen",
		image: cloudtenJPG,
		imageWebP: cloudtenWebP,
		type: "jobs",
		url: "https://CloudTenGroup.co.uk"
	},
	{
		title: "Finish What You Started",
		date: "June 2017",
		dateTimeline: new Date("June 6, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Winchester Creatives",
		image: "",
		imageWebP: "",
		type: "talks",
		url: "https://twitter.com/studiorepublic/status/872154777928564737"
	},
	{
		title: "Finish What You Started",
		date: "July 2017",
		dateTimeline: new Date("July 27, 2017 03:24:00"),
		description: "somewhere@gmail.com",
		event: "WPBournemouth",
		image: finish2JPG,
		imageWebP: finish2WebP,
		type: "talks",
		url: "https://twitter.com/WPBournemouth/status/890650202280939520"
	},
	{
		title: "Need for Speed",
		date: "December 2017",
		dateTimeline: new Date("December 11, 2017 03:24:00"),
		description:
			"Waiting for websites to load sucks, right? In this lightning talk, I give a breakdown on how to improve your websites page rendering speeds and time to first meaningful paints without any decrease in quality!",
		event: "Fullstack Hampshire",
		image: needJPG,
		imageWebP: needWebP,
		type: "talks",
		url: "https://twitter.com/whatjackhasmade/status/940646102394724352"
	},
	{
		title: "Offline is the New Online",
		date: "June 2018",
		dateTimeline: new Date("June 20, 2018 03:24:00"),
		description:
			"Jack's talk covers the key benefits of using offline technologies, and why he believes that the next step in progress for web development is a focus on offline applications.",
		event: "Fullstack Hampshire",
		image: offonJPG,
		imageWebP: offonWebP,
		type: "talks",
		url: "https://twitter.com/fullstackhants/status/1009499162742837273"
	},
	{
		title: "Getting Into The Industry",
		date: "Sam",
		dateTimeline: new Date("December 17, 1995 03:24:00"),
		description: "somewhere@gmail.com",
		event: "Solent",
		image: "",
		imageWebP: "",
		type: "talks",
		url: ""
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "October 2018",
		dateTimeline: new Date("October 22, 2018 03:24:00"),
		description:
			"With the rise in the use of mobile devices, there has been a clear divide between native mobile applications and online websites. In this presentation, Jack will demonstrate how both industries can be implemented in an all-in-one solution. What benefits there are to blending the industries and how you can get started today.",
		event: "BCS, Solent University",
		image: pwablendingJPG,
		imageWebP: pwablendingWebP,
		type: "talks",
		url:
			"https://www.eventbrite.co.uk/e/hampshire-branch-progressive-web-applications-blending-industires-registration-50682126605?aff=eand#"
	},
	{
		title: "Progressive Web Applications: Blending Industries",
		date: "November 2018",
		dateTimeline: new Date("November 15, 2018 03:24:00"),
		description:
			"With the rise in the use of mobile devices, there has been a clear divide between native mobile applications and online websites. In this presentation, Jack will demonstrate how both industries can be implemented in an all-in-one solution. What benefits there are to blending the industries and how you can get started today.",
		event: "Developer Southcoast",
		image: "",
		imageWebP: "",
		type: "talks",
		url: "https://www.meetup.com/DeveloperSouthCoast/events/255169865/"
	},
	{
		title: "1st Place - WorldSkills UK",
		date: "March 2013",
		dateTimeline: new Date("March 25, 2013 03:24:00"),
		description:
			"Young people from across Wales descended on Swansea to take part in the all-Wales final to find the most talented students in the field of web design. Hosted by Gower College Swansea and Judged by Industry Experts from the School of Applied Computing, the WorldSkills Web Design Competition is part of a network of tournaments supported by the Welsh Government and the European Social Fund to highlight the importance of developing strong Employment skills.",
		event: "Developer Southcoast",
		image: worldskillsJPG,
		imageWebP: worldskillsWebP,
		type: "awards",
		url:
			"https://uwtsdcomputing.blog/2013/03/25/applied-computing-judges-prestigious-worldskills-competition/"
	}
];

myTimeline = myTimeline.sort((b, a) => a.dateTimeline - b.dateTimeline);

class CV extends Component {
	constructor(props) {
		super(props);
		this.state = { filterActive: 2, timelineFilter: "jobs" };
	}

	handleClick(e, n, t) {
		this.setState(prevState => ({ filterActive: n }));
		this.setState(prevState => ({ timelineFilter: t }));
	}

	render() {
		return (
			<Wrapper>
				<Container className="cv">
					<CVIntro>
						<img src={avatar} alt="Jack Pritchard" />
						<h1>Jack Pritchard</h1>
						<h2>Front-end Website Developer</h2>
						<p>
							I’m a passionate website designer and developer. I want to improve
							how businesses present themselves in the form of brand development
							and design.
						</p>
						<p>
							Born and raise in Swansea, I came to the South of England to
							complete studies in Website Design and Development where I
							graduated with a 1:1 on my undergraduate course.
						</p>
						<p>
							I’ve now continued my studies with a focus on growing my business,
							by continuning my studies on a post-graduate MA Creative
							Enterprise course.
						</p>
						<p>
							My primary focus is website development, specifically front-end
							web technologies and implementing the latest frameworks to create
							bespoke solutions to solve business problems.
						</p>
						<p>
							I have experience in HTML, CSS, SCSS, JavaScript, jQuery, React,
							PHP, WordPress, Gatsby. Although I have experience creating
							bespoke backend systems, my true passion lies in the front-end
							development of websites. Turning designs into functional pages
							that represent brands or enable users to make use of web
							applications.
						</p>
					</CVIntro>
					<TimelineControls>
						<button
							className={this.state.filterActive === 1 ? "active" : null}
							onClick={e => this.handleClick(e, 1, "all")}
						>
							All
						</button>
						<button
							className={this.state.filterActive === 2 ? "active" : null}
							onClick={e => this.handleClick(e, 2, "jobs")}
						>
							Jobs
						</button>
						<button
							className={this.state.filterActive === 3 ? "active" : null}
							onClick={e => this.handleClick(e, 3, "talks")}
						>
							Talks
						</button>
						<button
							className={this.state.filterActive === 4 ? "active" : null}
							onClick={e => this.handleClick(e, 4, "awards")}
						>
							Awards
						</button>
					</TimelineControls>
					<Timeline>
						{myTimeline.map(chapter => (
							<TimelineItem
								key={chapter.dateTimeline}
								className={
									chapter.type !== this.state.timelineFilter ? "hide" : "show"
								}
							>
								<div className="timeline__content">
									<a href={chapter.url} target="_blank">
										<h2>
											{chapter.event} - {chapter.title}
										</h2>
									</a>
									<h3>{chapter.date}</h3>
									<p>{chapter.description}</p>
								</div>
								<div className="chapter__image">
									<a href={chapter.url} target="_blank">
										<Image
											src={chapter.image}
											webp={chapter.imageWebP}
											alt=""
										/>
									</a>
								</div>
							</TimelineItem>
						))}
					</Timeline>
				</Container>
			</Wrapper>
		);
	}
}

export default CV;