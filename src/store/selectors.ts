import { IFullStoreState } from './store';

export const getPieces = (store: IFullStoreState) => store.puzzleReducer.pieces;
export const getActivePiece = (store: IFullStoreState) => store.puzzleReducer.activePiecePosition;
export const getAdjacentToActive = (store: IFullStoreState) => store.puzzleReducer.adjacentToActive;
export const isSolved = (store: IFullStoreState) => store.puzzleReducer.isSolved;

export const showHintsSelector = (store: IFullStoreState) => store.userConfigurationReducer.showHints;
export const puzzleSizeSelector = (store: IFullStoreState) => store.userConfigurationReducer.size;

export const fullStore = (store: IFullStoreState) => store;
