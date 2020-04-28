import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
        return (
            <div className="col-xs-10 col-xs-offset-1">
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                { /* dynamic code */ }
                {this.props.children}
            </div>
        );
    }

}

Home.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}