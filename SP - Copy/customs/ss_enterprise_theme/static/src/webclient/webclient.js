/** @odoo-module */

import { patch } from '@web/core/utils/patch';

import { WebClient } from '@web/webclient/webclient';
import { SSEnterpriseAppsBar } from '@ss_enterprise_theme/webclient/appsbar/appsbar';

patch(WebClient, {
    components: {
        ...WebClient.components,
        SSEnterpriseAppsBar,
    },
});
