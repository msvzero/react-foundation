// @flow

export type BreakpointsUnion =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

/**
 * Breakpoints enumerable.
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string}}
 */
export const Breakpoints: {[key: string]: BreakpointsUnion} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

export type BadgeColorsUnion = 'info' | 'secondary' | 'success' | 'warning' | 'alert'
/**
 * Badge color enumerable.
 *
 * @type {Object}
 */
export const BadgeColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

export type ButtonColorsUnion = 'primary' | 'secondary' | 'success' | 'alert' | 'warning'

/**
 * Button color enumerable.
 *
 * @type {Object}
 */
export const ButtonColors: {[key: string]: ButtonColorsUnion} = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

/**
 * Button group color enumerable.
 *
 * @type {Object}
 */
export const ButtonGroupColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

/**
 * Callout color enumerable.
 *
 * @type {Object}
 */
export const CalloutColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Label color enumerable.
 *
 * @type {Object}
 */
export const LabelColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Progress colors enumerable.
 *
 * @type {Object}
 */
export const ProgressColors = {
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Colors = {
  ...BadgeColors,
  ...ButtonColors,
  ...ButtonGroupColors,
  ...CalloutColors,
  ...LabelColors,
  ...ProgressColors
};

/**
 * Callout size enumerable.
 *
 * @type {Object}
 */
export const CalloutSizes = {
  SMALL: 'small',
  LARGE: 'large'
};

export type ButtonSizesUnion = 'tiny'| 'small' | 'large'

/**
 * Button size enumerable.
 *
 * @type {Object}
 */
export const ButtonSizes: {[key: string]: ButtonSizesUnion} = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Button group size enumerable.
 *
 * @type {Object}
 */
export const ButtonGroupSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Switch size enumerable.
 *
 * @type {Object}
 */
export const SwitchSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Sizes = {
  ...ButtonSizes,
  ...ButtonGroupSizes,
  ...CalloutSizes,
  ...SwitchSizes
};

/**
 * Horizontal alignment enumerable.
 *
 * @type {Object}
 */
export const HorizontalAlignments = {
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
  SPACED: 'spaced'
};

/**
 * Vertical alignment enumerable.
 *
 * @type {Object}
 */
export const VerticalAlignments = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
  STRETCH: 'stretch'
};

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string}}
 */
export const MenuAlignments = {
  RIGHT: 'right',
  CENTER: 'center'
};

/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const Alignments = {
  ...HorizontalAlignments,
  ...VerticalAlignments,
  ...MenuAlignments
};

export type FloatTypesUnion = 'left' | 'center' | 'right'

/**
 * Float types enumerable.
 *
 * @type {{LEFT: string, CENTER: string, RIGHT: string}}
 */
export const FloatTypes: {[key: string]: FloatTypesUnion} = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};

/**
 * Switch type enumerable.
 *
 * @type {Object}
 */
export const SwitchInputTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio'
};

/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 *
 * @type {Object}
 */
export const InputTypes = {
  ...SwitchInputTypes
};

/**
 * Gutter type enumerable.
 *
 * @type {Object}
 */
export const GutterTypes = {
  MARGIN: 'margin',
  PADDING: 'padding'
};

export type ExtendedBreakpointsUnion =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'all'

/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string, ALL: string}}
 */
export const ExtendedBreakpoints: {[key: string]: ExtendedBreakpointsUnion} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge',
  ALL: 'all'
};

/**
 * Space control enumerable.
 *
 * @type {Object}
 */
export const SpaceControls = {
  AUTO: 'auto',
  GROW: 'grow',
  SHRINK: 'shrink'
};
