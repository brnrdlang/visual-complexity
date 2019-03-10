---
title: Grating induction
author: Bernhard Lang
file: grating_induction.frag
---
```GLSL
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    
    float strip = (1.0-step(0.48, pos.y)) + step(0.52, pos.y);
    float grad = 0.5 * cos(2.0 * PI * (pos.x - u_time/10.0) * 4.0);
    gl_FragColor = vec4(vec3(grad*strip+0.5), 1.0);
}
```
