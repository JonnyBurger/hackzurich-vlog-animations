import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Rewind: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale =
		spring({
			fps,
			frame,
			config: {
				damping: 200,
			},
			durationInFrames: 10,
		}) -
		spring({
			fps,
			frame,
			config: {damping: 200},
			durationInFrames: 10,
			delay: 159,
		}) +
		Math.sin(frame) * 0.02;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<svg
				height="800px"
				width="800px"
				viewBox="0 0 512 512"
				style={{
					filter: `drop-shadow(0 0 30px rgba(0, 0, 0, 0.5))`,
					scale: String(scale),
				}}
			>
				<polygon
					points="512,403.248 268.352,256 512,108.752"
					style={{transform: `translateX(-30px)`}}
					fill="white"
				/>
				<polygon points="243.648,403.248 0,256 243.648,108.752" fill="white" />
			</svg>
		</AbsoluteFill>
	);
};
