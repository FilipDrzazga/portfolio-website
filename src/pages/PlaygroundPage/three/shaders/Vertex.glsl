varying vec2 vUv;
varying vec3 worldPosition;

uniform float utime;

void main() {
    vec3 pos = position;
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);

    float edgeStart = 0.0;
    float edgeWidth = 200.0;
    float edgeEnd = edgeStart + edgeWidth;

    float vShape = abs(modelPosition.x) * 0.004;
    float uShape = pow(vShape,2.0) * 1.5;
    
    float edgeFactor = smoothstep(edgeStart, edgeEnd, abs(modelPosition.x));

    float blend = mix(uShape, vShape, edgeFactor);
    modelPosition.z += 1.0 - (blend * 200.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
}