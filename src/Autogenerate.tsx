import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {evolvePath} from '@remotion/paths';

export const Autogenerate: React.FC = () => {
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

	const path1 = 'M1132 605L1584 605';
	const path2 = 'M608 605L937 605';

	const evolve1 = evolvePath(spr(20, true), path1);
	const evolve2 = evolvePath(spr(20, true), path2);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 15">
				<rect width="1920" height="1080" fill="#FAFBFE" />
				<g id="Group 6">
					<text
						id="We understand your current policy"
						fill="black"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="94.39"
						font-weight="800"
						letter-spacing="0em"
					>
						<tspan x="325" y="308.029">
							We understand your current policy
						</tspan>
					</text>
					<path
						id="Vector 500"
						d="M1217 343L1802 343"
						stroke="#2221EB"
						stroke-width="6"
					/>
					<circle id="Ellipse 2" cx="199" cy="272" r="71" fill="#2221EB" />
					<g id="Frame" clip-path="url(#clip0_35_2)">
						<path
							id="Vector"
							d="M235.405 245.91C237.526 248.034 237.526 251.483 235.405 253.607L191.977 297.107C189.856 299.231 186.413 299.231 184.292 297.107L162.578 275.357C160.457 273.233 160.457 269.784 162.578 267.66C164.698 265.536 168.142 265.536 170.263 267.66L188.143 285.553L227.738 245.91C229.858 243.786 233.302 243.786 235.422 245.91H235.405Z"
							fill="white"
						/>
					</g>
				</g>
				<g id="Group 7">
					<text
						id="Find a cheaper but equivalent one"
						fill="black"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="94.39"
						font-weight="800"
						letter-spacing="0em"
					>
						<tspan x="325" y="570.029">
							Find a cheaper but equivalent one
						</tspan>
					</text>
					<path
						id="Vector 500_2"
						strokeDasharray={evolve1.strokeDasharray}
						strokeDashoffset={evolve1.strokeDashoffset}
						d={path1}
						stroke="#2221EB"
						stroke-width="6"
					/>
					<path
						strokeDasharray={evolve2.strokeDasharray}
						strokeDashoffset={evolve2.strokeDashoffset}
						id="Vector 501"
						d={path2}
						stroke="#2221EB"
						stroke-width="6"
					/>
					<circle
						id="Ellipse 2_2"
						cx="199"
						cy="534"
						r="71"
						fill="#2221EB"
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center center',
							scale: String(spr(0, true)),
						}}
					/>
					<g
						id="Frame_2"
						clip-path="url(#clip1_35_2)"
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center center',
							scale: String(spr(0, true)),
						}}
					>
						<path
							id="Vector_2"
							d="M235.405 507.91C237.526 510.034 237.526 513.483 235.405 515.607L191.977 559.107C189.856 561.231 186.413 561.231 184.292 559.107L162.578 537.357C160.457 535.233 160.457 531.784 162.578 529.66C164.698 527.536 168.142 527.536 170.263 529.66L188.143 547.553L227.738 507.91C229.858 505.786 233.302 505.786 235.422 507.91H235.405Z"
							fill="white"
						/>
					</g>
				</g>
				<g id="Group 8">
					<text
						id="Auto-generate all documents"
						fill="black"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="94.39"
						font-weight="800"
						letter-spacing="0em"
					>
						<tspan x="325" y="832.029">
							Auto-generate all documents
						</tspan>
					</text>
					<circle
						id="Ellipse 2_3"
						cx="199"
						cy="796"
						r="71"
						fill="#2221EB"
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center center',
							scale: String(spr(60, true)),
						}}
					/>
					<g
						id="Frame_3"
						clip-path="url(#clip2_35_2)"
						style={{
							transformBox: 'fill-box',
							transformOrigin: 'center center',

							scale: String(spr(60, true)),
						}}
					>
						<path
							id="Vector_3"
							d="M235.405 769.91C237.526 772.034 237.526 775.483 235.405 777.607L191.977 821.107C189.856 823.231 186.413 823.231 184.292 821.107L162.578 799.357C160.457 797.233 160.457 793.784 162.578 791.66C164.698 789.536 168.142 789.536 170.263 791.66L188.143 809.553L227.738 769.91C229.858 767.786 233.302 767.786 235.422 769.91H235.405Z"
							fill="white"
						/>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_35_2">
					<rect
						width="76"
						height="87"
						fill="white"
						transform="translate(161 228)"
					/>
				</clipPath>
				<clipPath id="clip1_35_2">
					<rect
						width="76"
						height="87"
						fill="white"
						transform="translate(161 490)"
					/>
				</clipPath>
				<clipPath id="clip2_35_2">
					<rect
						width="76"
						height="87"
						fill="white"
						transform="translate(161 752)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
