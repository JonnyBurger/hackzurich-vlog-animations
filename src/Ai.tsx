import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {noise2D} from '@remotion/noise';

export const Ai: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 5) * 5;

	const n = noise2D('hi', 0, posterizedFrame / 100);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				backgroundColor: 'white',
			}}
		>
			<g id="Slide 4:3 - 38">
				<rect
					id="Rectangle 5"
					x="236.031"
					y="119.052"
					width="1392"
					height="914"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						translate: '0 -30px',
						rotate: `${String(n * 5)}deg`,
					}}
					fill="#2221EB"
				/>
				<text
					id="Hey"
					fill="white"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="128.68"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="618"
						y="264.227"
						style={{
							opacity: frame < 5 ? 0 : 1,
						}}
					>
						Hey
					</tspan>
				</text>
				<text
					id="guys!"
					fill="white"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="128.68"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="938"
						y="264.227"
						style={{
							opacity: frame < 8 ? 0 : 1,
						}}
					>
						guys!
					</tspan>
				</text>
				<text
					id="We"
					fill="white"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="128.68"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="482"
						y="418.227"
						style={{
							opacity: frame < 35 ? 0 : 1,
						}}
					>
						We
					</tspan>
				</text>
				<text
					id="are"
					fill="white"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="128.68"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="754"
						y="418.227"
						style={{
							opacity: frame < 39 ? 0 : 1,
						}}
					>
						are
					</tspan>
				</text>
				<text
					id="using"
					fill="white"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="128.68"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="1038"
						y="418.227"
						style={{
							opacity: frame < 45 ? 0 : 1,
						}}
					>
						using
					</tspan>
				</text>
				<text
					id="AI"
					fill="#00FF1A"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Mona Sans"
					font-size="508.536"
					font-weight="900"
					letter-spacing="0em"
				>
					<tspan
						x="618"
						y="884.452"
						style={{
							opacity: frame < 55 ? 0 : 1,
						}}
					>
						AI
					</tspan>
				</text>
			</g>
		</svg>
	);
};
