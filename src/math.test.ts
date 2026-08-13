import { expect, test } from "vitest";

// test-likely-v3: re-validación abreviada del fix de colapso por SHA. push4.
// Intencionalmente flaky: simula un test inestable real en CI.
// Falla ~30% de las veces porque depende de Math.random().
test("random number is greater than 0.3 (intentionally flaky)", () => {
  expect(Math.random()).toBeGreaterThan(0.3);
});
