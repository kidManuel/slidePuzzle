import { IFullStoreState } from './store';

export const getPiecesSelector = (store: IFullStoreState) => store.puzzleReducer.pieces;
export const getActivePieceSelector = (store: IFullStoreState) => store.puzzleReducer.activePiecePosition;
export const getAdjacentToActiveSelector = (store: IFullStoreState) => store.puzzleReducer.adjacentToActive;
export const isSolvedSelector = (store: IFullStoreState) => store.puzzleReducer.isSolved;

export const showHintsSelector = (store: IFullStoreState) => store.userConfigurationReducer.showHints;
export const puzzleSizeSelector = (store: IFullStoreState) => store.userConfigurationReducer.size;
