import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollectionItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollectionItems],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollectionItems],
    collections => collections[collectionUrlParam]
)