import { createSelector } from 'reselect';

import { AppState } from '../..';

const getImageDetailsData = (state: AppState) => state.ImageDetails.data;
const getImageDetailsLoading = (state: AppState) => state.ImageDetails.loading;
const getImageDetailsError = (state: AppState) => state.ImageDetails.error;

export const getImageDetailsDataSelector = createSelector(
    getImageDetailsData,
    (data) => data
);
export const getImageDetailsLoadingSelector = createSelector(
    getImageDetailsLoading,
    (loading) => loading
);
export const getImageDetailsErrorSelector = createSelector(
    getImageDetailsError,
    (error) => error
);
