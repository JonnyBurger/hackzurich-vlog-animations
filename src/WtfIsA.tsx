import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {noise2D} from '@remotion/noise';

export const WtfIsA: React.FC = () => {
	const {fps, width} = useVideoConfig();
	const frame = useCurrentFrame();

	const posterizedFrame = Math.floor(frame / 9) * 9;

	const spr = (delay: number, clamp?: boolean) =>
		spring({
			fps,
			frame: posterizedFrame,
			delay,
			config: clamp ? {damping: 200} : {},
		});

	const textEffect = spr(0, true);

	const n = noise2D('hi', 0, posterizedFrame / 100);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 25">
				<rect
					width="1920"
					height="1080"
					fill="#2221EB"
					style={{
						transform: `translateX(${interpolate(
							spr(30, true),
							[0, 1],
							[width, 0]
						)}px)`,
					}}
				/>
				<g
					id="WTF IS A HACKATHON?"
					filter="url(#filter0_d_54_2)"
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
						font-size="130.39"
						font-weight="900"
						letter-spacing="0em"
					>
						<tspan x="971.642" y="507.768">
							{' '}
							IS A&#10;
						</tspan>
						<tspan x="425.061" y="654.768">
							HACKATHON?
						</tspan>
					</text>
					<text
						fill="white"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Mona Sans"
						font-size="130.39"
						font-weight="900"
						letter-spacing="0em"
					>
						<tspan x="549.555" y="507.768">
							WHAT
						</tspan>
					</text>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_54_2"
					x="423.102"
					y="406.772"
					width="1079.75"
					height="262.532"
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
						result="effect1_dropShadow_54_2"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_54_2"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};
