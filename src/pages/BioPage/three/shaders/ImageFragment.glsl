#ifdef GL_ES
precision highp float;
#endif
varying vec2 vUv;

uniform float u_meshRatio;
uniform sampler2D u_texture;
uniform float u_textureRatio;

vec2 coverUV(vec2 uv,  float meshRatio, float textureAspect) {

    vec2 newUV = uv - 0.5;

    if (meshRatio > textureAspect) {
        newUV.x *= meshRatio / textureAspect;
    } else {
        newUV.y *= textureAspect / meshRatio;
    }

    newUV += 0.5;
    return newUV;
}

void main() {
    vec3 ambient = vec3(0.005);
    vec2 uv = vUv;

    vec2 uvMask = uv;
    uvMask -= 0.5;
    float bottomMask = 1.0 - smoothstep(0.05, 0.2, uv.y);

    vec2 textureUV = coverUV(vUv, u_meshRatio, u_textureRatio);
    vec3 baseTexture = texture2D(u_texture, textureUV).rgb;
    vec3 finalTexture = baseTexture + ambient + bottomMask;

    // vec3 t = vec3(bottomMask);

    gl_FragColor = vec4(finalTexture, 1.0);
}