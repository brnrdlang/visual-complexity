---
title: White Illusion
author: Bernhard Lang
file: white_illusion.frag
---
```GLSL
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 square(vec2 xy, vec2 pos, vec2 size, vec3 col, vec3 bg) {
	return step(pos.x, xy.x) 
           * (1.0 - step(pos.x+size.x, xy.x))
           * step(pos.y, xy.y)
           * (1.0 - step(pos.y+size.y, xy.y))
           * (col-bg);
}

float triangle(float pulse_width) {
    return step(0.5, fract(u_time/pulse_width)) 
           + (-2.0*step(0.5, fract(u_time/pulse_width))+1.0)
           * fract(2.0*u_time/pulse_width);
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    
    float grey = triangle(15.0);

    vec3 left = square(pos, vec2(5.0/18.0, .25), vec2(1.0/18.0, .5), vec3(grey), vec3(1.0));
    vec3 right = square(pos, vec2(12.0/18.0, .25), vec2(1.0/18.0, .5), vec3(grey), vec3(0.0));
    float wv = step(0.5, fract(9.*pos.x));
    gl_FragColor = vec4(vec3(wv) + left + right, 1.0);
}
```
