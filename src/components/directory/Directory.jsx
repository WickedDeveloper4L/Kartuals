import React from 'react';
import MenuItem from '../menu item/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux';
import './directory.scss'

const Directory =({section})=>{
        return (
           <div className="directory-menu">
            {section.map(({id, ...otherSectionprops}) => 
                <MenuItem key={id} {...otherSectionprops}/>)}
           </div>
        );
    }
const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)