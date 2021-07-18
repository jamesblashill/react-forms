import * as React from "react";

type InputElement = Pick<HTMLInputElement, "value">;
function extractTargetValue<T extends InputElement>(event: React.FormEvent<T>) {
  return Promise.resolve(event.currentTarget.value);
}

export const unboxFormEventValue =
  (setValue: (value: string) => void) =>
  (event: React.FormEvent<InputElement>) => {
    extractTargetValue(event).then(setValue);
  };
