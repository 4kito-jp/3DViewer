import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

class Viewer extends Component {

  constructor(props) {
    super(props)
    this.emitter = this.props.emitter
    this.emitter.addListener(
      'what_is_kaendoki', () => {
        this.camera.position.set(10, -9, 10);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "what_is_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'joumon_culture', () => {
        this.camera.position.set(10, -9, 10);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "what_is_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'village_of_joumon', () => {
        this.camera.position.set(10, -9, 10);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "what_is_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'differences_of_kaendoki', () => {
        this.camera.position.set(10, -9, 10);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "what_is_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'feature_of_kaendoki', () => {
        this.camera.position.set(9, 1, 11);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "feature_of_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'climate_of_joumon', () => {
        this.camera.position.set(9, 1, 11);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "feature_of_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'art_and_kaendoki', () => {
        this.camera.position.set(9, 1, 11);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "feature_of_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'village_of_joumon', () => {
        this.camera.position.set(9, 1, 11);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "feature_of_kaendoki"
        this.rendering();
      }
    )

    this.emitter.addListener(
      'default', () => {
        this.camera.position.set(0, 0, 25);
        this.camera.lookAt(0, 0, 0);
        this.counter = 0.0;
        this.mode = "default"
        this.rendering();
      }
    )

    let myWidth = window.innerWidth, myHeight = window.innerHeight - 60 * 2;


    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( myWidth, myHeight );
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    // this.renderer.gammaFactor = 2.2;

    this.camera = new THREE.PerspectiveCamera(40, myWidth / myHeight, 1, 1000);
    this.camera.position.set(0, 0, 25);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.counter = 0.0;

    this.rotateSpeed = 0.0002;

    this.mode = "default";
  }

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


    let scene = new THREE.Scene();

    let draw = () => {
      this.renderer.render(scene, this.camera);

      if (this.mode === "default") {

      }
      else if (this.mode === "what_is_kaendoki"
        || this.mode === "joumon_culture"
        || this.mode === "village_of_joumon"
      ) {
        this.camera.position.x = 10 * Math.cos(this.counter);
        this.camera.position.z = 10 * Math.sin(this.counter);
        this.camera.lookAt(0, 0, 0);
        this.counter += this.rotateSpeed;
      }
      else if (this.mode === "feature_of_kaendoki"
        || this.mode === 'climate_of_joumon'
        || this.mode === 'art_and_kaendoki') {
        this.camera.position.x = 10 * Math.cos(this.counter);
        this.camera.position.y = 10 * Math.sin(this.counter);
        this.camera.lookAt(0, 0, 0);
        this.counter += this.rotateSpeed;
      }
      else if (this.mode === 'differences_of_kaendoki'
        || this.mode === 'village_of_joumon') {
        this.camera.position.y = 10 * Math.cos(this.counter);
        this.camera.position.z = 10 * Math.sin(this.counter);
        this.camera.lookAt(0, 0, 0);
        this.counter += this.rotateSpeed;
      }
      requestAnimationFrame(draw);
    }

    this.rendering = draw;

    this.controls.minDistance = 10;
    this.controls.maxDistance = 50;
    this.controls.enablePan = false;
    this.controls.autoRotate = true;

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
      process.env.PUBLIC_URL + '/assets/models/kaen-doki/env/', '.jpg'
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
        let mesh = new THREE.Mesh( geometry, material );
        mesh.scale.set(40,40,40);
        scene.add(mesh);

        // 鶏冠状把手
        var geom, mat, sphere;
        geom = new THREE.SphereGeometry(0.3, 32, 32);
        mat = new THREE.MeshBasicMaterial( {color: 0xDD0555} );
        sphere = new THREE.Mesh(geom, mat);
        sphere.position.set(4.5, 5.3, -1)
        scene.add( sphere );

        // 鋸歯状突起
        geom = new THREE.SphereGeometry(0.3, 32, 32);
        mat = new THREE.MeshBasicMaterial( {color: 0x777705} );
        sphere = new THREE.Mesh(geom, mat);
        sphere.position.set(-4.0, 3.5, 0)
        scene.add(sphere);

        // Ｓ字状隆線文
        geom = new THREE.SphereGeometry(0.3, 32, 32);
        mat = new THREE.MeshBasicMaterial( {color: 0x057777} );
        sphere = new THREE.Mesh(geom, mat);
        sphere.position.set(0, -1.2, 3.5)
        scene.add(sphere);


        draw();
      });
    }

    new THREE.CubeTextureLoader().load( urls, envMapLoaded );
    this.mount.appendChild(this.renderer.domElement);
  }

  render() {
    return (
      <div ref={ref=> (this.mount = ref)} />
    )
  }}

export default Viewer
