# 🐕 DogStudio Clone — Interactive 3D Experience

An immersive, responsive, and visually stunning web experience built with **React**, **Three.js (React Three Fiber)**, and **GSAP**. This project is a tribute clone of the famous DogStudio website, featuring a dynamic 3D dog model that animates, rotates, and shifts colors seamlessly as you scroll down the page.

---

## ✨ Features

- **Dynamic 3D Canvas:** Powered by React Three Fiber, featuring a detailed 3D dog model (`dog.drc.glb`) loaded via Draco compression.
- **Custom Shader Transitions (Matcap Materials):** Dynamic matcap swapping on hover utilizing custom GLSL shader overrides (`onBeforeCompile`) to mix textures smoothly based on mouse positioning and screen layout.
- **Scroll-Linked Animations:** High-performance, scrubbed scroll timelines using GSAP and ScrollTrigger to control the model's position, rotation, and scale as the user scrolls.
- **Modern Typography & Glassmorphism UI:** Features premium, customized typefaces and a high-fidelity CSS layout designed to overlay the 3D model elegantly.
- **Z-Index Stacking Layers:** Configured with advanced CSS stacking contexts allowing the 3D model to slide behind specific textual elements while remaining in front of others.

---

## 🛠️ Tech Stack & Dependencies

The project is built on top of **Vite** and **React 19**, utilizing the following key libraries:

### Core 3D & Animation Libraries
| Package | Version | Description |
| :--- | :--- | :--- |
| [**three**](https://threejs.org/) | `^0.184.0` | The core WebGL 3D library |
| [**@react-three/fiber**](https://r3f.docs.pmnd.rs/) | `^9.6.1` | React wrapper/renderer for Three.js |
| [**@react-three/drei**](https://github.com/pmndrs/drei) | `^10.7.7` | Helper utilities, shaders, loaders, and controls for R3F |
| [**gsap**](https://gsap.com/) | `^3.15.0` | Professional-grade JavaScript animations |
| [**@gsap/react**](https://gsap.com/docs/v3/GSAP/gsap.context()) | `^2.1.2` | GSAP hooks wrapper optimized for React lifecycles |

### Environment & Development Tooling
* **Vite** (Next-generation frontend tooling for HMR and builds)
* **React 19** & **React DOM 19**
* **ESLint** (Static code quality analysis)

---
 # 📂 Project Structure

```
├── public/                 # Static assets (3D GLTF models, font files, background patterns)
│   ├── fonts/              # Custom brand typography
│   ├── matcap/             # Matcap texture maps (mat-1 to mat-20)
│   └── models/             # Draco-compressed GLB 3D models (dog.drc.glb)
├── src/
│   ├── components/
│   │   └── Dog.jsx         # 3D canvas loader, shaders (onBeforeCompile), and GSAP timelines
│   ├── App.jsx             # Main site structure (Sections 1-3) & Canvas layout container
│   ├── App.css             # Main styling, custom fonts, flex layouts, transitions & stacking contexts
│   └── main.jsx            # Application entry point
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite build settings & plugins


```