export const breakpoints = {
	xs: 375,
	md: 768,
	lg: 1024,
	xl: 1440,
} as const;

export type TBreakpointKey = keyof typeof breakpoints;