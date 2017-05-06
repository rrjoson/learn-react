import { combineReducers } from 'redux';
import RepositoriesReducer from './reducer_repositories';
import SelectedRepositoryReducer from './reducer_selected_repository';

const rootReducer = combineReducers({
  repositories: RepositoriesReducer,
  selectedRepository: SelectedRepositoryReducer,
});

export default rootReducer;