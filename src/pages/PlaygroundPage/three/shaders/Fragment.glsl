#ifdef GL_ES
precision highp float;
#endif

varying vec2 vUv;

uniform sampler2D u_bioImgTexture;
uniform float u_time;

void main() {
    
    vec2 center = vec2(0.5, 0.5);
    vec2 uv = vUv;

    vec4 texColor = texture2D(u_bioImgTexture, uv);

    gl_FragColor = texColor;
}