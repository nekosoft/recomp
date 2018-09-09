// @flow
import { createAction } from 'redux-actions';

export const SET_COUNCIL = 'SET_COUNCIL';
export const setCouncilAction = createAction(SET_COUNCIL);
export const DO_REDIRECT = 'DO_REDIRECT';
export const doRedirectAction = createAction(DO_REDIRECT);