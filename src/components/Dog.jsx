import { OrbitControls, useAnimations, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { normalMap } from 'three/tsl'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Dog = () => {



    gsap.registerPlugin(ScrollTrigger)


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

    const dogModel = useRef(model)

    useGSAP(()=>{

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#section1',
                endTrigger: '#section3',
                start: 'top top',
                end: 'bottom bottom',
                markers: true,
                scrub: true
            }
        })

        tl
        .to(dogModel.current.scene.position,{
            z: '-=0.9',
            y: '+=0.2'
        })
        .to(dogModel.current.scene.rotation,{
            x: `+=${Math.PI / 15}`
        })
        .to(dogModel.current.scene.rotation,{
            y: `-=${Math.PI}`,
            x:`+=${Math.PI / 20}`
        },'third')
        .to(dogModel.current.scene.position,{
            x: '-=1.2',
            z: '+=0.2',
            y: '+=0.1'
        },'third')
    },[])

    return (
        <>
            <primitive object={model.scene} position={[0.4,-1.2,0]} scale={[2,2,2]} rotation={[0,Math.PI / 4.6 ,0]}/>
            <directionalLight intensity={10} color={0xFFFFFF} position={[0,5,5]} />
        </>
    )
}

export default Dog
