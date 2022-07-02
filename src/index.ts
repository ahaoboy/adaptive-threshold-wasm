import initWasm from "./wasm";
import { ThresholdType, AdaptiveMethod } from "./type";
export * from "./type";

let wasmModule: any;

export const init = async () => {
  if (!wasmModule) {
    wasmModule = await initWasm();
  }
};

export const toThreshold = (
  rgba: ArrayLike<number>,
  width: number,
  height: number,
  maxValue: number = 255,
  adaptiveMethod: number = AdaptiveMethod.CV_ADAPTIVE_THRESH_MEAN_C,
  thresholdType: number = ThresholdType.CV_THRESH_BINARY,
  blockSize: number = 7,
  C: number = 3
): Uint8ClampedArray => {
  const p = wasmModule._create_buffer(rgba.length);
  wasmModule.HEAP8.set(rgba, p);
  const r = wasmModule._adaptive_threshold(
    p,
    width,
    height,
    maxValue,
    adaptiveMethod,
    thresholdType,
    blockSize,
    C
  );
  const data = new Uint8Array(wasmModule.HEAP8.buffer, r, width * height);
  const output = new Uint8ClampedArray(data);
  wasmModule._destroy_buffer(r);
  wasmModule._destroy_buffer(p);
  return output;
};

export const toGray = (
  rgba: ArrayLike<number>,
  width: number,
  height: number
): Uint8ClampedArray => {
  const p = wasmModule._create_buffer(rgba.length);
  wasmModule.HEAP8.set(rgba, p);
  const r = wasmModule._to_gray(p, width, height);
  const data = new Uint8Array(wasmModule.HEAP8.buffer, r, width * height);
  const output = new Uint8ClampedArray(data);
  wasmModule._destroy_buffer(r);
  wasmModule._destroy_buffer(p);
  return output;
};
