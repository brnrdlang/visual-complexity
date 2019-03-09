#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    float lum = 0.2*fract(pos.x*2.0) + 0.4;
    gl_FragColor = vec4(vec3(lum), 1.0);
}
