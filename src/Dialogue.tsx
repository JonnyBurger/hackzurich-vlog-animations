import {z} from 'zod';
import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {noise2D} from '@remotion/noise';

export const dialogueSchema = z.object({
	text: z.string(),
	text2: z.string(),
	shaky: z.boolean(),
});

const WORD_DURATION = 10;

export const Dialogue: React.FC<z.infer<typeof dialogueSchema>> = ({
	text,
	text2,
	shaky,
}) => {
	const frame = useCurrentFrame();
	const words1 = text.split(' ');
	const words2 = text2.split(' ').filter(Boolean);

	const totalDuration = [...words1, ...words2].length * WORD_DURATION;

	const x = noise2D('x', frame / 10, 0.5) * 10;
	const rotation = noise2D('r', frame / 10, 0.5) * 10;
	const y = noise2D('y', frame / 10, 0.5) * 10;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'Mona Sans',
				fontSize: 60,
				fontWeight: 900,
				lineHeight: 1,
				color: 'white',
				filter: `drop-shadow(0 3px 20px rgba(0, 0, 0, 1))`,
				transform: shaky
					? `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg)`
					: undefined,
				opacity: interpolate(
					frame,
					[totalDuration + 20, totalDuration + 30],
					[1, 0]
				),
			}}
		>
			<Line words={words1} delay={0} />
			{text2 ? (
				<Line words={words2} delay={words1.length * WORD_DURATION} />
			) : null}
		</AbsoluteFill>
	);
};

const Line: React.FC<{
	words: string[];
	delay: number;
}> = ({words, delay}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<div style={{whiteSpace: 'pre'}}>
			{' '}
			{words.map((word, i) => {
				const anim = spring({
					fps,
					frame,
					config: {damping: 200},
					durationInFrames: 4,
					delay: WORD_DURATION * i + delay,
				});

				return (
					<span
						style={{
							display: 'inline-block',
							transform: `scale(${anim}) translateY(${interpolate(
								anim,
								[0, 1],
								[100, 0]
							)}px)`,
						}}
					>
						{word}{' '}
					</span>
				);
			})}
		</div>
	);
};
