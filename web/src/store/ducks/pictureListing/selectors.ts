import { createSelector } from 'reselect';

import { AppState } from '../..';

const getPictureListingData = (state: AppState) => state.PictureListing.data;
const getPictureListingPage = (state: AppState) => state.PictureListing.page;
const getPictureListingLoading = (state: AppState) =>
    state.PictureListing.loading;
const getPictureListingError = (state: AppState) => state.PictureListing.error;

export const getPictureListingDataSelector = createSelector(
    getPictureListingData,
    (data) => data
);
export const getPictureListingPageSelector = createSelector(
    getPictureListingPage,
    (page) => page
);
export const getPictureListingLoadingSelector = createSelector(
    getPictureListingLoading,
    (loading) => loading
);
export const getPictureListingErrorSelector = createSelector(
    getPictureListingError,
    (error) => error
);
