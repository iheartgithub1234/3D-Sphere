let distance = 5;
let backgroundColor = "white";
let shapeColor = "black";
let xSpeed = 5;
let ySpeed = 10;
let xResolution = 20;
let yResolution = 10;
let thickness = 3;

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, distance + 5);
camera.position.z = distance;

const scene = new THREE.Scene();
scene.background = new THREE.Color(backgroundColor);

const geometry = new THREE.SphereGeometry(1, xResolution, yResolution);
const material = new THREE.MeshBasicMaterial({color: shapeColor, wireframe: true});

const wireframeMaterial = new THREE.MeshBasicMaterial({color: shapeColor, wireframe: true, wireframeLinewidth: thickness});
const mesh = new THREE.Mesh(geometry, material);
const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
mesh.add(wireframeMesh);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(time) {
    mesh.rotation.x = time * (xSpeed / 10000);
    mesh.rotation.y = time * (ySpeed / 10000);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);