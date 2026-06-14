import { OrbitControls, useAnimations, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { normalMap } from 'three/tsl'


const Dog = () => {

    const model = useGLTF('/models/dog.drc.glb')

    useThree(({camera,scene,gl})=>{
        camera.position.z = 1
        gl.toneMapping = THREE.ReinhardToneMapping,
        gl.outputColorSpace = THREE.SRGBColorSpace
    })

    const { actions } = useAnimations(model.animations, model.scene)

    useEffect(()=>{
        actions['Take 001'].play()
    }, [actions])

    const textures = useTexture({

        normalMap:'/dog_normals.jpg',
        branchNormalMap: '/branches_normals.jpg',
        sampleMatCap: '/matcap/mat-2.png',
        branchMatCap: '/branches_diffuse.jpg'
    },(loadedTexture)=>{
        Object.values(loadedTexture).forEach((texture)=>{
            texture.flipY = false;
            texture.colorSpace = THREE.SRGBColorSpace;
        });
    })

    const dogMaterial  = new THREE.MeshMatcapMaterial({
        normalMap:textures.normalMap,
        matcap: textures.sampleMatCap
    })
    
    const branchesMaterial = new THREE.MeshMatcapMaterial({
        normalMap: textures.branchNormalMap,
        matcap: textures.branchMatCap
    })

    model.scene.traverse((child)=>{
        if(child.name.includes("DOG")){
            child.material = dogMaterial
        }

        if(child.name.includes("BRANCHS")){
            child.material = branchesMaterial
        }
    })


    return (
        <>
            <primitive object={model.scene} position={[0.5,-1.2,0]} scale={[2,2,2]} rotation={[0,Math.PI / 4.6 ,0]}/>
            <directionalLight intensity={10} color={0xFFFFFF} position={[0,5,5]} />
        </>
    )
}

export default Dog
