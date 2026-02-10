import { test, expect, describe } from "vitest";
import { render } from "tinky-test";
import delay from "delay";
import { ConfirmInput } from "../src/index.js";

const enter = "\r";

describe("ConfirmInput", () => {
  test('confirms via "Y"', async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", "Y");
    await delay(50);

    expect(confirmed).toBe(true);
    expect(cancelled).toBe(false);
  });

  test('confirms via "y"', async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", "y");
    await delay(50);

    expect(confirmed).toBe(true);
    expect(cancelled).toBe(false);
  });

  test("confirms via enter key", async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", enter);
    await delay(50);

    expect(confirmed).toBe(true);
    expect(cancelled).toBe(false);
  });

  test('cancels via "N"', async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", "N");
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(true);
  });

  test('cancels via "n"', async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", "n");
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(true);
  });

  test('cancels via enter key with defaultChoice="cancel"', async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        defaultChoice="cancel"
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("y/N");

    await delay(50);
    stdin.emit("data", enter);
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(true);
  });
});

describe("ConfirmInput submitOnEnter", () => {
  test("does not submit on enter when submitOnEnter=false", async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        submitOnEnter={false}
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("Y/n");

    await delay(50);
    stdin.emit("data", enter);
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(false);

    await delay(50);
    stdin.emit("data", "y");
    await delay(50);

    expect(confirmed).toBe(true);
    expect(cancelled).toBe(false);
  });

  test("does not cancel on enter when submitOnEnter=false and defaultChoice=cancel", async () => {
    let confirmed = false;
    let cancelled = false;

    const { lastFrame, stdin } = render(
      <ConfirmInput
        defaultChoice="cancel"
        submitOnEnter={false}
        onConfirm={() => {
          confirmed = true;
        }}
        onCancel={() => {
          cancelled = true;
        }}
      />,
    );

    expect(lastFrame()).toBe("y/N");

    await delay(50);
    stdin.emit("data", enter);
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(false);

    await delay(50);
    stdin.emit("data", "n");
    await delay(50);

    expect(confirmed).toBe(false);
    expect(cancelled).toBe(true);
  });
});
