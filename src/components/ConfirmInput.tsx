import { Text, useInput } from "tinky";
import { useComponentTheme } from "tinky-theme";
import {
  confirmInputTheme,
  ConfirmInputThemeProps,
} from "../themes/confirm-input-theme.js";

export type ConfirmInputDefaultChoice = "confirm" | "cancel";

export interface ConfirmInputProps {
  /**
   * When disabled, user input is ignored.
   *
   * @default false
   */
  readonly isDisabled?: boolean;

  /**
   * Default choice.
   *
   * @default "confirm"
   */
  readonly defaultChoice?: ConfirmInputDefaultChoice;

  /**
   * Confirm or cancel when user presses enter, depending on the `defaultChoice` value.
   * Can be useful to disable when an explicit confirmation is required, such as pressing "Y" key.
   *
   * @default true
   */
  readonly submitOnEnter?: boolean;

  /**
   * Callback to trigger on confirmation.
   */
  readonly onConfirm: () => void;

  /**
   * Callback to trigger on cancellation.
   */
  readonly onCancel: () => void;
}

export function ConfirmInput({
  isDisabled = false,
  defaultChoice = "confirm",
  submitOnEnter = true,
  onConfirm,
  onCancel,
}: ConfirmInputProps) {
  useInput(
    (input, key) => {
      if (input.toLowerCase() === "y") {
        onConfirm();
      }

      if (input.toLowerCase() === "n") {
        onCancel();
      }

      if (key.return && submitOnEnter) {
        if (defaultChoice === "confirm") {
          onConfirm();
        } else {
          onCancel();
        }
      }
    },
    { isActive: !isDisabled },
  );

  const { styles } = useComponentTheme<ConfirmInputThemeProps>(
    "ConfirmInput",
    confirmInputTheme,
    { isDisabled },
  );

  return (
    <Text {...styles.input}>{defaultChoice === "confirm" ? "Y/n" : "y/N"}</Text>
  );
}
