import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection';
import { useSelector } from 'react-redux';
import { selectCollectionForPreview} from '../../redux/shop/shop.selector';
import './collectionsOverview.scss'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionForPreview)
  return (
    <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionprop})=> <PreviewCollection key={id} {...otherCollectionprop}/>)}
    </div>
  )
}
export default CollectionsOverview
