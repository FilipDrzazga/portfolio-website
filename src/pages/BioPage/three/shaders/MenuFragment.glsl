#ifdef GL_ES
precision highp float;
#endif
varying vec2 vUv;

uniform float u_isOpen;
uniform float u_time;
uniform float u_progress;
uniform float u_direction;

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
    vec3 bgColor = vec3(0.129, 0.063, 0.827);

    uv = uv * 2.0 - 1.0;

    float noise = cnoise(vec2(uv.x * 2.0, uv.y * 2.0));
    noise *= cnoise(vec2(uv.x * 3.0, uv.y * 3.0));

    float boxL = mix(-4.0, 0.0, u_progress);
    float boxR = mix(4.0, 0.0, u_progress);

    float delay = 0.05;

    float smoothBoxL = smoothstep(boxL + noise, boxL * delay + noise, uv.x);
    float smoothBoxR = smoothstep(boxR + noise, boxR * delay + noise, uv.x);

    float alphaMask = smoothBoxL * smoothBoxR;

    float fadeIn = smoothstep(0.0, 0.55, smoothBoxL * smoothBoxR - u_progress);
    
    vec3 col = vec3(fadeIn);
    col += bgColor;

    float alpha = 1.0 - fadeIn;

    

    gl_FragColor = vec4(col, alpha);
}