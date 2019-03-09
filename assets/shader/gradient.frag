// Author: Bernhard Lang
// Title: Linear gradient

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(pos.x);
    gl_FragColor = vec4(color, 1.0);
}
