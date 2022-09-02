import React from 'react'
import './preview-collection.scss'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({title, items}) => {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(item => <CollectionItem key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}/>)}
        </div>
    </div>
  )
}

export default PreviewCollection