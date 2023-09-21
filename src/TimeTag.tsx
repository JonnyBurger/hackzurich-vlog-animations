import {z} from 'zod';
import {spring, useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {noise2D} from '@remotion/noise';
import React from 'react';
import {AbsoluteFill} from 'remotion';

export const timeTagSchema = z.object({
	text: z.string(),
});

export const TimeTag: React.FC<z.infer<typeof timeTagSchema>> = ({text}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 6) * 6;

	const scale =
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
		}) -
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
			delay: 95,
		});

	const scale2 =
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
			delay: 3,
		}) -
		spring({
			fps,
			frame: posterizedFrame,
			config: {
				damping: 200,
			},
			durationInFrames: 15,
			delay: 90,
		});

	const n = noise2D('hi', 0, posterizedFrame / 100);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: 300,
						height: 200,
						backgroundColor: '#00FF1A',
						transform: `scale(${scale}) rotate(${n * 30}deg)`,

						filter: `drop-shadow(0 0 30px rgba(0, 0, 0, 0.5))`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 100,
					color: '#fff',
					fontFamily: 'Mona Sans',
					fontWeight: '900',
					scale: String(scale2),
					filter: `drop-shadow(0 0 30px rgba(0, 0, 0, 0.5))`,
				}}
			>
				<div>{text}</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
