import { combineReducers } from '@reduxjs/toolkit';

import PictureListing from './pictureListing';
import ImageDetails from './imageDetails';

const rootReducer = combineReducers({
    PictureListing,
    ImageDetails,
});

export default rootReducer;
