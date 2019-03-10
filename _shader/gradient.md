---
author: Bernhard Lang
title: Linear gradient
file: gradient.frag
---
```C
uniform vec2 u_resolution;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(pos.x);
    gl_FragColor = vec4(color, 1.0);
}
```
