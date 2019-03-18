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

vec3 edge(vec2 pos, vec3 cl_left, vec3 cl_right) {
    float ed = -0.3*pos.y+0.65;
    return (cl_right - cl_left)
           * smoothstep(ed-1.0/u_resolution.x, ed+1.0/u_resolution.x, pos.x)
           + cl_left;
}

float triangle(float pulse_width) {
    return step(0.5, fract(u_time/pulse_width)) 
           + (-2.0*step(0.5, fract(u_time/pulse_width))+1.0)
           * fract(2.0*u_time/pulse_width);
}

void main() {
    vec2 mx = u_resolution.xy/min(u_resolution.x, u_resolution.y);
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    
    vec3 bg_left = vec3(0.25);
    vec3 bg_right = vec3(0.75);
    vec3 sq_col = vec3(triangle(60.0));
	float size = 0.2;
    
    vec3 sq_left = square(pos,
                          vec2(0.25,0.25)-vec2(size/2.0)/mx,
                          vec2(size)/mx,
                          sq_col,
                          bg_left);
    vec3 sq_right = square(pos,
                           vec2(0.750,0.750)-vec2(size/2.0)/mx,
                           vec2(size)/mx,
                           sq_col,
                           bg_right);
    
    vec3 bg = edge(pos, bg_left, bg_right);
    
    gl_FragColor = vec4(bg + sq_left + sq_right, 1.0);
}
