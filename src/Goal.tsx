import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {noise2D} from '@remotion/noise';

export const Goal: React.FC = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();

	const posterizedFrame = Math.floor(frame / 5) * 5;

	const spr = (delay: number, clamp?: boolean) =>
		spring({
			fps,
			frame: posterizedFrame,
			delay,
			config: clamp ? {damping: 200} : {},
		});

	const textEffect = spr(0, true);
	const textEffect2 = spr(45, true);

	const n = noise2D('hi', 0, posterizedFrame / 100);
	const n2 = noise2D('there', 0, posterizedFrame / 100);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 26">
				<rect width="1920" height="1080" fill="#2221EB" />
				<g
					id="Create technical innovation"
					filter="url(#filter0_d_54_5)"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(textEffect),
						rotate: n * 5 + 'deg',
					}}
				>
					<text
						fill="white"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Mona Sans"
						font-size="112.39"
						font-weight="900"
						letter-spacing="0em"
					>
						<tspan x="302" y="380.071">
							Create technical&#10;
						</tspan>
						<tspan x="302" y="507.071">
							innovation
						</tspan>
					</text>
				</g>
				<g id="40 hours" filter="url(#filter1_d_54_5)">
					<text
						fill="white"
						xmlSpace="preserve"
						font-family="Mona Sans"
						font-size="112.39"
						font-weight="900"
						letter-spacing="0em"
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center center',
							scale: String(textEffect2),
							rotate: n2 * 5 + 'deg',
						}}
					>
						<tspan x="303" y="846.071">
							40 hours
						</tspan>
					</text>
				</g>
				<text
					id="GOAL"
					fill="#00FF1A"
					xmlSpace="preserve"
					font-family="Mona Sans"
					font-size="61.39"
					font-weight="900"
					letter-spacing="0em"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(textEffect),
						rotate: n * 5 + 'deg',
					}}
				>
					<tspan x="303" y="258.93">
						GOAL
					</tspan>
				</text>
				<text
					id="TIME"
					fill="#00FF1A"
					xmlSpace="preserve"
					font-family="Mona Sans"
					font-size="61.39"
					font-weight="900"
					letter-spacing="0em"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(textEffect2),
						rotate: n2 * 5 + 'deg',
					}}
				>
					<tspan x="304" y="703.93">
						TIME
					</tspan>
				</text>
			</g>
			<defs>
				<filter
					id="filter0_d_54_5"
					x="295.473"
					y="291.944"
					width="1083.93"
					height="229.18"
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
					<feGaussianBlur stdDeviation="4.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_54_5"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_54_5"
						result="shape"
					/>
				</filter>
				<filter
					id="filter1_d_54_5"
					x="298.271"
					y="759.068"
					width="577.207"
					height="101.056"
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
					<feGaussianBlur stdDeviation="4.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_54_5"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_54_5"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
