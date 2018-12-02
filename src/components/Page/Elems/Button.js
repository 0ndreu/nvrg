/**
 * Created by lesha on 08.10.2017.
 */
import React from 'react';

class Button extends React.Component {

    state = {
        caption: "ПОДРОБНЕЕ",
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

export default Button