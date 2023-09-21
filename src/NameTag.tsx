import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {noise2D} from '@remotion/noise';

export const NameTag: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const posterizedFrame = Math.floor(frame / 6) * 6;

	const spr = (delay: number) =>
		spring({
			fps,
			frame: posterizedFrame,
			delay,
			config: {damping: 200},
		});

	const n = noise2D('hi', 0, posterizedFrame / 100);

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${1 - spr(90)})`,
				filter: 'drop-shadow(0px 0px 60px rgba(0, 0, 0, 0.55))',
			}}
		>
			<AbsoluteFill>
				<svg
					width="1920"
					height="1080"
					viewBox="0 0 1920 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Slide 4:3 - 58" clip-path="url(#clip0_80_1248)">
						<rect
							id="Rectangle 10"
							x="714.961"
							y="161.026"
							width="690.064"
							height="690.064"
							style={{
								transformOrigin: 'center center',
								transformBox: 'fill-box',
								transform: `scale(${spr(0)})rotate(${n * 10 - 36}deg)`,
							}}
							fill="#00FF1A"
						/>

						<text
							id="SILVAN"
							fill="white"
							xmlSpace="preserve"
							style={{
								whiteSpace: 'pre',
								transformOrigin: 'center center',
								transformBox: 'fill-box',
								transform: `scale(${spr(0)})`,
							}}
							font-family="Mona Sans"
							font-size="231.68"
							font-weight="900"
							letter-spacing="0em"
						>
							<tspan x="809" y="455.979">
								MEHMET
							</tspan>
						</text>
						<g id="AI bro">
							<text
								fill="#2221EB"
								xmlSpace="preserve"
								font-family="Mona Sans"
								font-size="89.68"
								font-weight="900"
								letter-spacing="0em"
								style={{
									whiteSpace: 'pre',
									transformOrigin: 'center center',
									transformBox: 'fill-box',
									transform: `scale(${spr(5)})`,
								}}
							>
								<tspan x="822" y="580.884">
									My co-founder
								</tspan>
							</text>
						</g>
						<g id="wedding tomorrow">
							<text
								fill="#2221EB"
								xmlSpace="preserve"
								style={{
									whiteSpace: 'pre',
									transformOrigin: 'center center',
									transformBox: 'fill-box',
									transform: `scale(${spr(10)})`,
								}}
								font-family="Mona Sans"
								font-size="89.68"
								font-weight="900"
								letter-spacing="0em"
							>
								<tspan x="822" y="681.884">
									at Remotion{' '}
								</tspan>
							</text>
						</g>
					</g>
					<defs>
						<filter
							id="filter0_d_80_1248"
							x="817.555"
							y="515.623"
							width="638.367"
							height="74.2739"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_80_1248"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_80_1248"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_d_80_1248"
							x="818"
							y="616.623"
							width="962.391"
							height="89.2505"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_80_1248"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_80_1248"
								result="shape"
							/>
						</filter>
						<clipPath id="clip0_80_1248">
							<rect width="1920" height="1080" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					src={staticFile('met.jpeg')}
					style={{
						width: 602,
						marginLeft: 150,
						marginTop: 148,
						whiteSpace: 'pre',
						transformOrigin: 'center center',
						transformBox: 'fill-box',
						transform: `scale(${spr(10)})`,
					}}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
