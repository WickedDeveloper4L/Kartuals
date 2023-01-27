import React from 'react';
import MenuItem from '../menu item/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { useSelector } from 'react-redux';
import './directory.scss'

const Directory =()=>{
      const section = useSelector(selectDirectorySections)
        return (
           <div className="directory-menu">
            {section.map(({id, ...otherSectionprops}) => 
                <MenuItem key={id} {...otherSectionprops}/>)}
           </div>
        );
}
export default Directory