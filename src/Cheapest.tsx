import {interpolate, useVideoConfig} from 'remotion';
import {spring, useCurrentFrame} from 'remotion';
import React from 'react';
import {evolvePath} from '@remotion/paths';

export const Cheapest: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 3) * 3;

	const spr = (delay: number, clamp?: boolean) =>
		spring({
			fps,
			frame: posterizedFrame,
			delay,
			config: clamp ? {damping: 200} : {},
		});

	const path1 = 'M947 544H1268';
	const path2 = 'M317 664H924';

	const evolve1 = evolvePath(spr(30, true), path1);
	const evolve2 = evolvePath(spr(30, true), path2);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 10">
				<rect width="1920" height="1080" fill="#FAFBFE" />
				<text
					id="Always have the cheapest health insurance thanks to AI."
					fill="black"
					xmlSpace="preserve"
					style={{
						whiteSpace: 'pre',
						transform: `translateY(${interpolate(
							spr(8, true),
							[0, 1],
							[height, 0]
						)}px)`,
					}}
					font-family="Lato"
					font-size="82.39"
					font-weight="800"
					letter-spacing="0em"
				>
					<tspan x="317" y="521.385">
						Always have the cheapest&#10;
					</tspan>
					<tspan x="317" y="638.385">
						health insurance thanks to AI.
					</tspan>
				</text>
				<path
					id="Vector 498"
					d={path1}
					stroke="#2221EB"
					stroke-width="5.97826"
					stroke-linejoin="round"
					strokeDasharray={evolve1.strokeDasharray}
					strokeDashoffset={evolve1.strokeDashoffset}
				/>
				<path
					id="Vector 499"
					d={path2}
					stroke="#2221EB"
					stroke-width="5.97826"
					stroke-linejoin="round"
					strokeDasharray={evolve2.strokeDasharray}
					strokeDashoffset={evolve2.strokeDashoffset}
				/>
				<text
					id="Our hack"
					fill="#2221EB"
					xmlSpace="preserve"
					font-family="Lato"
					font-size="49.39"
					font-weight="800"
					letter-spacing="0em"
					style={{
						whiteSpace: 'pre',
						transform: `translateY(${interpolate(
							spr(0, true),
							[0, 1],
							[height, 0]
						)}px)`,
					}}
				>
					<tspan x="317" y="400.614">
						Our hack
					</tspan>
				</text>
			</g>
		</svg>
	);
};
