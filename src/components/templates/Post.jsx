import React from "react";
import parse from "html-react-parser";
import { Link } from "gatsby";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { relativePaths } from "../helpers";

import { device } from "../particles/MediaQueries";

import Base from "./Base";

const ArticleIntro = styled.header`
	max-width: 800px;
	margin: 64px auto;
`;

const Article = styled.article`
	/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
	max-width: 800px;
	margin: 64px auto;

	font-size: 2rem;
	line-height: 1.5;

	blockquote {
		display: block;
		padding: 16px 0;
		position: relative;
		margin: 24px 0 36px;

		font-size: 2.25rem;
		font-style: italic;
		outline: none;
		text-align: center;

		color: ${props => props.theme.black};
		quotes: "“" "”" "‘" "’";

		p:last-of-type {
			margin: 0;
		}

		@media ${device.md} {
			margin: 8px 0 24px;

			font-size: 3rem;
		}
	}

	cite {
		position: relative;

		color: ${props => props.theme.grey600};
		font-size: 20px;
		font-style: normal;

		&:before {
			content: "- ";
		}

		@media ${device.md} {
			bottom: 4px;
			position: absolute;
			right: 0;

			color: ${props => props.theme.grey400};
			font-size: 16px;
		}
	}

	figure {
		margin-left: 0;
		margin-right: 0;

		img {
			margin-bottom: 8px;

			box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.05);
		}

		@media ${device.lg} {
			margin-left: -64px;
			margin-right: -64px;
		}
	}

	figcaption {
		padding: 8px;

		background-color: ${props => props.theme.grey100};
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 12px;
		text-align: center;
	}

	li + li {
		margin-top: 8px;
	}

	> * + * {
		margin-top: 16px;
	}

	> h2 + * {
		margin-top: 24px;
	}

	> img + *,
	> figure + * {
		margin-top: 32px;
	}

	> * + h2 {
		margin-top: 64px;
	}

	> * + h3 {
		margin-top: 48px;
	}

	> * + img {
		margin-top: 32px;
	}

	> * + h4 {
		margin-top: 48px;
	}

	> img + img,
	> figure + figure {
		margin-top: 32px;
	}

	> h2 + h3 {
		margin-top: 32px;
	}

	> h3 + h4 {
		margin-top: 32px;
	}

	img,
	picture {
		display: block;
		margin: 48px 0;

		> img {
			margin: 0;
		}
	}

	img {
		height: auto !important;
		width: auto !important;
	}

	pre {
		margin: 32px auto !important;
	}
`;

export default class PostTemplate extends React.Component {
	render() {
		const { content, title } = this.props.pageContext;
		const sanitizedContent = relativePaths(content);

		const elements = parse(sanitizedContent, {
			replace: domNode => {
				if (
					domNode.attribs &&
					domNode.attribs.class &&
					domNode.attribs.class.includes(`wp-block-embed-twitter`)
				) {
					const tweetURL = domNode.children[1].children[0].data;
					const lastPart = tweetURL.split("/").pop();
					const tweetID = lastPart.toString();
					return <TwitterTweetEmbed tweetId={tweetID} />;
				}
			}
		});

		return (
			<Base>
				<ArticleIntro>
					<Link to="/posts">Insights</Link>
					<h1>{title}</h1>
				</ArticleIntro>
				<Article>{elements}</Article>
			</Base>
		);
	}
}
