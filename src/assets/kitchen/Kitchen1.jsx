/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 kitchen1.glb
*/

import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Kitchen1 = forwardRef(({ events, props, action, rotate, color }, ref) => {
	const { nodes, materials } = useGLTF('/kitchen1.glb');
	return (
		<group
			dispose={null}
			{...props}
			{...events}
			ref={ref}
			onClick={action}
			rotation-y={rotate}
		>
			<group
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.68}
			>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group
						position={[-0.01, 0.84, 0.02]}
						scale={[0.46, 0.89, 0.36]}
					>
						<mesh
							geometry={nodes.Object_4.geometry}
							material={materials.ChromKuhler}
							position={[1.16, 0, 1.53]}
						/>
						<mesh
							geometry={nodes.Object_5.geometry}
							material={materials.ChromKuhlerDarkk}
							position={[1.16, 0, 1.53]}
						/>
						<mesh
							geometry={nodes.Object_6.geometry}
							material={materials.BlackMetKuhl}
							position={[1.16, 0, 1.53]}
						/>
						<mesh
							geometry={nodes.Object_7.geometry}
							material={materials.SchwarzerGummi}
							position={[1.16, 0, 1.53]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
});

useGLTF.preload('/kitchen1.glb');

export default Kitchen1;
