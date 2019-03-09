#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float square(float x, float w) {
	return step(0.5, fract(x/w));
}

void main() {
    float x = fract(3.0*gl_FragCoord.x/u_resolution.x);
    float y = fract(3.0*gl_FragCoord.y/u_resolution.y);
    
    float duration = 2.0;
    float s = 0.45 * square(u_time, 2.0*duration) * fract(-u_time/duration)+ 0.05;
	float t = 0.45 * ( square(u_time, 2.0 * duration)) * fract(-u_time/duration) + 0.05;
    float line = step(0.5, x+s) * (1.0 - step(0.5, x-s)) * step(0.5, y+t) * (1.0 - step(0.5, y-t));
    gl_FragColor = vec4(vec3(line), 1.0);
}
