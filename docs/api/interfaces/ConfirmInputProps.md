[**tinky-confirm-input**](../README.md)

---

[tinky-confirm-input](../globals.md) / ConfirmInputProps

# Interface: ConfirmInputProps

## Properties

### defaultChoice?

> `readonly` `optional` **defaultChoice**: [`ConfirmInputDefaultChoice`](../type-aliases/ConfirmInputDefaultChoice.md)

Default choice.

#### Default

```ts
"confirm";
```

---

### isDisabled?

> `readonly` `optional` **isDisabled**: `boolean`

When disabled, user input is ignored.

#### Default

```ts
false;
```

---

### onCancel()

> `readonly` **onCancel**: () => `void`

Callback to trigger on cancellation.

#### Returns

`void`

---

### onConfirm()

> `readonly` **onConfirm**: () => `void`

Callback to trigger on confirmation.

#### Returns

`void`

---

### submitOnEnter?

> `readonly` `optional` **submitOnEnter**: `boolean`

Confirm or cancel when user presses enter, depending on the `defaultChoice` value.
Can be useful to disable when an explicit confirmation is required, such as pressing "Y" key.

#### Default

```ts
true;
```
