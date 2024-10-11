export const radii = ['none', 'small', 'medium', 'large', 'full'] as const
export type Radius = (typeof radii)[number]
