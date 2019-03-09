// Author: Bernhard Lang
// Title: Linear gradient

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 sRGB(vec3 cl) {
   return step(cl, vec3(0.04045)) * cl / 12.92 + (1.0 - step(cl, vec3(0.04045))) * pow(cl + 0.055, vec3( 2.4) );
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(pos.x);
    gl_FragColor = vec4(sRGB(color), 1.0);
}
