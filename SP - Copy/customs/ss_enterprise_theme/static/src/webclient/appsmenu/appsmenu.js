/** @odoo-module **/

import { useEffect } from "@odoo/owl";
import { url } from "@web/core/utils/urls";
import { useBus, useService } from "@web/core/utils/hooks";

import { Dropdown } from "@web/core/dropdown/dropdown";

export class AppsMenu extends Dropdown {
	static template = 'ss_enterprise_theme.AppsMenu';
    static props = {
    	...Dropdown.props
    };
    setup() {
    	super.setup();
    	console.log("[SS Enterprise Theme] AppsMenu component setup");
    	this.commandPaletteOpen = false;
        this.commandService = useService("command");
    	this.companyService = useService('company');
    	this.appMenuService = useService('app_menu');
    	this.menuItems = this.appMenuService.getAppsMenuItems();
    	console.log("[SS Enterprise Theme] Menu items loaded:", this.menuItems.length);
    	if (this.companyService.currentCompany.has_background_image) {
            this.backgroundImageUrl = url('/web/image', {
                model: 'res.company',
                field: 'background_image',
                id: this.companyService.currentCompany.id,
            });
    	} else {
    		this.backgroundImageUrl = '/ss_enterprise_theme/static/src/img/background.png';
    	}
    	console.log("[SS Enterprise Theme] Background image URL:", this.backgroundImageUrl);
        useEffect(
            (open) => {
            	console.log("[SS Enterprise Theme] Apps menu open state:", open);
            	if (open) {
            		const openMainPalette = (ev) => {
            	    	if (
            	    		!this.commandPaletteOpen &&
            	    		ev.key.length === 1 &&
            	    		!ev.ctrlKey &&
            	    		!ev.altKey
            	    	) {
	            	        console.log("[SS Enterprise Theme] Opening command palette with:", ev.key);
	            	        this.commandService.openMainPalette(
            	    		{ searchValue: `/${ev.key}` },
            	    		() => { this.commandPaletteOpen = false; }
            	    	);
	            	    this.commandPaletteOpen = true;
            	    	}
            		};
	            window.addEventListener("keydown", openMainPalette);
	            return () => {
	            	window.removeEventListener("keydown", openMainPalette);
	            	this.commandPaletteOpen = false;
	            };
            	}
            	return () => {};
            },
            () => [this.state.open]
        );
    	useBus(this.env.bus, "ACTION_MANAGER:UI-UPDATED", () => this.close());
    }
}