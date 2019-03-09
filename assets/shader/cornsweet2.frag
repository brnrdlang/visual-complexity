#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float cornsweet_edge(float x, float width, float amp) {
    return 0.5 + step(0.5-width/2.0, x)*(1.0-step(0.5+width/2.0, x)) * amp * (fract( (x - 0.5) / width )-.5);
}

float square(float x, float w) {
	return step(0.5, fract(x/w));
}

float mask(float x, float width) {
    return 1.0 - square(u_time, 10.0) * (step(0.5 - width/2.0, x)-step(0.5 + width/2.0, x));
}

void main() {
    vec2 pos = gl_FragCoord.xy/u_resolution.xy;
    float lum = cornsweet_edge(pos.x, .4, .1);
    float msk = mask(pos.x, 0.2);

    gl_FragColor = vec4(vec3(msk*lum), 1.0);
}
