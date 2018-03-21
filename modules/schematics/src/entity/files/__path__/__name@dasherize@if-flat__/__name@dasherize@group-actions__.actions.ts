import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';

export enum <%= classify(name) %>ActionTypes {
  LOAD_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Load <%= classify(name) %>s',
  ADD_<%= underscore(name).toUpperCase() %>_ACTION = '[<%= classify(name) %>] Add <%= classify(name) %>',
  UPSERT_<%= underscore(name).toUpperCase() %>_ACTION = '[<%= classify(name) %>] Upsert <%= classify(name) %>',
  ADD_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Add <%= classify(name) %>s',
  UPSERT_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Upsert <%= classify(name) %>s',
  UPDATE_<%= underscore(name).toUpperCase() %>_ACTION = '[<%= classify(name) %>] Update <%= classify(name) %>',
  UPDATE_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Update <%= classify(name) %>s',
  DELETE_<%= underscore(name).toUpperCase() %>_ACTION = '[<%= classify(name) %>] Delete <%= classify(name) %>',
  DELETE_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Delete <%= classify(name) %>s',
  CLEAR_<%= underscore(name).toUpperCase() %>S_ACTION = '[<%= classify(name) %>] Clear <%= classify(name) %>s'
}

export class Load<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.LOAD_<%= underscore(name).toUpperCase() %>S_ACTION;

  constructor(public payload: { <%= camelize(name) %>s: <%= classify(name) %>[] }) {}
}

export class Add<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.ADD_<%= underscore(name).toUpperCase() %>_ACTION;

  constructor(public payload: { <%= camelize(name) %>: <%= classify(name) %> }) {}
}

export class Upsert<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UPSERT_<%= underscore(name).toUpperCase() %>_ACTION;

  constructor(public payload: { <%= camelize(name) %>: Update<<%= classify(name) %>> }) {}
}

export class Add<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.ADD_<%= underscore(name).toUpperCase() %>S_ACTION;

  constructor(public payload: { <%= camelize(name) %>s: <%= classify(name) %>[] }) {}
}

export class Upsert<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UPSERT_<%= underscore(name).toUpperCase() %>S_ACTION;

  constructor(public payload: { <%= camelize(name) %>s: Update<<%= classify(name) %>>[] }) {}
}

export class Update<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UPDATE_<%= underscore(name).toUpperCase() %>_ACTION;

  constructor(public payload: { <%= camelize(name) %>: Update<<%= classify(name) %>> }) {}
}

export class Update<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.UPDATE_<%= underscore(name).toUpperCase() %>S_ACTION;

  constructor(public payload: { <%= camelize(name) %>s: Update<<%= classify(name) %>>[] }) {}
}

export class Delete<%= classify(name) %> implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DELETE_<%= underscore(name).toUpperCase() %>_ACTION;

  constructor(public payload: { id: string }) {}
}

export class Delete<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.DELETE_<%= underscore(name).toUpperCase() %>S_ACTION;

  constructor(public payload: { ids: string[] }) {}
}

export class Clear<%= classify(name) %>s implements Action {
  readonly type = <%= classify(name) %>ActionTypes.CLEAR_<%= underscore(name).toUpperCase() %>S_ACTION;
}

export type <%= classify(name) %>Actions =
 Load<%= classify(name) %>s
 | Add<%= classify(name) %>
 | Upsert<%= classify(name) %>
 | Add<%= classify(name) %>s
 | Upsert<%= classify(name) %>s
 | Update<%= classify(name) %>
 | Update<%= classify(name) %>s
 | Delete<%= classify(name) %>
 | Delete<%= classify(name) %>s
 | Clear<%= classify(name) %>s;
