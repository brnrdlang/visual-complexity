#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    float x = gl_FragCoord.x/u_resolution.x;
    float y = gl_FragCoord.y/u_resolution.y;
    
    float func = 0.3*y+0.35;
    float line = 1.0 - step(func, x+0.01) + step(func, x-0.01);
    gl_FragColor = vec4(vec3(line), 1.0);
}
