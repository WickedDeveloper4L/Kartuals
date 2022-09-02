import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    
  render() {
        const {collections} = this.state
    return (
      <div>
        {collections.map(({id, ...otherCollectionprop})=> <PreviewCollection key={id} {...otherCollectionprop}/>)}
      </div>
    )
  }
}
export default Shop