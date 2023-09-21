import {interpolate, spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const OurTeam: React.FC = () => {
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

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				transform: `translateY(${interpolate(
					spr(0, true),
					[0, 1],
					[height, 0]
				)}px)`,
			}}
		>
			<g id="Slide 4:3 - 16">
				<rect width="1920" height="1080" fill="#2221EB" />
				<text
					id="Our team"
					fill="white"
					xmlSpace="preserve"
					style={{
						whiteSpace: 'pre',

						transform: `translateY(${interpolate(
							spr(10, true),
							[0, 1],
							[height, 0]
						)}px)`,
					}}
					font-family="Lato"
					font-size="94.39"
					font-weight="800"
					letter-spacing="0em"
				>
					<tspan x="759" y="576.029">
						Our team
					</tspan>
				</text>
			</g>
		</svg>
	);
};
