/**
 * Created by lesha on 08.10.2017.
 */
import React from 'react';

class Button extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        caption: "ПОДРОБНЕЕ",
    }

    //ES5 - componentWillMount
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {
        let caption = this.props.Caption === undefined ? this.state.caption : this.props.Caption;
        return (
            <div className="m_bt centered">
                <h4 style={{fontSize: '20px', textAlign: 'center', margin: '3px'}}>
                    {caption}
                </h4>
            </div>
        )
    }

}


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

//Button = connect(mapStateToProps, mapDispatchToProps)(Button)

export default Button