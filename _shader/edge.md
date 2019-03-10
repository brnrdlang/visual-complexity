---
title: Edge
author: Bernhard Lang
file: edge.frag
---
```GLSL
#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

const float amp = 0.5;
const float duration = 20.0;

void main() {
    float x = gl_FragCoord.x/u_resolution.x;
    float y = gl_FragCoord.y/u_resolution.y;
    
    float edge = 0.150*sin(2.0*PI*y)+0.5;
    float width = amp * sin(2.0*PI*u_time/duration) + amp;
    gl_FragColor = vec4(vec3(smoothstep(edge-width-1.0/u_resolution.x, edge + width + 1.0/u_resolution.x, x)), 1.0);
}
```
