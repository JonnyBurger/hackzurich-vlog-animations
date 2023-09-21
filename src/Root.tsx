import {Composition} from 'remotion';
import {Ai} from './Ai';
import {Autogenerate} from './Autogenerate';
import {Cheapest} from './Cheapest';
import {MyComp} from './Composition';
import {Dialogue, dialogueSchema} from './Dialogue';
import {Expensive} from './Expensive';
import {Goal} from './Goal';
import {Hackers} from './Hackers';
import {JumpOut, jumpOutSchema} from './JumpOut';
import {OurTeam} from './OurTeam';
import {Rewind} from './Rewind';
import {SameBenefits} from './SameBenefits';
import {TimeTag, timeTagSchema} from './TimeTag';
import {WtfIsA} from './WtfIsA';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComp}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Expensive"
				component={Expensive}
				durationInFrames={200}
				fps={30}
				width={1920 / 2}
				height={1080}
			/>
			<Composition
				id="Cheapest"
				component={Cheapest}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Autogenerate"
				component={Autogenerate}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="OurTeam"
				component={OurTeam}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SameBenefits"
				component={SameBenefits}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Wtf"
				component={WtfIsA}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Goal"
				component={Goal}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Hackers"
				component={Hackers}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Ai"
				component={Ai}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Rewind"
				component={Rewind}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="JumpOut"
				component={JumpOut}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				schema={jumpOutSchema}
				defaultProps={{text: 'We'}}
			/>
			<Composition
				id="TimeTag"
				component={TimeTag}
				durationInFrames={200}
				fps={30}
				width={600}
				height={400}
				schema={timeTagSchema}
				defaultProps={{text: 'We'}}
			/>
			<Composition
				id="Dialogue"
				component={Dialogue}
				durationInFrames={200}
				fps={30}
				width={600}
				height={400}
				schema={dialogueSchema}
				defaultProps={{text: 'Yeah yeah,', text2: 'for sure', shaky: true}}
			/>
		</>
	);
};
