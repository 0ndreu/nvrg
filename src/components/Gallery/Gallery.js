/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Col, Row, Image,} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import Lightbox from 'react-images';



//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Gallery extends React.Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage (index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
            return (
            <Col key={i} xs={6} md={4}>
                <a
                    href={obj.src}
                    // className={css(classes.thumbnail, classes[obj.orientation])}
                    key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                >
                    <Image key={i} style={{marginTop: '10px', marginBottom:'20px'}}src={obj.thumbnail} thumbnail responsive />
                </a>
            </Col>
            );
        });

        return (
            <div
                // className={css(classes.gallery)}
            >
                <Row>
                {gallery}
                </Row>
            </div>
        );
    }

    render () {
        const theme = {
            // container
            container: {
                backgroundColor: 'rgba(0, 0, 0, 1)',
            }
        }
        return (
            <div className="section">
                {this.props.heading && <h2>{this.props.heading}</h2>}
                {this.props.subheading && <p>{this.props.subheading}</p>}
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    showThumbnails={this.props.showThumbnails}
                    spinner={this.props.spinner}
                    spinnerColor={this.props.spinnerColor}
                    spinnerSize={this.props.spinnerSize}
                    theme={theme}
                    imageCountSeparator = ' из '
                    leftArrowTitle = 'Предыдущая'
                    rightArrowTitle = 'Следующая'
                    closeButtonTitle="Закрыть"
                />
            </div>
        );
    }
}
//
//     static defaultProps = {
//
//     }
//
//     static propTypes = {
//
//     }
//
//     state = {
//
//     }
//
//     //ES5 - componentWillMount
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount(){
//
//     }
//
//     componentWillReceiveProps(){
//
//     }
//
//
//     close() {
//         this.props.showModal = false;
//     }
//
//     render = () => {
//
//         return (
//
//
//         )
//     }
//
// }


//const mapStateToProps = (state) => {
//    return {
//        currentUserId: state.users.currentUserId,
//        loading: state.users.loading
//    }
//}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onLogout: (data) => {
//            dispatch(actions.logOut())
//        }
//    }
//}

//Gallery = connect(mapStateToProps, mapDispatchToProps)(Gallery)

export default Gallery