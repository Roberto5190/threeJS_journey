import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from 'lil-gui'
import gsap from 'gsap'



// Debug
const gui = new GUI()

const debugObject = {}

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
debugObject.color = '#e66565'
const geometry = new THREE.TorusGeometry(1, .25, 32);
const material = new THREE.MeshBasicMaterial({ color: debugObject.color });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);


gui
  .add(torus.position, 'y')
  .min(-3)
  .max(3)
  .step(.01)
  .name('elevation')


gui
  .add(torus, 'visible')

gui 
  .add(torus.material, 'wireframe')

gui
  .addColor(debugObject, 'color')
  .onChange(() => {
    material.color.set(debugObject.color) //enviamos al material.color el debugObject.color cuando cambie
  })

debugObject.spin = () => {
  gsap.to(torus.rotation, {y: torus.rotation.y + Math.PI * 2})
}

gui
  .add(debugObject, 'spin')

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

    // torus.rotation.y = elapsedTime

    // Controls
    controls.update()

    // Render 
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

}

tick()
