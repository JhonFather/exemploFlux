import { put, call, SagaReturnType, delay } from 'redux-saga/effects';
import api from '../../../services/api';
import {
    getPictureListingSuccess,
    getPictureListinFailure,
} from '../../ducks/pictureListing/actions';

export function* pictureLisntingSaga(action: any) {
    try {
        const { page, limit } = action.payload;

        const getPictures = () => {
            return api.get(`/v2/list?page=${page}&limit=${limit}`);
        };

        const response: SagaReturnType<typeof getPictures> = yield call(
            getPictures
        );

        yield delay(2000);

        yield put(getPictureListingSuccess(response));
        
    } catch (error) {
        yield put(getPictureListinFailure({ error }));
    }
}
