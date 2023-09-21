import {Composition} from 'remotion';
import {Results2022} from './2022Results';
import {ActualInsurance} from './ActualInsurance';
import {Ai} from './Ai';
import {Autogenerate} from './Autogenerate';
import {Cheapest} from './Cheapest';
import {MyComp} from './Composition';
import {Day3} from './Day3';
import {Dialogue, dialogueSchema} from './Dialogue';
import {Expensive} from './Expensive';
import {Goal} from './Goal';
import {Hackers} from './Hackers';
import {Insurance} from './Insurance';
import {JumpOut, jumpOutSchema} from './JumpOut';
import {NameTag} from './NameTag';
import {NoTime} from './NoTime';
import {OneQuarter} from './OneQuarter';
import {OurFriendChiara} from './OurFriendChiara';
import {OurTeam} from './OurTeam';
import {Overtake} from './Overtake';
import {ProblemsWithAI} from './ProblemsWithAI';
import {Rewind} from './Rewind';
import {SameBenefits} from './SameBenefits';
import {TimeTag, timeTagSchema} from './TimeTag';
import {VideoPlayer} from './VideoPlayer';
import {WinningFormula} from './WinningFormula';
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
				id="VideoPlayer"
				component={VideoPlayer}
				durationInFrames={93 * 30 + 5}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="TimeTag"
				component={TimeTag}
				durationInFrames={200}
				fps={30}
				width={800}
				height={400}
				schema={timeTagSchema}
				defaultProps={{text: 'We'}}
			/>
			<Composition
				id="OneQuarter"
				component={OneQuarter}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				schema={timeTagSchema}
				defaultProps={{text: 'We'}}
			/>
			<Composition
				id="Day3"
				component={Day3}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
				schema={timeTagSchema}
				defaultProps={{text: 'We'}}
			/>
			<Composition
				id="NoTime"
				component={NoTime}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
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
			<Composition
				id="OurFriendChiara"
				component={OurFriendChiara}
				durationInFrames={200}
				fps={30}
				width={1476}
				height={118}
				schema={dialogueSchema}
				defaultProps={{text: 'Yeah yeah,', text2: 'for sure', shaky: true}}
			/>
			<Composition
				id="WinningFormula"
				component={WinningFormula}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Insurance"
				component={Insurance}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="NameTag"
				component={NameTag}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ProblemsWithAI"
				component={ProblemsWithAI}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="ActualInsurance"
				component={ActualInsurance}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="2022Resulsts"
				component={Results2022}
				durationInFrames={1200}
				fps={30}
				width={6972}
				height={3202}
			/>
			<Composition
				id="Overtake"
				component={Overtake}
				durationInFrames={200}
				fps={30}
				width={6972}
				height={3202}
			/>
		</>
	);
};
