import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { <%= classify(name) %> } from '<%= featurePath(group, flat, "models", dasherize(name)) %><%= dasherize(name) %>.model';
import { <%= classify(name) %>Actions, <%= classify(name) %>ActionTypes } from '<%= featurePath(group, flat, "actions", dasherize(name)) %><%= dasherize(name) %>.actions';

export interface State extends EntityState<<%= classify(name) %>> {
  // additional entities state properties
}

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: <%= classify(name) %>Actions
): State {
  switch (action.type) {
    case <%= classify(name) %>ActionTypes.ADD_<%= underscore(name).toUpperCase() %>_ACTION: {
      return adapter.addOne(action.payload.<%= camelize(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.UPSERT_<%= underscore(name).toUpperCase() %>_ACTION: {
      return adapter.upsertOne(action.payload.<%= camelize(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.ADD_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.addMany(action.payload.<%= camelize(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.UPSERT_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.upsertMany(action.payload.<%= camelize(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.UPDATE_<%= underscore(name).toUpperCase() %>_ACTION: {
      return adapter.updateOne(action.payload.<%= camelize(name) %>, state);
    }

    case <%= classify(name) %>ActionTypes.UPDATE_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.updateMany(action.payload.<%= camelize(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.DELETE_<%= underscore(name).toUpperCase() %>_ACTION: {
      return adapter.removeOne(action.payload.id, state);
    }

    case <%= classify(name) %>ActionTypes.DELETE_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case <%= classify(name) %>ActionTypes.LOAD_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.addAll(action.payload.<%= camelize(name) %>s, state);
    }

    case <%= classify(name) %>ActionTypes.CLEAR_<%= underscore(name).toUpperCase() %>S_ACTION: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
