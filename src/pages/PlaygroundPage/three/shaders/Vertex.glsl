varying vec2 vUv;
varying vec3 worldPosition;

uniform float u_time;

void main() {
    vec3 pos = position;


    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

    float frequencyX = 15.0;
    float frequencyY = 8.0;
    float amplitude = 125.0;
    float shift = 100.0;

    float wave = sin((modelPosition.x + shift) * frequencyX * 0.001) * cos(modelPosition.y * frequencyY * 0.001);
    modelPosition.z += wave * amplitude;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
    worldPosition = modelPosition.xyz;
}