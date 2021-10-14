import React from "react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

import * as THREE from "three";

const Earth = () => {
  const mountRef = useRef(null);
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const positionRef = useRef(MousePosition);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(5, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/globe/earth5.jpeg"),
    });
    const sphere = new THREE.Mesh(geometry, material);
    const group = new THREE.Group();

    group.add(sphere);
    scene.add(group);

    camera.position.z = 12;
    const animate = function () {
      requestAnimationFrame(animate);
      //   sphere.rotation.x += 0.01;
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0005;
      // sphere.rotation.x += 0.0005;
      gsap.to(group.rotation, {
        x: positionRef.current.y * 0.5,
        y: positionRef.current.x * 0.5,
        duration: 2,
      });
    };

    animate();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current.removeChild(renderer.domElement);
      scene.remove(group);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
    positionRef.current = MousePosition;
    // console.log(MousePosition);
  };

  return <div onMouseMove={(e) => handleMouseMove(e)} ref={mountRef}></div>;
};
export default Earth;
