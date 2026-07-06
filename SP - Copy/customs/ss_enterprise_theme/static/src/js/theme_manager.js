/** @odoo-module **/

import { Component } from '@odoo/owl';

export class ThemeManager extends Component {
    static template = 'ss_enterprise_theme.ThemeManager';
    static props = {
        selectedTheme: String,
        onSelect: Function,
    };

    selectTheme(theme) {
        this.props.onSelect(theme);
    }
}
