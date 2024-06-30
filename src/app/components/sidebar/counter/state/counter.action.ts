import { createAction, props } from '@ngrx/store';

export const increment = createAction('incrementAction');
export const decrement = createAction('decrementAction');
export const reset = createAction('resetAction');

export const customIncrement = createAction(
  'customIncrementAction',
  props<{ count: number }>()
);
