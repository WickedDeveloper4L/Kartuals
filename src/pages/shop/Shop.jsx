import React from 'react'
import { Route } from 'react-router-dom'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import collectionsOverviewContainer from '../../components/coolection-overview/CollectionsOverviewContainer'
import collectionContainer from '../collection/collectionContainer'

 class Shop extends React.Component {
  
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();

  }
  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={collectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={collectionContainer}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
})
export default connect(null,mapDispatchToProps)(Shop)