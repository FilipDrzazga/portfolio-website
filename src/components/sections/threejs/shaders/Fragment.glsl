#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUv;

uniform vec2 u_resolution;
uniform sampler2D u_bioImgTexture;
uniform sampler2D u_conactImgTexture;
uniform vec2 u_bioTextureDimensions;
uniform vec2 u_contactTextureDimensions;
uniform vec3 u_backgroundColor;
uniform float u_scroll;
uniform float u_time;
uniform float u_progress;
uniform float u_isScreen;

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
    // Calculate aspect ratios
    float screenAspect = u_resolution.x / u_resolution.y;
    float bioTextureAspect = u_bioTextureDimensions.x / u_bioTextureDimensions.y;
    float contactTextureAspect = u_contactTextureDimensions.x / u_contactTextureDimensions.y;
    float currentTextureAspect = mix(bioTextureAspect, contactTextureAspect, u_scroll);
    
    // Compute a horizontal shrink factor:
    // If the screen is wider than the texture, reduce horizontal scale.
    // 'extraShrink' controls how aggressively to shrink horizontally.
    float extraShrink = 2.5; // Try lower values for more shrink (e.g., 0.3), or higher for less.
    float scaleX = 1.0;
    if (screenAspect > currentTextureAspect) {
        scaleX = (currentTextureAspect / screenAspect) * extraShrink;
    }
    
    // Remap the UVs for non-screen mode by only shrinking horizontally.
    vec2 globalUv = vec2((vUv.x - 0.5) * scaleX + 0.5, vUv.y);
    
    vec2 noiseInput = globalUv + u_scroll * 0.5;
    
    float s0 = smoothstep(0.0, 0.6, u_scroll);
    float s1 = smoothstep(0.7, 1.0, u_scroll);
    float amplitudeScroll = s0 * (1.0 - s1);
    float amplitude = u_progress * (1.0 - u_progress + amplitudeScroll);
    float t = u_time * 0.1;
    
    float baseNoise = abs(cnoise(noiseInput + t) * amplitude + cnoise(noiseInput * 2.0 + t) * amplitude * 5.0);
    float n = baseNoise;
    
    vec3 lighterBackground = clamp(u_backgroundColor + vec3(0.18), 0.0, 1.0);
    
    float mode = step(0.5, u_isScreen);
    
    // Non-screen mode texture mapping
    vec2 uv_nonScreen = (1.0 - n) * globalUv;
    vec4 bioTex_nonScreen = texture2D(u_bioImgTexture, uv_nonScreen);
    vec4 contactTex_nonScreen = texture2D(u_conactImgTexture, uv_nonScreen);
    vec4 mixTex_nonScreen = mix(bioTex_nonScreen, contactTex_nonScreen, u_scroll);
    vec4 finalTex_nonScreen = mix(vec4(lighterBackground, 1.0), mixTex_nonScreen, u_progress);
    finalTex_nonScreen.rgb += n;
    
    // Screen mode texture mapping: apply the same horizontal shrink to the x-component.
    vec2 textureUv_screen = vec2((vUv.x - 0.55) / 0.45, vUv.y);
    textureUv_screen = vec2((textureUv_screen.x - 0.5) * scaleX + 0.5, textureUv_screen.y);
    textureUv_screen = ((textureUv_screen - 0.5) * 1.02) + 0.5;
    
    vec2 uv_screen = (1.0 - n) * textureUv_screen;
    vec4 bioTex_screen = texture2D(u_bioImgTexture, uv_screen);
    vec4 contactTex_screen = texture2D(u_conactImgTexture, uv_screen);
    vec4 mixTex_screen = mix(bioTex_screen, contactTex_screen, u_scroll);
    vec4 finalTex_screen = mix(vec4(lighterBackground, 1.0), mixTex_screen, u_progress);
    finalTex_screen.rgb += n * 0.5;
    
    float leftBlend = smoothstep(0.5, 0.8, vUv.x);
    float rightBlend = 1.0 - smoothstep(0.75, 1.0, vUv.x);
    float blendFactor = leftBlend * rightBlend;
    vec3 finalColor_screen = mix(lighterBackground + n * 0.5, finalTex_screen.rgb, blendFactor);
    
    vec3 finalColor_nonScreen = finalTex_nonScreen.rgb;
    
    // Choose between screen and non-screen output based on the mode.
    vec3 finalColor = mix(finalColor_nonScreen, finalColor_screen, mode);
    gl_FragColor = vec4(finalColor, 1.0);
}


















 