#ifdef GL_ES
precision highp float;
#endif
varying vec2 vUv;

uniform vec2 u_resolution;
uniform sampler2D u_fbo;
uniform float u_time;
uniform float u_scroll;

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec2 fade(vec2 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  
  vec4 i = permute(permute(ix) + iy);
  
  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  
  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01),
                                   dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

void main() {
    vec2 uv = vUv;
    vec2 distortionUV = vUv;
    distortionUV -= 0.5;
    distortionUV.x *= u_resolution.x / u_resolution.y;
    distortionUV += 0.5;

    float noise =  0.5 * cnoise(vec2(uv.x * 2.0 + u_time * 0.05,uv.y * 2.0 + u_time * 0.05));
    noise +=  0.25 * cnoise(vec2(uv.x * 4.0 + u_time * 0.05,uv.y * 4.0 + u_time * 0.05));
    noise +=  0.02 * cnoise(vec2(uv.x * 8.0 + u_time * 0.05,uv.y * 8.0 + u_time * 0.05));
    
    noise = noise * 0.5 + 0.5; // normalize to [0,1]

    vec2 distortion = distortionUV + vec2(noise - 0.5) * 4.0;

    vec2 mixedUV = mix(uv, distortion, smoothstep(0.0, 0.3, u_scroll));
    vec2 finalUvMix = mix(mixedUV, vec2(noise), clamp(u_scroll, 0.0, 0.6));

    vec3 FboTexture = texture2D(u_fbo, finalUvMix).rgb;
    float alpha = mix(0.8, 0.70, u_scroll);

    gl_FragColor = vec4(FboTexture, alpha);
}