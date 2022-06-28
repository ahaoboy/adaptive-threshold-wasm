import { init, toGray, toThreshold } from "../src/index";

async function main() {
  await init();

  const g = toGray([255, 0, 255, 255], 1, 1);
  console.log("g", g);

  const th = toThreshold(g, 1, 1);
  console.log(th)
}   

main();
