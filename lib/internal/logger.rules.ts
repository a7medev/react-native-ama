export type Rule =
  | 'CONTRAST_FAILED'
  | 'CONTRAST_FAILED_AAA'
  | 'MINIMUM_SIZE'
  | 'UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL'
  | 'UPPERCASE_ACCESSIBILITY_LABEL'
  | 'NO_ACCESSIBILITY_ROLE'
  | 'NO_ACCESSIBILITY_LABEL';
export type RuleValue = 'warn' | 'throw';

export const NON_OVERRIDABLE_RULES: Partial<Rule>[] = [
  'NO_ACCESSIBILITY_ROLE',
  'NO_ACCESSIBILITY_LABEL',
];

export const LOGGER_RULES: Record<Rule, RuleValue> = {
  CONTRAST_FAILED: 'throw',
  CONTRAST_FAILED_AAA: 'warn',
  MINIMUM_SIZE: 'throw',
  UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL: 'throw',
  UPPERCASE_ACCESSIBILITY_LABEL: 'throw',
  NO_ACCESSIBILITY_LABEL: 'throw',
  NO_ACCESSIBILITY_ROLE: 'throw',
};

export const CONTRAST_CHECKER_MAX_DEPTH = 5;

export const RULES_HELP: Record<Rule, string> = {
  CONTRAST_FAILED:
    'https://formidable.com/open-source/react-native-ama/docs/advanced/contrast#contrast_failed',
  CONTRAST_FAILED_AAA:
    'https://formidable.com/open-source/react-native-ama/docs/advanced/contrast#contrast_failed_aaa',
  MINIMUM_SIZE:
    'https://formidable.com/open-source/react-native-ama/docs/advanced/minimum-size',
  UPPERCASE_TEXT_NO_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama//docs/rules/uppercase-text#uppercase_text_no_accessibility_label',
  UPPERCASE_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama//docs/rules/uppercase-text#uppercase_accessibility_label',
  NO_ACCESSIBILITY_LABEL:
    'https://formidable.com/open-source/react-native-ama/docs/rules/accessibility-labels#no_accessibility_label',
  NO_ACCESSIBILITY_ROLE:
    'https://formidable.com/open-source/react-native-ama/docs/rules/accessibility-role#no_accessibility_role',
};

export const canRuleBeOverridden = (rule: Rule) => {
  return !NON_OVERRIDABLE_RULES.includes(rule);
};

export const SHELL_COLORS = {
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  RESET: '\x1b[0m',
};