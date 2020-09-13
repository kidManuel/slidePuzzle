import { createStore } from "redux";
import rootReducer from "./reducers";
import { IPuzzleState, IUserConfig } from '../common/interfaces';

export interface IFullStoreState {
  puzzleReducer: IPuzzleState,
  userConfigurationReducer: IUserConfig
}

export default createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
