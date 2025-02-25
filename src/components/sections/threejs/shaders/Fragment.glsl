#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUv;

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
  vec2 uv = vUv;
  float n = 0.0;

  // For the initial load, we use a simple noise level based solely on u_progress.
  float amplitudeInitial = u_progress; // increases from 0 to 1 during load

  // For the post-load effect, we compute your scroll-based amplitude.
  float amplitudeScroll = smoothstep(0.0, 0.6, u_scroll) * (1.0 - smoothstep(0.7, 1.0, u_scroll));

  // Interpolate between the two noise modes.
  // When u_progress is 0, amplitude is based on the initial value (0).
  // When u_progress is 1, amplitude is fully determined by the scroll.
  float amplitude = mix(amplitudeInitial, amplitudeScroll, u_progress);

  // Compute noise using the effective amplitude.
  float n1 = amplitude * cnoise(uv * 1.0 + u_time * 0.15);
  float n2 = (amplitude * 5.0) * cnoise(uv * 2.0 + u_time * 0.15);
  n = abs(n1 + n2);
  float sharpN = step(0.4, n);
  n += sharpN;

  // Distort texture coordinates with the noise.
  vec2 distortedUv = (1.0 - n) * uv;
  vec4 bioTexture = texture2D(u_bioImgTexture, distortedUv);
  vec4 contactTexture = texture2D(u_conactImgTexture, distortedUv);

  // Mix textures using the scroll value.
  vec4 textureMix = mix(bioTexture, contactTexture, u_scroll);

  // Fade in from black as u_progress goes from 0 to 1.
  vec4 finalColor = mix(vec4(u_backgroundColor, 1.0), textureMix, u_progress);
  gl_FragColor = finalColor;
}

