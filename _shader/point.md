---
title: Points form from nothing
author: Bernhard Lang
file: point.frag
---
```C
uniform vec2 u_resolution;
uniform float u_time;

float triangle(float x, float pulse_width) {
    return step(0.5, fract(x/pulse_width)) 
           + (-2.0*step(0.5, fract(x/pulse_width))+1.0)
           * fract(2.0*x/pulse_width);
}

void main() {
    float x = 2.0*gl_FragCoord.x/u_resolution.x-1.0;
    float y = 2.0*gl_FragCoord.y/u_resolution.y-1.0;
    
    float duration = 10.0;
    float radius = sqrt(sqrt(x*x+y*y))/2.0;
    float circle = step(0.5, fract(radius+u_time/duration));
    gl_FragColor = vec4(vec3(circle), 1.0);
}
```
