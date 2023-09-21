import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComp: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = (delay: number, clamp?: boolean) =>
		spring({fps, frame, delay, config: clamp ? {damping: 200} : {}});

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 7" clip-path="url(#clip0_31_9)">
				<rect width="1920" height="1080" fill="#FAFBFE" />
				<text
					id="What do Swiss people worry about most?"
					fill="black"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Lato"
					font-size="68"
					font-weight="800"
					letter-spacing="0em"
				>
					<tspan x="326.287" y="149.316">
						What do Swiss people worry about most?
					</tspan>
				</text>
				<text
					id="Source: Sorgenstudie 2023, Moneyland"
					fill="#5E5E5E"
					xmlSpace="preserve"
					style={{whiteSpace: 'pre'}}
					font-family="Lato"
					font-size="40"
					font-weight="500"
					letter-spacing="0em"
				>
					<tspan x="1168.02" y="1010.48">
						Source: Sorgenstudie 2023, Moneyland
					</tspan>
				</text>
				<g
					id="KKP"
					style={{
						opacity: opacity(100),
					}}
				>
					<text
						id="Health insurance premiums"
						fill="#2221EB"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="40"
						font-weight="500"
						letter-spacing="0em"
					>
						<tspan x="121" y="401.48">
							Health insurance premiums
						</tspan>
					</text>
					<text
						id="56%"
						fill="black"
						xmlSpace="preserve"
						style={{whiteSpace: 'pre'}}
						font-family="Lato"
						font-size="40"
						font-weight="500"
						letter-spacing="0em"
					>
						<tspan x="1384" y="401.48">
							56%
						</tspan>
					</text>
					<rect
						id="Rectangle 2"
						x="632"
						y="362"
						width="719"
						height="48"
						fill="#2221EB"
					/>
				</g>
				<g
					id="Climate change"
					style={{
						opacity: opacity(50),
					}}
				>
					<g id="Group 3">
						<text
							id="Climate Change"
							fill="#5E5E5E"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="121" y="478.48">
								Climate Change
							</tspan>
						</text>
						<text
							id="54%"
							fill="black"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="1369" y="478.48">
								54%
							</tspan>
						</text>
						<rect
							id="Rectangle 2_2"
							x="632"
							y="439"
							width="703"
							height="48"
							fill="#D9D9D9"
						/>
					</g>
				</g>
				<g
					id="Environment"
					style={{
						opacity: opacity(40),
					}}
				>
					<g id="Group 3_2">
						<text
							id="Environment_2"
							fill="#5E5E5E"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="121" y="555.48">
								Environment
							</tspan>
						</text>
						<text
							id="52%"
							fill="black"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="1351" y="555.48">
								52%
							</tspan>
						</text>
						<rect
							id="Rectangle 2_3"
							x="632"
							y="516"
							width="684"
							height="48"
							fill="#D9D9D9"
						/>
					</g>
				</g>
				<g
					id="Ukraine war"
					style={{
						opacity: opacity(30),
					}}
				>
					<g id="Group 3_3">
						<text
							id="Ukraine war_2"
							fill="#5E5E5E"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="121" y="628.48">
								Ukraine war
							</tspan>
						</text>
						<text
							id="51%"
							fill="black"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="1344" y="628.48">
								51%
							</tspan>
						</text>
						<rect
							id="Rectangle 2_4"
							x="632"
							y="589"
							width="674"
							height="48"
							fill="#D9D9D9"
						/>
					</g>
				</g>
				<g
					id="Russia"
					style={{
						opacity: opacity(20),
					}}
				>
					<g id="Group 3_4">
						<text
							id="Russia_2"
							fill="#5E5E5E"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="121" y="701.48">
								Russia
							</tspan>
						</text>
						<text
							id="51%_2"
							fill="black"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="1345" y="701.48">
								51%
							</tspan>
						</text>
						<rect
							id="Rectangle 2_5"
							x="632"
							y="662"
							width="674"
							height="48"
							fill="#D9D9D9"
						/>
					</g>
				</g>
				<g
					id="AHV"
					style={{
						opacity: opacity(10),
					}}
				>
					<g id="Group 3_5">
						<text
							id="Pension scheme"
							fill="#5E5E5E"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="121" y="774.48">
								Pension scheme
							</tspan>
						</text>
						<text
							id="49%"
							fill="black"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="40"
							font-weight="500"
							letter-spacing="0em"
						>
							<tspan x="1316" y="774.48">
								49%
							</tspan>
						</text>
						<rect
							id="Rectangle 2_6"
							x="632"
							y="735"
							width="653"
							height="48"
							fill="#D9D9D9"
						/>
					</g>
				</g>
				<g id="Group 5">
					<g
						id="Group 4"
						style={{
							transform: `scale(${opacity(140)})`,
							transformBox: 'fill-box',
							transformOrigin: 'center center',
						}}
					>
						<circle
							id="Ellipse 1"
							cx="1693.5"
							cy="400.5"
							r="146.5"
							transform="rotate(-17 1693.5 400.5)"
							fill="#2221EB"
						/>
						<text
							id="Switzerlands biggest worry"
							transform="translate(1585.52 404.755) rotate(-17)"
							fill="white"
							xmlSpace="preserve"
							style={{whiteSpace: 'pre'}}
							font-family="Lato"
							font-size="37"
							font-weight="bold"
							letter-spacing="0em"
						>
							<tspan x="0.0219727" y="36.319">
								Switzerlands&#10;
							</tspan>
							<tspan x="45.0435" y="80.319">
								biggest&#10;
							</tspan>
							<tspan x="55.6304" y="124.319">
								worry
							</tspan>
						</text>
						<g id="Frame" clip-path="url(#clip1_31_9)">
							<path
								id="Vector"
								d="M1677.03 298.353L1650.99 306.312C1647.91 307.254 1646.17 310.546 1647.23 313.567C1647.44 314.174 1647.65 314.781 1647.87 315.372L1635.59 319.124C1634.05 319.597 1633.18 321.216 1633.65 322.756C1636.93 333.48 1643.11 339.747 1649.88 343.209C1656.56 346.626 1663.6 347.22 1668.62 347.08C1671.57 347.001 1674.12 348.691 1674.81 350.96C1675.55 353.381 1674.18 355.953 1671.75 356.696L1668.71 357.623C1666.66 358.252 1665.5 360.416 1666.13 362.466C1666.75 364.516 1668.92 365.663 1670.98 365.035L1693.29 358.213C1695.35 357.584 1696.51 355.42 1695.88 353.37C1695.25 351.32 1693.08 350.172 1691.03 350.801L1687.99 351.729C1685.56 352.471 1682.99 351.107 1682.25 348.686C1681.55 346.417 1682.71 343.582 1685.21 342.006C1689.46 339.314 1694.97 334.883 1698.59 328.318C1702.26 321.662 1703.87 313.014 1700.6 302.29C1700.12 300.75 1698.5 299.891 1696.96 300.364L1684.68 304.116C1684.53 303.503 1684.37 302.894 1684.21 302.261C1683.39 299.169 1680.1 297.412 1677.03 298.353ZM1640.19 323.798L1650 320.799C1654.24 330.91 1658.71 337.167 1662.77 341.027C1659.49 340.638 1655.93 339.763 1652.56 338.035C1647.74 335.57 1643.13 331.295 1640.2 323.795L1640.19 323.798ZM1693.48 325.524C1691.65 328.845 1689.19 331.56 1686.68 333.718C1687.89 328.245 1688.1 320.559 1685.96 309.802L1695.77 306.803C1697.53 314.662 1696.1 320.786 1693.49 325.521L1693.48 325.524Z"
								fill="white"
							/>
						</g>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_31_9">
					<rect width="1920" height="1080" fill="white" />
				</clipPath>
				<clipPath id="clip1_31_9">
					<rect
						width="70"
						height="62"
						fill="white"
						transform="translate(1630.54 312.566) rotate(-17)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
