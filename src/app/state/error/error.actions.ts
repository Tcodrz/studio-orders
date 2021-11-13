import { AppError } from './../api-interface/app-error.interface';
import { createAction, props } from '@ngrx/store';


export const emitError = createAction('[ERROR] EMIT', props<{ payload: AppError}>());
export const releaseError = createAction('[ERROR] RELEASE');
