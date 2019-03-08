// Author: Bernhard Lang
// Title: Edge

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    float x = gl_FragCoord.x/u_resolution.x;

    gl_FragColor = vec4(vec3(step(0.5, x)), 1.0);
}
