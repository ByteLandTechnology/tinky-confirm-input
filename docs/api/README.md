**tinky-confirm-input**

---

# tinky-confirm-input

A confirmation input component for [tinky](https://github.com/ByteLandTechnology/tinky) applications. This component provides a simple "Y/n" or "y/N" prompt to handle user confirmation for critical actions.

## Installation

```bash
npm install tinky-confirm-input
# or
bun add tinky-confirm-input
```

## Usage

```tsx
import React, { useState } from "react";
import { render, Box, Text } from "tinky";
import { ConfirmInput } from "tinky-confirm-input";

function App() {
  const [status, setStatus] = useState("Waiting for confirmation...");

  return (
    <Box flexDirection="column" gap={1}>
      <Text>Are you sure you want to proceed? </Text>
      <Box flexDirection="row" gap={1}>
        <ConfirmInput
          onConfirm={() => setStatus("Confirmed!")}
          onCancel={() => setStatus("Cancelled.")}
        />
      </Box>
      <Text color="blue">{status}</Text>
    </Box>
  );
}

render(<App />);
```

## API

### ConfirmInput

The `ConfirmInput` component accepts the following props:

| Prop | Type | Default | Description |
|Str|Str|Str|Str|
| `onConfirm` | `() => void` | **Required** | Callback triggered when the user confirms (presses "y", "Y", or Enter if default is confirm). |
| `onCancel` | `() => void` | **Required** | Callback triggered when the user cancels (presses "n", "N", or Enter if default is cancel). |
| `defaultChoice` | `"confirm" \| "cancel"` | `"confirm"` | The default choice when the user presses Enter. Displays as "Y/n" (confirm) or "y/N" (cancel). |
| `submitOnEnter` | `boolean` | `true` | Whether pressing Enter triggers the default choice. If `false`, the user must explicitly type "y" or "n". |
| `isDisabled` | `boolean` | `false` | When true, user input is ignored and the component may appear dimmed (depending on theme). |

## Theme Customization

You can customize the appearance of the `ConfirmInput` component using the `tinky-theme` system.

### Default Theme

The default theme is minimal and primarily handles the disabled state:

```typescript
export const confirmInputTheme = {
  styles: {
    input: (props) => ({
      dimColor: props.isDisabled,
    }),
  },
};
```

### Overriding the Theme

You can override the theme by providing a custom theme object to your `ThemeProvider` (if applicable) or by wrapping the component.

```tsx
import { ConfirmInput } from "tinky-confirm-input";

// ... inside your component
<ConfirmInput
// ... props
/>;
```

(Note: Tinky's theme system details would go here, assuming standard Tinky theming practices apply).

## Related Packages

- [tinky](https://github.com/ByteLandTechnology/tinky) - React for CLIs
- [tinky-theme](https://github.com/ByteLandTechnology/tinky-theme) - Theme system for tinky
- [tinky-test](https://github.com/ByteLandTechnology/tinky-test) - Testing utilities for tinky

## Acknowledgments

- [ink-ui](https://github.com/vadimdemedes/ink-ui) - Inspiration for ConfirmInput component by Vadim Demedes

## License

MIT
