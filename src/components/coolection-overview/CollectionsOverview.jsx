import React from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview} from '../../redux/shop/shop.selector';
import './collectionsOverview.scss'

const collectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionprop})=> <PreviewCollection key={id} {...otherCollectionprop}/>)}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(collectionsOverview)
