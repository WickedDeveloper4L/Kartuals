import {takeLatest, call, put} from 'redux-saga/effects'

import shopActionTypes from './shop.type'

import { firestore, convertCollectionsSnapShotToMap} from '../../components/firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsAsync(){
    yield console.log('I am fired')

    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}