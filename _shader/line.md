---
title: Emerging line
author: Bernhard Lang
file: line.frag
---
```C
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float square(float x, float w) {
	return step(0.5, fract(x/w));
}

void main() {
    float x = gl_FragCoord.x/u_resolution.x;
    float y = gl_FragCoord.y/u_resolution.y;
    
    float duration = 5.0;
    float s = square(u_time, duration) * fract(-u_time/duration)+0.01;
    float func = 0.3*y+0.35;
    float line = 1.0 - smoothstep(func - 1.0/u_resolution.x, func + 1.0/u_resolution.x, x+s) + smoothstep(func - 1.0/u_resolution.x, func + 1.0/u_resolution.x, x-s);
    gl_FragColor = vec4(vec3(line), 1.0);
}
```
