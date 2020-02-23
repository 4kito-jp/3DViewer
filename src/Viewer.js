import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

class Viewer extends Component {
  componentDidMount() {

    let API = {
      lightProbeIntensity: 1.0,
      directionalLightIntensity: 1.0,
      diffuse: 0x2f1105,
      emissiveIntensity: 0.0,
      envMapIntensity: 16/100,
      specular : 0x311607,
      reflectivity: 16/100,
      shininess: 35,
    };

    let myWidth = window.innerWidth,
      myHeight = window.innerHeight - 60 * 2;

    let renderer, scene, camera, mesh;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( myWidth, myHeight );
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40, myWidth / myHeight, 1, 1000);
    camera.position.set( 0, 0, 25 );

    let render = () => {
			renderer.render( scene, camera );
    }

    let controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.enablePan = false;

    // probe
    let lightProbe = new THREE.LightProbe();
    scene.add( lightProbe );

    // light
    let directionalLight = [];
    let dirLight;
    dirLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
    dirLight.position.set( -10, 10, 10 );
    directionalLight.push(dirLight);

    dirLight = new THREE.DirectionalLight( 0xffffff, API.directionalLightIntensity );
    dirLight.position.set(  10, 10, -10 );
    directionalLight.push(dirLight);

    for (var i = 0; i < directionalLight.length; i++) {
      scene.add( directionalLight[i] );
    }

    // envmap
    var genCubeUrls = function ( prefix, postfix ) {
      return [
        prefix + 'posx' + postfix, prefix + 'negx' + postfix,
        prefix + 'posy' + postfix, prefix + 'negy' + postfix,
        prefix + 'posz' + postfix, prefix + 'negz' + postfix
      ];
    };

    var urls = genCubeUrls(
      process.env.PUBLIC_URL + '/assets/models/kaen-doki/env/',
      '.jpg'
    );

    let envMapLoaded = (cubeTexture) => {
      cubeTexture.encoding = THREE.sRGBEncoding;
      lightProbe.copy( LightProbeGenerator.fromCubeTexture( cubeTexture ) );

      // 3Dモデルのロード
      var loader = new STLLoader();
      loader.load( process.env.PUBLIC_URL + '/assets/models/kaen-doki/geo/kaendoki_model.stl', function ( geometry ) {
        var material = new THREE.MeshPhongMaterial({
            color: API.diffuse,
            emissive: API.emissive,
            emissiveIntensity: API.emissiveIntensity,
            envMap: cubeTexture,
            reflectivity: API.envMapIntensity,
            shininess : API.shininess,
            specular: API.specular,
        });
        mesh = new THREE.Mesh( geometry, material );
        mesh.scale.set(40,40,40);
        scene.add( mesh );
      } );
    }

    new THREE.CubeTextureLoader().load( urls, envMapLoaded );

    this.mount.appendChild(renderer.domElement);
    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };
    animate();
  }

  render() {
    return (
      <div ref={ref=> (this.mount = ref)} />
    )
  }}

export default Viewer
