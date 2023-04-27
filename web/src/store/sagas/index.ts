import { all, takeLatest } from 'redux-saga/effects';
import { GET_PICTURE_LISTING } from '../ducks/pictureListing/actionTypes';
import { GET_IMAGE_DETAILS } from '../ducks/imageDetails/actionTypes';

import { pictureLisntingSaga } from './pictureListing';
import { imageDetailsSaga } from './imageDetails';

export default function* rootSaga() {
    yield all([
        takeLatest(GET_PICTURE_LISTING, pictureLisntingSaga),
        takeLatest(GET_IMAGE_DETAILS, imageDetailsSaga)
    ]);
}
