/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 living5.glb
*/

import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Living5 = forwardRef(({ events, props, action, rotate, color }, ref) => {
	const { nodes, materials } = useGLTF('/living5.glb');
  return (
    <group
			dispose={null}
			{...props}
			{...events}
			ref={ref}
			onClick={action}
			rotation-y={rotate}
		>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} material-color={color.FirstLeg ? color.FirstLeg : null} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Ash_1} material-color={color.SecondLeg ? color.SecondLeg : null} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Glass_Solid_Grey} material-color={color.Glass ? color.Glass : null} />
      </group>
    </group>
  )
});

useGLTF.preload('/living5.glb');

export default Living5 ;
