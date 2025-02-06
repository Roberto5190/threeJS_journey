import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects GROUP
const group = new THREE.Group()
group.position.y = .5
group.scale.y = .75
group.rotation.y = Math.PI * .75
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -1.5
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 1.5
group.add(cube3)


//Axes Helper
const axesHelper = new THREE.AxesHelper(2) // .AxesHelper(longitud ejes)
scene.add(axesHelper)





// Sizes
const sizes = {
    with: 800,
    height: 600
}



// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.with/sizes.height)
camera.position.z = 3

scene.add(camera)





//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.with, sizes.height)
renderer.render(scene, camera)

