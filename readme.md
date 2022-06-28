## install
```bash
npm i adaptive-threshold-wasm
``` 

## API
```
import { init, toGray, toThreshold, ThresholdType, ThresholdMethod } from "../src/index";

await init();

const gray = toGray(rgba, width, height);

const threshold = toThreshold(gray, width, height, maxValue, adaptiveMethod, thresholdType, blockSize, C);
```
