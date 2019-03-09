---
title: Pulsed Ganzfeld
author: Bernhard Lang
file: ganzfeld.frag
---
```GLSL
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time;

float pulse(float x, float period) {
    return 0.5*sin(PI*x/period) + 0.5;
}

vec3 sRGB(vec3 cl) {
   return step(cl, vec3(0.04045)) * cl / 12.92 + (1.0 - step(cl, vec3(0.04045))) * pow(cl + 0.055, vec3( 2.4) );
}

vec3 Ganzfeld() {
    return vec3(pulse(u_time, 53.0), pulse(u_time, 59.0) + 0.5, pulse(u_time, 61.0));
}

void main() {
    gl_FragColor = vec4(sRGB(Ganzfeld()), 1.0);
}
```
