/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 living1.glb
*/

import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Living1 = forwardRef(({ events, props, action, rotate, color }, ref) => {
	const { nodes, materials } = useGLTF('/living1.glb');
  return (
    <group
			dispose={null}
			{...props}
			{...events}
			ref={ref}
			onClick={action}
			rotation-y={rotate}
		>
      <mesh 
        geometry={nodes.Object_2.geometry} 
        material={materials['Scene_-_Root']} 
        rotation={[-Math.PI / 2, 0, 1.577]} 
        material-color={color.Sofa ? color.Sofa : null}/>
    </group>
  )
});

useGLTF.preload('/living1.glb');

export default Living1 ;
