---
title: Transparency
author: Bernhard Lang
file: transparency.frag
---
```GLSL
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    vec2 mouse = u_mouse.xy/u_resolution.xy;
    
    float edge = -pos.y + 4.0*fract(mouse.x/2.0);
    float ed1 = pos.y+0.25;
    float ed2 = pos.y-0.25;
    float col = 1.0 - 
                0.5 *
                smoothstep(edge-1.0/u_resolution.x,
                           edge+1.0/u_resolution.x,
                           pos.x);
    float col1 = 1.0 -
                 smoothstep(ed1-1.0/u_resolution.x,
                            ed1+1.0/u_resolution.x,
                            pos.x);
    float col2 = smoothstep(ed2-1.0/u_resolution.x,
                            ed2+1.0/u_resolution.x,
                            pos.x);
                            
    float anticol = 1.0 - 0.5*col1*col2;
    gl_FragColor = vec4(vec3(col*anticol), 1.0);
}
```
