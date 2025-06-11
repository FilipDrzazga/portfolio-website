#ifdef GL_ES
precision highp float;
#endif

varying vec2 vUv;

uniform sampler2D uTexture;
uniform float utime;

void main() {
    vec2 uv = vUv;
    
    vec4 texColor = texture2D(uTexture, uv);

    gl_FragColor = texColor;
}