import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {noise2D} from '@remotion/noise';

export const Hackers: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const posterizedFrame = Math.floor(frame / 5) * 5;

	const spr = (delay: number, clamp?: boolean) =>
		spring({
			fps,
			frame: posterizedFrame,
			delay,
			config: clamp ? {damping: 200} : {},
		});

	const textEffect = spr(30, true);
	const textEffect2 = spr(45, true);

	const n = noise2D('hi', 0, posterizedFrame / 100);

	return (
		<svg
			width="1920"
			height="1080"
			viewBox="0 0 1920 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Slide 4:3 - 27">
				<rect width="1920" height="1080" fill="#2221EB" />
				<g id="Group 11">
					<circle
						id="Ellipse 5"
						cx="1046.21"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 25"
						cx="1046.21"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 45"
						cx="1046.21"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 65"
						cx="1046.21"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 85"
						cx="1046.21"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 105"
						cx="1046.21"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 125"
						cx="1046.21"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 145"
						cx="1046.21"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 165"
						cx="1046.21"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 185"
						cx="1046.21"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 205"
						cx="1046.21"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 225"
						cx="1046.21"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 245"
						cx="1046.21"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 265"
						cx="1046.21"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 285"
						cx="1046.21"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 305"
						cx="1046.21"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 325"
						cx="1046.21"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 345"
						cx="1046.21"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 365"
						cx="1046.21"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 385"
						cx="1046.21"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 405"
						cx="1046.21"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 425"
						cx="1046.21"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 445"
						cx="1046.21"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 465"
						cx="1046.21"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 485"
						cx="1046.21"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 6"
						cx="1086.56"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 26"
						cx="1086.56"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 46"
						cx="1086.56"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 66"
						cx="1086.56"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 86"
						cx="1086.56"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 106"
						cx="1086.56"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 126"
						cx="1086.56"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 146"
						cx="1086.56"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 166"
						cx="1086.56"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 186"
						cx="1086.56"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 206"
						cx="1086.56"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 226"
						cx="1086.56"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 246"
						cx="1086.56"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 266"
						cx="1086.56"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 286"
						cx="1086.56"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 306"
						cx="1086.56"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 326"
						cx="1086.56"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 346"
						cx="1086.56"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 366"
						cx="1086.56"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 386"
						cx="1086.56"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 406"
						cx="1086.56"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 426"
						cx="1086.56"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 446"
						cx="1086.56"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 466"
						cx="1086.56"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 486"
						cx="1086.56"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 7"
						cx="1126.91"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 27"
						cx="1126.91"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 47"
						cx="1126.91"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 67"
						cx="1126.91"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 87"
						cx="1126.91"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 107"
						cx="1126.91"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 127"
						cx="1126.91"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 147"
						cx="1126.91"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 167"
						cx="1126.91"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 187"
						cx="1126.91"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 207"
						cx="1126.91"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 227"
						cx="1126.91"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 247"
						cx="1126.91"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 267"
						cx="1126.91"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 287"
						cx="1126.91"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 307"
						cx="1126.91"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 327"
						cx="1126.91"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 347"
						cx="1126.91"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 367"
						cx="1126.91"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 387"
						cx="1126.91"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 407"
						cx="1126.91"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 427"
						cx="1126.91"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 447"
						cx="1126.91"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 467"
						cx="1126.91"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 487"
						cx="1126.91"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 8"
						cx="1167.26"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 28"
						cx="1167.26"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 48"
						cx="1167.26"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 68"
						cx="1167.26"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 88"
						cx="1167.26"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 108"
						cx="1167.26"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 128"
						cx="1167.26"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 148"
						cx="1167.26"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 168"
						cx="1167.26"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 188"
						cx="1167.26"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 208"
						cx="1167.26"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 228"
						cx="1167.26"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 248"
						cx="1167.26"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 268"
						cx="1167.26"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 288"
						cx="1167.26"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 308"
						cx="1167.26"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 328"
						cx="1167.26"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 348"
						cx="1167.26"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 368"
						cx="1167.26"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 388"
						cx="1167.26"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 408"
						cx="1167.26"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 428"
						cx="1167.26"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 448"
						cx="1167.26"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 468"
						cx="1167.26"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 488"
						cx="1167.26"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 9"
						cx="1207.6"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 29"
						cx="1207.6"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 49"
						cx="1207.6"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 69"
						cx="1207.6"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 89"
						cx="1207.6"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 109"
						cx="1207.6"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 129"
						cx="1207.6"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 149"
						cx="1207.6"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 169"
						cx="1207.6"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 189"
						cx="1207.6"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 209"
						cx="1207.6"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 229"
						cx="1207.6"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 249"
						cx="1207.6"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 269"
						cx="1207.6"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 289"
						cx="1207.6"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 309"
						cx="1207.6"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 329"
						cx="1207.6"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 349"
						cx="1207.6"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 369"
						cx="1207.6"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 389"
						cx="1207.6"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 409"
						cx="1207.6"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 429"
						cx="1207.6"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 449"
						cx="1207.6"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 469"
						cx="1207.6"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 489"
						cx="1207.6"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 10"
						cx="1247.95"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 30"
						cx="1247.95"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 50"
						cx="1247.95"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 70"
						cx="1247.95"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 90"
						cx="1247.95"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 110"
						cx="1247.95"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 130"
						cx="1247.95"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 150"
						cx="1247.95"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 170"
						cx="1247.95"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 190"
						cx="1247.95"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 210"
						cx="1247.95"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 230"
						cx="1247.95"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 250"
						cx="1247.95"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 270"
						cx="1247.95"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 290"
						cx="1247.95"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 310"
						cx="1247.95"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 330"
						cx="1247.95"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 350"
						cx="1247.95"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 370"
						cx="1247.95"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 390"
						cx="1247.95"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 410"
						cx="1247.95"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 430"
						cx="1247.95"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 450"
						cx="1247.95"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 470"
						cx="1247.95"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 490"
						cx="1247.95"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 11"
						cx="1288.3"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 31"
						cx="1288.3"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 51"
						cx="1288.3"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 71"
						cx="1288.3"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 91"
						cx="1288.3"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 111"
						cx="1288.3"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 131"
						cx="1288.3"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 151"
						cx="1288.3"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 171"
						cx="1288.3"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 191"
						cx="1288.3"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 211"
						cx="1288.3"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 231"
						cx="1288.3"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 251"
						cx="1288.3"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 271"
						cx="1288.3"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 291"
						cx="1288.3"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 311"
						cx="1288.3"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 331"
						cx="1288.3"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 351"
						cx="1288.3"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 371"
						cx="1288.3"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 391"
						cx="1288.3"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 411"
						cx="1288.3"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 431"
						cx="1288.3"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 451"
						cx="1288.3"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 471"
						cx="1288.3"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 491"
						cx="1288.3"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 12"
						cx="1328.65"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 32"
						cx="1328.65"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 52"
						cx="1328.65"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 72"
						cx="1328.65"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 92"
						cx="1328.65"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 112"
						cx="1328.65"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 132"
						cx="1328.65"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 152"
						cx="1328.65"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 172"
						cx="1328.65"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 192"
						cx="1328.65"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 212"
						cx="1328.65"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 232"
						cx="1328.65"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 252"
						cx="1328.65"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 272"
						cx="1328.65"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 292"
						cx="1328.65"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 312"
						cx="1328.65"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 332"
						cx="1328.65"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 352"
						cx="1328.65"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 372"
						cx="1328.65"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 392"
						cx="1328.65"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 412"
						cx="1328.65"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 432"
						cx="1328.65"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 452"
						cx="1328.65"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 472"
						cx="1328.65"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 492"
						cx="1328.65"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 13"
						cx="1369"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 33"
						cx="1369"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 53"
						cx="1369"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 73"
						cx="1369"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 93"
						cx="1369"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 113"
						cx="1369"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 133"
						cx="1369"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 153"
						cx="1369"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 173"
						cx="1369"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 193"
						cx="1369"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 213"
						cx="1369"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 233"
						cx="1369"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 253"
						cx="1369"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 273"
						cx="1369"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 293"
						cx="1369"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 313"
						cx="1369"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 333"
						cx="1369"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 353"
						cx="1369"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 373"
						cx="1369"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 393"
						cx="1369"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 413"
						cx="1369"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 433"
						cx="1369"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 453"
						cx="1369"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 473"
						cx="1369"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 493"
						cx="1369"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 14"
						cx="1409.35"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 34"
						cx="1409.35"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 54"
						cx="1409.35"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 74"
						cx="1409.35"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 94"
						cx="1409.35"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 114"
						cx="1409.35"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 134"
						cx="1409.35"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 154"
						cx="1409.35"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 174"
						cx="1409.35"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 194"
						cx="1409.35"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 214"
						cx="1409.35"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 234"
						cx="1409.35"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 254"
						cx="1409.35"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 274"
						cx="1409.35"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 294"
						cx="1409.35"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 314"
						cx="1409.35"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 334"
						cx="1409.35"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 354"
						cx="1409.35"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 374"
						cx="1409.35"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 394"
						cx="1409.35"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 414"
						cx="1409.35"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 434"
						cx="1409.35"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 454"
						cx="1409.35"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 474"
						cx="1409.35"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 494"
						cx="1409.35"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 15"
						cx="1449.7"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 35"
						cx="1449.7"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 55"
						cx="1449.7"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 75"
						cx="1449.7"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 95"
						cx="1449.7"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 115"
						cx="1449.7"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 135"
						cx="1449.7"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 155"
						cx="1449.7"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 175"
						cx="1449.7"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 195"
						cx="1449.7"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 215"
						cx="1449.7"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 235"
						cx="1449.7"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 255"
						cx="1449.7"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 275"
						cx="1449.7"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 295"
						cx="1449.7"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 315"
						cx="1449.7"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 335"
						cx="1449.7"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 355"
						cx="1449.7"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 375"
						cx="1449.7"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 395"
						cx="1449.7"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 415"
						cx="1449.7"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 435"
						cx="1449.7"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 455"
						cx="1449.7"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 475"
						cx="1449.7"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 495"
						cx="1449.7"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 16"
						cx="1490.05"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 36"
						cx="1490.05"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 56"
						cx="1490.05"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 76"
						cx="1490.05"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 96"
						cx="1490.05"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 116"
						cx="1490.05"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 136"
						cx="1490.05"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 156"
						cx="1490.05"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 176"
						cx="1490.05"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 196"
						cx="1490.05"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 216"
						cx="1490.05"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 236"
						cx="1490.05"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 256"
						cx="1490.05"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 276"
						cx="1490.05"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 296"
						cx="1490.05"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 316"
						cx="1490.05"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 336"
						cx="1490.05"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 356"
						cx="1490.05"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 376"
						cx="1490.05"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 396"
						cx="1490.05"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 416"
						cx="1490.05"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 436"
						cx="1490.05"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 456"
						cx="1490.05"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 476"
						cx="1490.05"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 496"
						cx="1490.05"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 17"
						cx="1530.4"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 37"
						cx="1530.4"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 57"
						cx="1530.4"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 77"
						cx="1530.4"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 97"
						cx="1530.4"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 117"
						cx="1530.4"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 137"
						cx="1530.4"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 157"
						cx="1530.4"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 177"
						cx="1530.4"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 197"
						cx="1530.4"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 217"
						cx="1530.4"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 237"
						cx="1530.4"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 257"
						cx="1530.4"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 277"
						cx="1530.4"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 297"
						cx="1530.4"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 317"
						cx="1530.4"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 337"
						cx="1530.4"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 357"
						cx="1530.4"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 377"
						cx="1530.4"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 397"
						cx="1530.4"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 417"
						cx="1530.4"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 437"
						cx="1530.4"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 457"
						cx="1530.4"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 477"
						cx="1530.4"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 497"
						cx="1530.4"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 18"
						cx="1570.75"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 38"
						cx="1570.75"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 58"
						cx="1570.75"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 78"
						cx="1570.75"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 98"
						cx="1570.75"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 118"
						cx="1570.75"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 138"
						cx="1570.75"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 158"
						cx="1570.75"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 178"
						cx="1570.75"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 198"
						cx="1570.75"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 218"
						cx="1570.75"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 238"
						cx="1570.75"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 258"
						cx="1570.75"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 278"
						cx="1570.75"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 298"
						cx="1570.75"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 318"
						cx="1570.75"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 338"
						cx="1570.75"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 358"
						cx="1570.75"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 378"
						cx="1570.75"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 398"
						cx="1570.75"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 418"
						cx="1570.75"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 438"
						cx="1570.75"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 458"
						cx="1570.75"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 478"
						cx="1570.75"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 498"
						cx="1570.75"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 19"
						cx="1611.1"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 39"
						cx="1611.1"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 59"
						cx="1611.1"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 79"
						cx="1611.1"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 99"
						cx="1611.1"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 119"
						cx="1611.1"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 139"
						cx="1611.1"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 159"
						cx="1611.1"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 179"
						cx="1611.1"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 199"
						cx="1611.1"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 219"
						cx="1611.1"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 239"
						cx="1611.1"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 259"
						cx="1611.1"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 279"
						cx="1611.1"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 299"
						cx="1611.1"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 319"
						cx="1611.1"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 339"
						cx="1611.1"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 359"
						cx="1611.1"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 379"
						cx="1611.1"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 399"
						cx="1611.1"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 419"
						cx="1611.1"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 439"
						cx="1611.1"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 459"
						cx="1611.1"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 479"
						cx="1611.1"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 499"
						cx="1611.1"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 20"
						cx="1651.45"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 40"
						cx="1651.45"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 60"
						cx="1651.45"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 80"
						cx="1651.45"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 100"
						cx="1651.45"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 120"
						cx="1651.45"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 140"
						cx="1651.45"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 160"
						cx="1651.45"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 180"
						cx="1651.45"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 200"
						cx="1651.45"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 220"
						cx="1651.45"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 240"
						cx="1651.45"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 260"
						cx="1651.45"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 280"
						cx="1651.45"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 300"
						cx="1651.45"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 320"
						cx="1651.45"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 340"
						cx="1651.45"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 360"
						cx="1651.45"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 380"
						cx="1651.45"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 400"
						cx="1651.45"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 420"
						cx="1651.45"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 440"
						cx="1651.45"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 460"
						cx="1651.45"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 480"
						cx="1651.45"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 500"
						cx="1651.45"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 21"
						cx="1691.8"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 41"
						cx="1691.8"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 61"
						cx="1691.8"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 81"
						cx="1691.8"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 101"
						cx="1691.8"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 121"
						cx="1691.8"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 141"
						cx="1691.8"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 161"
						cx="1691.8"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 181"
						cx="1691.8"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 201"
						cx="1691.8"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 221"
						cx="1691.8"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 241"
						cx="1691.8"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 261"
						cx="1691.8"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 281"
						cx="1691.8"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 301"
						cx="1691.8"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 321"
						cx="1691.8"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 341"
						cx="1691.8"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 361"
						cx="1691.8"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 381"
						cx="1691.8"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 401"
						cx="1691.8"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 421"
						cx="1691.8"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 441"
						cx="1691.8"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 461"
						cx="1691.8"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 481"
						cx="1691.8"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 501"
						cx="1691.8"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 22"
						cx="1732.15"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 42"
						cx="1732.15"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 62"
						cx="1732.15"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 82"
						cx="1732.15"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 102"
						cx="1732.15"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 122"
						cx="1732.15"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 142"
						cx="1732.15"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 162"
						cx="1732.15"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 182"
						cx="1732.15"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 202"
						cx="1732.15"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 222"
						cx="1732.15"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 242"
						cx="1732.15"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 262"
						cx="1732.15"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 282"
						cx="1732.15"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 302"
						cx="1732.15"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 322"
						cx="1732.15"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 342"
						cx="1732.15"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 362"
						cx="1732.15"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 382"
						cx="1732.15"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 402"
						cx="1732.15"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 422"
						cx="1732.15"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 442"
						cx="1732.15"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 462"
						cx="1732.15"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 482"
						cx="1732.15"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 502"
						cx="1732.15"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 23"
						cx="1772.5"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 43"
						cx="1772.5"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 63"
						cx="1772.5"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 83"
						cx="1772.5"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 103"
						cx="1772.5"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 123"
						cx="1772.5"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 143"
						cx="1772.5"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 163"
						cx="1772.5"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 183"
						cx="1772.5"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 203"
						cx="1772.5"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 223"
						cx="1772.5"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 243"
						cx="1772.5"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 263"
						cx="1772.5"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 283"
						cx="1772.5"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 303"
						cx="1772.5"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 323"
						cx="1772.5"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 343"
						cx="1772.5"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 363"
						cx="1772.5"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 383"
						cx="1772.5"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 403"
						cx="1772.5"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 423"
						cx="1772.5"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 443"
						cx="1772.5"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 463"
						cx="1772.5"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 483"
						cx="1772.5"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 503"
						cx="1772.5"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 24"
						cx="1812.84"
						cy="82.2081"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 44"
						cx="1812.84"
						cy="120.316"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 64"
						cx="1812.84"
						cy="158.423"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 84"
						cx="1812.84"
						cy="196.531"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 104"
						cx="1812.84"
						cy="234.639"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 124"
						cx="1812.84"
						cy="272.746"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 144"
						cx="1812.84"
						cy="310.854"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 164"
						cx="1812.84"
						cy="348.962"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 184"
						cx="1812.84"
						cy="387.069"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 204"
						cx="1812.84"
						cy="425.177"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 224"
						cx="1812.84"
						cy="463.285"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 244"
						cx="1812.84"
						cy="501.392"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 264"
						cx="1812.84"
						cy="539.5"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 284"
						cx="1812.84"
						cy="577.608"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 304"
						cx="1812.84"
						cy="615.715"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 324"
						cx="1812.84"
						cy="653.823"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 344"
						cx="1812.84"
						cy="691.93"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 364"
						cx="1812.84"
						cy="730.038"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 384"
						cx="1812.84"
						cy="768.146"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 404"
						cx="1812.84"
						cy="806.254"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 424"
						cx="1812.84"
						cy="844.361"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 444"
						cx="1812.84"
						cy="882.469"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 464"
						cx="1812.84"
						cy="920.576"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 484"
						cx="1812.84"
						cy="958.685"
						r="11.2081"
						fill="white"
					/>
					<circle
						id="Ellipse 504"
						cx="1812.84"
						cy="996.792"
						r="11.2081"
						fill="white"
					/>
				</g>
				<text
					id="500"
					fill="white"
					font-family="Mona Sans"
					font-size="285.39"
					font-weight="900"
					letter-spacing="0em"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(textEffect),
						rotate: n * 5 + 'deg',
					}}
				>
					<tspan x="141" y="574.326">
						109
					</tspan>
				</text>
				<text
					id="Hackers"
					fill="#00FF1A"
					font-family="Mona Sans"
					font-size="118.39"
					font-weight="900"
					letter-spacing="0em"
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center center',
						scale: String(textEffect2),
						rotate: n * 5 + 'deg',
					}}
				>
					<tspan x="199" y="702.47">
						Teams
					</tspan>
				</text>
			</g>
		</svg>
	);
};
