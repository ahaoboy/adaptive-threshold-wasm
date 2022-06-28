## install
```bash
npm i adaptive-threshold-wasm
``` 
[![minified](https://badgen.net/bundlephobia/min/adaptive-threshold-wasm)](https://badgen.net/bundlephobia/min/adaptive-threshold-wasm)
[![minified + gzip](https://badgen.net/bundlephobia/minzip/adaptive-threshold-wasm)](https://badgen.net/bundlephobia/minzip/adaptive-threshold-wasm)
[![dependency count](https://badgen.net/bundlephobia/dependency-count/adaptive-threshold-wasm)](https://badgen.net/bundlephobia/dependency-count/adaptive-threshold-wasm)
[![tree-shaking support](https://badgen.net/bundlephobia/tree-shaking/adaptive-threshold-wasm)](https://badgen.net/bundlephobia/tree-shaking/adaptive-threshold-wasm)
[![install size](https://packagephobia.com/badge?p=adaptive-threshold-wasm)](https://packagephobia.com/result?p=adaptive-threshold-wasm)


## API
```
import { init, toGray, toThreshold, ThresholdType, ThresholdMethod } from "../src/index";

await init();

const gray = toGray(rgba, width, height);

const threshold = toThreshold(gray, width, height, maxValue, adaptiveMethod, thresholdType, blockSize, C);
```
