---
title: Pulsed Ganzfeld
author: Bernhard Lang
tags:
---
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time;

float pulse(float x, float period) {
    return 0.5*sin(PI*x/period) + 0.5;
}

vec3 correct_gamma(vec3 color) {
    return pow(color, vec3(1.0/2.2));
}

vec3 Ganzfeld() {
    return vec3(pulse(u_time, 53.0), pulse(u_time, 59.0) + 0.5, pulse(u_time, 61.0));
}

void main() {
    gl_FragColor = vec4(correct_gamma(Ganzfeld()), 1.0);
}
