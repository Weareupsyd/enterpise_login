/** @odoo-module **/

import { Component } from '@odoo/owl';
import { AppTile } from './app_tile';

export class AppGrid extends Component {
    static template = 'ss_enterprise_theme.AppGrid';
    static components = { AppTile };
    static props = {
        apps: Array,
        onDragStart: Function,
        onDragOver: Function,
        onDrop: Function,
    };
}
