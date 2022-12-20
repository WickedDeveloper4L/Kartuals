import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollectionItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollectionItems],
    collections =>  collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollectionItems],
    collections =>  ( collections ? collections[collectionUrlParam]: null)
)  

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)