import shopActionTypes from "./shop.type";
import { firestore, convertCollectionsSnapShotToMap } from "../../components/firebase/firebase.utils";
export const fetchCollectionsStart = ()=> ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
}) 

export const fetchCollectionsSuccess = collectionsMap =>({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionsFailure = errorMessage=>({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionsStartAsync = ()=>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections'); 
    dispatch(fetchCollectionsStart())
    collectionRef.get().then(snapShot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
    dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
} 