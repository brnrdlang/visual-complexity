#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    float x = gl_FragCoord.x/u_resolution.x;
    float y = gl_FragCoord.y/u_resolution.y;
    
    gl_FragColor = vec4(vec3(step(0.3*y+0.35, x)), 1.0);
}
