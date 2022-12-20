import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { createStructuredSelector } from "reselect";
import collection from "./collection";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const collectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collection)

export default collectionContainer