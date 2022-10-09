import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/coolection-overview/CollectionsOverview'
import Collection from '../collection/collection'
import { firestore, convertCollectionsSnapShotToMap } from '../../components/firebase/firebase.utils'
import { connect } from 'react-redux/es/exports'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner'



const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)
 class Shop extends React.Component {
  state = {
    loading: true
  }
  unSubscribeFromSnapShot = null;
  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })
  }
  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props}/>}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(Shop)