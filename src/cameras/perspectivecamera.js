import Object from '../core/object.js';
import { vec3, mat3, mat4, quat } from 'gl-matrix';
import { glContext } from '../renderer/renderer.js';

class PerspectiveCamera extends Object {
  constructor(fov, ratio, near, far) {
    console.assert(fov && ratio && near && far)

    super();
    this.fov = fov * (Math.PI / 180);
    this.ratio = ratio;
    this.near = near;
    this.far = far;

    this.target = vec3.create();
    this.up = vec3.fromValues(0.0, 1.0, 0.0);
    this.projectionMatrix = mat4.create();
    this.viewMatrix = mat4.create();

    this.position[0] = 0;
    this.position[1] = 0;
    this.position[2] = 50;
  }

  //get projectionMatrix() { return this.projectionMatrix; }
  //get viewMatrix() { return this.viewMatrix; }

  lookAt(dir) {
    vec3.copy(this.target, v);
  }

  update() {
    const gl = glContext();
    mat4.lookAt(this.viewMatrix, this.position, this.target, this.up);
    mat4.perspective(
      this.projectionMatrix,
      this.fov,
      this.ratio,
      this.near,
      this.far
    )
  }
}

export default PerspectiveCamera;