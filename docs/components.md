Generate corresponding cva (class-variance-authority) component functions, slots, and attrs based on the styles defined in the provided CSS module file. Follow these examples and rules:

Example 1 (Callout component):

```tsx
import { cva } from 'class-variance-authority'
import styles from './callout.module.css'

export const calloutVariants = {
  root: cva(styles['rt-CalloutRoot'], {
    variants: {
      highContrast: {
        true: styles['rt-high-contrast'],
      },
      variant: {
        soft: styles['rt-variant-soft'],
        surface: styles['rt-variant-surface'],
        outline: styles['rt-variant-outline'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  icon: styles['rt-CalloutIcon'],
}

export const calloutAttrs = (props: {
  highlighted?: boolean
  accentColor?: string
}) => ({
  'data-highlighted': props.highlighted ? true : undefined,
  'data-accent-color': props.accentColor,
})
```

Example 2 (Code component):

```tsx
import { cva } from 'class-variance-authority'
import styles from './code.module.css'

export const codeVariants = cva(styles['rt-Code'], {
  variants: {
    variant: {
      ghost: styles['rt-variant-ghost'],
      soft: styles['rt-variant-soft'],
      solid: styles['rt-variant-solid'],
      outline: styles['rt-variant-outline'],
    },
    size: {
      '1': styles['rt-r-size-1'],
      '2': styles['rt-r-size-2'],
      // ... other sizes
    },
  },
})

export const codeAttrs = (props: {
  state?: 'active' | 'inactive'
}) => ({
  'data-state': props.state,
})
```

Example 3 (BaseMenu component):

```tsx
import { cva } from 'class-variance-authority'
import styles from './base-menu.module.css'

export const baseMenuVariants = {
  root: cva(styles['rt-BaseMenu'], {
    variants: {
      variant: {
        default: styles['rt-variant-default'],
        compact: styles['rt-variant-compact'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
      },
    },
  }),
  item: styles['rt-BaseMenuItem'],
  itemInner: styles['rt-BaseMenuItemInner'],
}

export const baseMenuAttrs = (props: {
  highlighted?: boolean
  orientation?: 'vertical' | 'horizontal'
}) => ({
  root: {
    'data-orientation': props.orientation,
  },
  item: {
    'data-highlighted': props.highlighted ? '' : undefined,
  }
})
```

Example 4 (TextField component):

```tsx
import { cva } from 'class-variance-authority'
import styles from './text-field.module.css'

export const textFieldVariants = {
  root: cva(styles['rt-TextFieldRoot'], {
    variants: {
      variant: {
        surface: styles['rt-variant-surface'],
        classic: styles['rt-variant-classic'],
        soft: styles['rt-variant-soft'],
      },
      size: {
        '1': styles['rt-r-size-1'],
        '2': styles['rt-r-size-2'],
        '3': styles['rt-r-size-3'],
      },
    },
  }),
  input: styles['rt-TextFieldInput'],
  slot: styles['rt-TextFieldSlot'],
}

export const textFieldAttrs = (props: {
  side?: 'left' | 'right';
  accentColor?: string;
  autoFilled?: boolean;
}) => ({
  input: {
    'data-com-onepassword-filled': props.autoFilled ? '' : undefined,
  },
  slot: {
    'data-side': props.side,
    'data-accent-color': props.accentColor,
  },
})

Rules:

1. Analyze the CSS class name prefixes to identify the main parts of the component (e.g., root, trigger, etc.).
2. For the root part:
   a. Use the cva function to create variants.
   b. The base class should be the main class of the component (e.g., 'rt-BaseTabList').
   c. Identify the true variants, such as highContrast, size, etc.
   d. Provide the corresponding CSS classes for each variant.
3. For other parts (e.g., trigger, triggerInner), use the cva function or directly use the corresponding CSS class as needed.
4. Distinguish between true variants and styles controlled by data attributes:
   a. True variants should be defined in the variants object of the cva function.
   b. Styles controlled by data attributes (e.g., [data-state], [data-orientation], etc.) should not be treated as variants, but rather handled in the attrs function.
5. Maintain an organization similar to the original CSS structure, ensuring that all styles are correctly mapped.
6. Write the output in TypeScript and import the necessary dependencies (e.g., cva and CSS module).
7. Organize the generated code into an object named componentNameVariants, containing all relevant cva functions and classes.
8. Generate an attrs function to handle all data attributes for the component.
9. In the attrs function, analyze all data attributes used in the CSS and generate the corresponding data attributes based on the component's props.
10. Ensure the attrs function returns an object containing all data attributes that need to be set.
11. For styles controlled by data attributes (e.g., [data-state], [data-orientation], etc.), ensure they are correctly set in the attrs function, rather than being treated as cva variants.
12. In rare cases, data-* attributes can only be placed on child elements, such as the selected item in a menu/select component having a child-specific data-highlighted attribute. In such cases, generate attrs functions with slot names, e.g., baseMenuAttrs.
13. In generating attrs functions, only focus on the data-* attributes actually used in the CSS. Do not include standard DOM properties (like disabled, readOnly), which should be handled directly in the component.
14. Carefully analyze the selectors in the CSS file, especially those using complex selectors like :where() and :has(). Ensure you understand the meaning and corresponding attributes of these selectors.
15. For special data-* attributes (like data-com-onepassword-filled), note how they are used in the CSS. Some may need to be set to an empty string instead of true.
16. When generating attrs functions, ensure the returned object structure matches the component's hierarchy. For example, if some attributes only apply to specific child elements, place them in the corresponding nested objects.
17. When analyzing CSS, distinguish between true variants (which should be defined in cva) and styles controlled by data-* attributes (which should be handled in the attrs function).
18. For each generated attrs function, provide clear type definitions, including all possible properties and their types.
19. Before generating code, carefully check all selectors and attribute usage in the CSS file to ensure no important style controls are missed.
20. If a component has multiple parts (like root and input), ensure correct variants and attributes are generated for each part.
21. In comments, explain any non-obvious decisions or assumptions for future code review and maintenance.
