#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time;

float pulse(float x, float period) {
    return 0.5*sin(2.0*PI*x/period) + 0.5;
}

vec3 Ganzfeld() {
    return vec3(pulse(u_time, 53.0), pulse(u_time, 101.0) + 0.5, pulse(u_time, 151.0));
}

void main() {
    gl_FragColor = vec4(Ganzfeld(), 1.0);
}
