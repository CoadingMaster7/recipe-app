/* eslint-disable import/prefer-default-export */
export const required = (value) => (
  (value && value.trim() !== '')  ? undefined : 'Should not be empty'
);
