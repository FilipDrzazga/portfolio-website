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
    vec3 ambient = vec3(0.1);
    vec2 uv = vUv;

    vec2 uvMask = uv;
    uvMask -= 0.5;
    float textureTopMask = 1.0 - smoothstep(0.8, 0.2, uvMask.y + smoothstep(0.0, 2.5, abs(uvMask.x)));
    float textureRightMask = 1.0 - smoothstep(0.4, 0.2, uvMask.x);
    float finalMask = textureTopMask + textureRightMask;

    vec2 textureUV = coverUV(vUv, u_meshRatio, u_textureRatio);
    vec3 baseTexture = texture2D(u_texture, textureUV).rgb;
    vec3 finalTexture = baseTexture + ambient + finalMask;

    vec3 t = vec3(textureRightMask);

    gl_FragColor = vec4(finalTexture, 1.0);
}