/** @odoo-module **/

import { Component } from '@odoo/owl';

export class AppTile extends Component {
    static template = 'ss_enterprise_theme.AppTile';
    static props = {
        app: Object,
        onDragStart: Function,
        onDragOver: Function,
        onDrop: Function,
        onAppClick: Function,
    };

    onDragStart(event) {
        this.props.onDragStart(event, this.props.app.id);
    }

    onDragOver(event) {
        this.props.onDragOver(event);
    }

    onDrop(event) {
        this.props.onDrop(event, this.props.app.id);
    }

    onClick() {
        this.props.onAppClick(this.props.app);
    }
}
