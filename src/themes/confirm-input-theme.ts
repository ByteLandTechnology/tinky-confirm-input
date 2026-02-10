import { type TextProps } from "tinky";
import { type ComponentTheme } from "tinky-theme";

export interface ConfirmInputThemeProps {
  readonly isDisabled: boolean;
}

export const confirmInputTheme = {
  styles: {
    input: (props: ConfirmInputThemeProps): TextProps => ({
      dimColor: props.isDisabled,
    }),
  },
} satisfies ComponentTheme<ConfirmInputThemeProps>;

export type ConfirmInputTheme = typeof confirmInputTheme;
