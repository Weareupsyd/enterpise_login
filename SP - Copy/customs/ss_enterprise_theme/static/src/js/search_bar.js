/** @odoo-module **/

import { Component } from '@odoo/owl';

export class SearchBar extends Component {
    static template = 'ss_enterprise_theme.SearchBar';
    static props = {
        value: String,
        onSearch: Function,
    };

    onInput(event) {
        this.props.onSearch(event.target.value);
    }
}
