import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/coolection-overview/CollectionsOverview'
import Collection from '../collection/collection'


const Shop =({match})=>{
  console.log(match)
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection}/>
      </div>
    )
  }

export default Shop