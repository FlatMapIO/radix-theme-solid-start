# Radix Theme for SolidStart

A SolidStart template with Radix UI theme converted to CSS modules and integrated with cva function. This setup allows for seamless coexistence with Tailwind CSS and can be easily adapted for use with other meta-frameworks like ark-ui.

## Features

- Radix UI components styled with CSS modules
- Integration with cva (class variance authority) for dynamic styling
- Compatible with Tailwind CSS
- Customizable color schemes
- Easy to adapt for other meta-frameworks

## Getting Started

This project is a template, so there's no need for installation. Simply clone the repository and make a few modifications to get started.

1. Clone the repository:

   ```
   git clone --depth 1 https://github.com/FlatMapIO/radix-theme-solid-start
   cd radix-theme-solid-start
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Start the development server:
   ```
   pnpm dev
   ```

## Customization

### Color Schemes

To reduce bundle size, you can customize the color schemes you need:

1. Open `src/styled/token/index.css`
2. Comment color import as needed

### Data Attributes

Data attributes play a crucial role in implementing dynamic styles. Different meta-frameworks inject various data attribute names into components.

To view available data attributes for each component, run:

```
pnpm data-attrs
```
