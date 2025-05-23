#ifdef GL_ES
precision highp float;
#endif
varying vec2 vUv;

uniform vec2 u_resolution;
uniform sampler2D u_bioImgTexture;
uniform vec2 u_bioTextureDimensions;
uniform float u_scroll;
uniform float u_time;
uniform float u_progress;

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
    float screenAspect = u_resolution.x / u_resolution.y;
    float textureAspect = u_bioTextureDimensions.x / u_bioTextureDimensions.y;

    vec4 backgroundColor = vec4(1.0,1.0,1.0, 1.0);

    vec2 center = vec2(0.5, 0.63);
    vec2 scaledUV = (vUv - center) / 0.65 + center;

    if (screenAspect > textureAspect) {
    float scale = textureAspect / screenAspect;
    scaledUV.y = (scaledUV.y - 0.5) * scale + 0.5;
} else {
    float scale = screenAspect / textureAspect;
    scaledUV.x = (scaledUV.x - 0.5) * scale + 0.5;
}

    float noiseFrequency = 0.95;
    float slowTime = u_time * 0.1;

    float noiseVal = cnoise(scaledUV * noiseFrequency + slowTime);

    vec2 dir = scaledUV - center + vec2(0.0, -5.0) * clamp(u_scroll, 0.0, 1.0);  // smoothly move on scroll

    vec2 stretchedDir = dir * (1.0 + clamp(u_scroll, 0.0, 1.0) * 20.0 * noiseVal);
    vec2 distortedUV = center + stretchedDir;

    // Clamp UV to safe bounds before sampling
    vec2 safeUV = clamp(distortedUV, vec2(0.0), vec2(1.0));

    // Texture-only scale from 1.2 to 1.0 over first 2 seconds
    float textureScale = mix(1.2, 1.0, clamp(u_time /1.0, 0.0, 1.0));

    vec2 scaledSampleUV = (safeUV - center) / textureScale + center;

    vec4 texColor = texture2D(u_bioImgTexture, scaledSampleUV);

    // Optional: use background if UV too far out (mobile precision fallback)
    if (distortedUV.x < 0.0 || distortedUV.x > 1.0 ||
        distortedUV.y < 0.0 || distortedUV.y > 1.0) {
        gl_FragColor = backgroundColor;
    } else {
        gl_FragColor = texColor;
    }
}