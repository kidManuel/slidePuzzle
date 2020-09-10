import { createStore } from "redux";
import rootReducer from "./reducers";
import { IPuzzleState } from '../common/interfaces';

export interface IFullStoreState {
  puzzleReducer: IPuzzleState
}

export default createStore(rootReducer);
