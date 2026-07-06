/** @odoo-module */

import { patch } from '@web/core/utils/patch';
import { useService } from '@web/core/utils/hooks';

import { NavBar } from '@web/webclient/navbar/navbar';
import { AppsMenu } from "./appsmenu/appsmenu";

console.log("[SS Enterprise Theme] Patching NavBar");

patch(NavBar.prototype, {
	setup() {
        super.setup();
        console.log("[SS Enterprise Theme] NavBar prototype patched");
        this.commandService = useService('command');
        this.appMenuService = useService('app_menu');
        this.isDarkMode = false;
    },
    
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        const icon = document.getElementById('darkModeIcon');
        
        if (this.isDarkMode) {
            document.body.classList.add('o_dark_mode');
            if (icon) {
                icon.classList.remove('fa-moon-o');
                icon.classList.add('fa-sun-o');
            }
        } else {
            document.body.classList.remove('o_dark_mode');
            if (icon) {
                icon.classList.remove('fa-sun-o');
                icon.classList.add('fa-moon-o');
            }
        }
    },

    openCommandPalette() {
        this.commandService.openMainPalette();
    },
});

patch(NavBar, {
    components: {
        ...NavBar.components,
        AppsMenu,
    },
});

console.log("[SS Enterprise Theme] NavBar components patched with AppsMenu");