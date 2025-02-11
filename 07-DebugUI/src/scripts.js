import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Handle resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Handle Fullscreen
window.addEventListener('dblclick', () => {

    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement) {

        if(canvas.requestFullscreen) {
            canvas.requestFullscreen()
        }else if(canvas.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen()
        }

    } else {
        
        document.exitFullscreen()
    }
})


// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.TorusGeometry(1, .25, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);



//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;



// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {

    // Clock
    const elapsedTime = clock.getElapsedTime(1)

    torus.rotation.y = elapsedTime

    // Controls
    controls.update()

    // Render 
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()
