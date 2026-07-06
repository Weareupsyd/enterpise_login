/** @odoo-module */

import { registry } from '@web/core/registry';
import { HomeMenuRoot } from './home_menu_root';

// Register the client action so Odoo can open it by tag
try {
    registry.category('actions').add('ss_enterprise_home_menu', HomeMenuRoot);
} catch (e) {
    try {
        const actionRegistry = require('web.action_registry');
        if (actionRegistry) {
            actionRegistry.add('ss_enterprise_home_menu', HomeMenuRoot);
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
            const path = window.location.pathname || '';
            if (!hash.includes('action=') && (path.endsWith('/web') || path.endsWith('/web/'))) {
                window.location.hash = '#action=ss_enterprise_home_menu';
            }
        } catch (err) {
            // silent
        }
    });
}
