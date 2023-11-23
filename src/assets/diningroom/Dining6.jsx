/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 dining6.glb
*/

import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Dining6 = forwardRef(({ events, props, action, rotate, color }, ref) => {
  const { nodes, materials } = useGLTF('/dining6.glb')
  return (
    <group
      dispose={null}
      {...props}
      {...events}
      ref={ref}
      onClick={action}
      rotation-y={rotate}
    >
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Table} material-color={color.Body ? color.Body : null}/>
    </group>
  )
});

useGLTF.preload('/dining6.glb');

export default Dining6;