import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {z} from 'zod';

export const jumpOutSchema = z.object({
	text: z.string(),
});

export const JumpOut: React.FC<z.infer<typeof jumpOutSchema>> = ({text}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const jump = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 7,
	});

	const scale = interpolate(jump, [0, 1], [2.5, 1]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					color: 'white',
					filter: `drop-shadow(0 3px 20px rgba(0, 0, 0, 0.5))`,
					fontSize: 200,
					fontFamily: 'Mona Sans',
					fontWeight: 900,
					scale: String(scale),
				}}
			>
				{text}
			</div>
		</AbsoluteFill>
	);
};
