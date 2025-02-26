#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUv;

uniform vec2 u_resolution;
uniform sampler2D u_bioImgTexture;
uniform sampler2D u_conactImgTexture;
uniform vec3 u_backgroundColor;
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
    // Get screen and texture aspect ratios
  float screenAspect = u_resolution.x / u_resolution.y;
  float textureAspect = 9.0 / 16.; // Match your texture aspect ratio

  vec2 uv = vUv;
  float aspectFix = screenAspect / textureAspect;
  float zoomFactor = 0.85; // Slightly zoom the texture to fill top/bottom

  vec2 scale = vec2(
        mix(zoomFactor, aspectFix * zoomFactor, step(textureAspect, screenAspect)), 
        mix(zoomFactor, (1.0 / aspectFix) * zoomFactor, step(screenAspect, textureAspect))
  );
  uv = (vUv - 0.5) * scale + 0.5;

// Cache smoothstep calculations to avoid redundancy
  float s0 = smoothstep(0.0, 0.6, u_scroll);
  float s1 = smoothstep(0.7, 1.0, u_scroll);
  float amplitudeScroll = s0 * (1.0 - s1);
  // Replace mix(u_progress, amplitudeScroll, u_progress) with an equivalent expression
  float amplitude = u_progress * (1.0 - u_progress + amplitudeScroll);

  // Precompute the time factor once
  float t = u_time * 0.15;
  // Combine noise calculations
  float baseNoise = abs(cnoise(uv + t) * amplitude + cnoise(uv * 2.0 + t) * amplitude * 5.0);
  // Add a sharp threshold effect
  float n = baseNoise + step(0.4, baseNoise);

  // Distort UV coordinates based on the computed noise
  vec2 distortedUv = (1.0 - n) * uv;

  // Sample textures and blend them using the scroll value
  vec4 bioTexture = texture2D(u_bioImgTexture, distortedUv);
  vec4 contactTexture = texture2D(u_conactImgTexture, distortedUv);
  vec4 textureMix = mix(bioTexture, contactTexture, u_scroll);

  // Fade in from the background color based on u_progress
  vec4 finalColor = mix(vec4(u_backgroundColor, 1.0), textureMix, u_progress);
  gl_FragColor = finalColor;
}

