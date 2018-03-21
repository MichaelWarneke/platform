import { Action } from '@ngrx/store';

export enum <%= classify(name) %>ActionTypes {
  <%= underscore(name).toUpperCase() %>_ACTION = '[<%= classify(name) %>] Action'
}

export class <%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.<%= underscore(name).toUpperCase() %>_ACTION;
}

export type <%= classify(name) %>Actions = <%= classify(name) %>;
