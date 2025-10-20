#ifdef GL_ES
precision highp float;
#endif
varying vec2 vUv;

uniform float u_screenRatio;
uniform sampler2D u_texture;
uniform float u_textureRatio;

vec2 coverUV(vec2 uv,  float screenAspect, float textureAspect) {

    vec2 newUV = uv - 0.5;

    if (screenAspect > textureAspect) {
        newUV.x *= screenAspect / textureAspect;
    } else {
        newUV.y *= textureAspect / screenAspect;
    }

    newUV += 0.5;
    return newUV;
}

void main() {
  vec3 ambient = vec3(0.1);
  vec2 uv = vUv;
  vec2 textureUV = coverUV(vUv, u_screenRatio, u_textureRatio);
  vec3 baseTexture = texture2D(u_texture, textureUV).rgb;
  baseTexture += ambient;

  gl_FragColor = vec4(baseTexture, 1.0);
}