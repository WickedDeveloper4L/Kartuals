import { connect} from "react-redux";
import { compose } from "redux";
import { selectCollectionFetching } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "./CollectionsOverview";


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})

const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default collectionsOverviewContainer