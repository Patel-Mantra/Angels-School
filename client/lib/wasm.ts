// Minimal WASM module with an exported `add(i32, i32) -> i32`
// Binary bytes embedded to avoid external assets.
const wasmBytes = new Uint8Array([
  0x00,0x61,0x73,0x6d,0x01,0x00,0x00,0x00,0x01,0x07,0x01,0x60,0x02,0x7f,0x7f,0x01,0x7f,0x03,0x02,0x01,0x00,0x07,0x07,0x01,0x03,0x61,0x64,0x64,0x00,0x00,0x0a,0x09,0x01,0x07,0x00,0x20,0x00,0x20,0x01,0x6a,0x0b
]);

let addFn: ((a: number, b: number) => number) | null = null;

export async function initWasm() {
  if (addFn) return;
  try {
    const { instance } = await WebAssembly.instantiate(wasmBytes.buffer);
    addFn = (instance.exports.add as unknown) as typeof addFn;
  } catch (e) {
    // no-op fallback, environments without WASM support
    addFn = (a: number, b: number) => a + b;
  }
}

export function wasmAdd(a: number, b: number) {
  if (!addFn) throw new Error("WASM not initialized");
  return addFn(a, b);
}
