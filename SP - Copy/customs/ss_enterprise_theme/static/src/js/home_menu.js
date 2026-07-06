/** @odoo-module */

import { registry } from '@web/core/registry';
import { Component } from '@odoo/owl';
import { loadJS } from '@web/assets_helpers';

// Minimal HomeMenu component that mounts into the QWeb template container
class HomeMenu extends Component {
    static template = 'ss_enterprise_theme.HomeMenu';
    setup() {
        // In a full copy we'd import and mount the app grid, search and theme manager
    }
}

// Register the client action so Odoo can open it by tag
try {
    registry.category('actions').add('ss_enterprise_home_menu', HomeMenu);
} catch (e) {
    try {
        const actionRegistry = require('web.action_registry');
        if (actionRegistry) {
            actionRegistry.add('ss_enterprise_home_menu', HomeMenu);
        }
    } catch (e2) {
        // ignore
    }
}

// Auto-open the home menu when the web client starts and there is no other action in the hash
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        try {
            const hash = window.location.hash || '';
            if (!hash.includes('action=') && window.location.pathname.endsWith('/web')) {
                // Use the module xmlid to open the client action
                window.location.hash = 'action=ss_enterprise_theme.action_ss_enterprise_home_menu';
            }
        } catch (err) {
            // silent
        }
    });
}
