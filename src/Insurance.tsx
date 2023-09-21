import {interpolate, Sequence, Series, spring, useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {noise2D} from '@remotion/noise';

export const Insurance: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 5) * 5;

	const flyIn1 = spring({
		fps,
		frame: posterizedFrame,
		config: {
			damping: 200,
		},
	});

	const translateX = interpolate(flyIn1, [0, 1], [1080, 0]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#00FF1A',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Sequence from={10}>
				<Series>
					<Series.Sequence durationInFrames={35}>
						<h1
							style={{
								color: '#2221EB',
								fontFamily: 'Mona Sans',
								fontSize: 50,
								textAlign: 'center',
								marginTop: 60,
								width: '100%',
							}}
						>
							Emergency law: Government should freeze insurance prices
						</h1>
					</Series.Sequence>
					<Series.Sequence durationInFrames={40}>
						<h1
							style={{
								color: '#2221EB',
								fontFamily: 'Mona Sans',
								fontSize: 50,
								textAlign: 'center',
								marginTop: 60,
								width: '100%',
							}}
						>
							Swiss president: "The cost is higher than expected"
						</h1>
					</Series.Sequence>
					<Series.Sequence durationInFrames={40}>
						<h1
							style={{
								color: '#2221EB',
								fontFamily: 'Mona Sans',
								fontSize: 50,
								textAlign: 'center',
								marginTop: 60,
								width: '100%',
							}}
						>
							Striking increase in premiums
						</h1>
					</Series.Sequence>
					<Series.Sequence durationInFrames={Infinity}>
						<h1
							style={{
								color: '#2221EB',
								fontFamily: 'Mona Sans',
								fontSize: 50,
								textAlign: 'center',
								marginTop: 60,
								width: '100%',
							}}
						>
							8 to 9 percent increase in health insurance premiums
						</h1>
					</Series.Sequence>
				</Series>
			</Sequence>

			<Slide width={1080} img="blick.jpg" />
			<Sequence from={40}>
				<Slide width={1200} img="srf.png" />
			</Sequence>
			<Sequence from={80}>
				<Slide width={1350} img="beobachter.png" />
			</Sequence>
			<Sequence from={120}>
				<Slide width={1200} img="ta.png" />
			</Sequence>
		</AbsoluteFill>
	);
};

const Slide: React.FC<{
	img: string;
	width: number;
}> = ({img, width}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 5) * 5;

	const flyIn1 = spring({
		fps,
		frame: posterizedFrame,
		config: {
			damping: 200,
		},
		durationInFrames: 10,
	});

	const translateX = interpolate(flyIn1, [0, 1], [1080, 0]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				style={{
					width,
					marginTop: 150,
					filter: 'drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5))',
					transform: `translateY(${translateX}px) rotate(${
						5 + noise2D(img, posterizedFrame / 100, 0) * 5
					}deg) scale(${interpolate(posterizedFrame, [0, 100], [1, 0.9])})`,
				}}
				src={staticFile(img)}
			/>
		</AbsoluteFill>
	);
};
