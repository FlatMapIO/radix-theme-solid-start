Please refactor the following CSS Module code to use Tailwind's @apply directive. Follow these rules:

1. Only refactor simple CSS properties such as display, align-items, white-space, etc.
2. Keep complex properties as native CSS.
3. Important: For properties using var(--css-var), keep them as is, do not attempt to replace with Tailwind classes.
4. Use the @apply directive to apply Tailwind classes, with multiple @apply statements to group different categories of styles.
5. For properties that can't be directly mapped to Tailwind classes, retain the original CSS.

Here are some example conversions:

Original CSS:
.example {
  display: flex;
  align-items: center;
  padding: 10px;
  color: var(--text-color);
  font-size: var(--font-size-base);
  font-weight: bold;
  text-transform: uppercase;
}

Refactored:
.example {
  @apply flex items-center;
  padding: 10px;
  color: var(--text-color);
  font-size: var(--font-size-base);
  @apply font-bold uppercase;
}

Original CSS:
.button {
  display: inline-block;
  white-space: nowrap;
  font-weight: bold;
  background-color: var(--button-bg);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  transition: all 0.3s ease;
}

Refactored:
.button {
  @apply inline-block whitespace-nowrap;
  @apply font-bold text-base;
  background-color: var(--button-bg);
  @apply rounded;
  @apply px-4 py-2;
  transition: all 0.3s ease;
}

Please refactor the provided CSS Module code according to these rules and examples. For each class, use multiple @apply directives to organize different categories of Tailwind classes, keep properties using var() as native CSS, and then retain other non-convertible properties as native CSS. Ensure that the functionality of the code remains unchanged while leveraging Tailwind's advantages as much as possible.