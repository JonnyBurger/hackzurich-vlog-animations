import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const SameBenefits: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
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
		>
			<g id="Slide 4:3 - 21">
				<g
					id="Group 9"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(spr(0, true)),
					}}
				>
					<circle id="Ellipse 4" cx="578.5" cy="358.5" r="311.5" fill="white" />
					<text
						id="Same benefits"
						fill="black"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="114.39"
						font-weight="800"
						letter-spacing="0em"
					>
						<tspan x="434.638" y="345.269">
							Same&#10;
						</tspan>
						<tspan x="365.155" y="461.269">
							benefits
						</tspan>
					</text>
				</g>
				<g
					id="Group 10"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(spr(30, true)),
					}}
				>
					<circle id="Ellipse 3" cx="1237" cy="608" r="452" fill="#2221EB" />
					<text
						id="CHF 450.80 saved!"
						fill="white"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="128.39"
						font-weight="800"
						letter-spacing="0em"
					>
						<tspan x="893.395" y="607.687">
							CHF 450.80&#10;
						</tspan>
						<tspan x="1051.88" y="737.687">
							saved
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	);
};
