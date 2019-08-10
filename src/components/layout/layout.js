import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutTemplate from './layout-template';

export default class Layout extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        showMenu: false,
    };

    toggleMenu = () => {
        const { showMenu } = this.state;

        this.setState({ showMenu: !showMenu });
    };

    render() {
        const { props, toggleMenu } = this;
        const { showMenu } = this.state;

        return <LayoutTemplate {...{ ...props, showMenu, toggleMenu }} />;
    }
}
