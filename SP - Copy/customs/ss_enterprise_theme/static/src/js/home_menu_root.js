/** @odoo-module **/

import { Component, useState } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { AppGrid } from './app_grid';
import { SearchBar } from './search_bar';
import { ThemeManager } from './theme_manager';

export class HomeMenuRoot extends Component {
    static template = 'ss_enterprise_theme.HomeMenu';
    static components = {
        SearchBar,
        ThemeManager,
        AppGrid,
    };

    setup() {
        this.appMenuService = useService('app_menu');
        this.state = useState({
            searchValue: '',
            selectedTheme: 'light',
            apps: this.appMenuService.getAppsMenuItems(),
            draggedId: null,
        });
    }

    get filteredApps() {
        const term = this.state.searchValue.trim().toLowerCase();
        return this.state.apps.filter((app) => app.name.toLowerCase().includes(term));
    }

    onSearch(value) {
        this.state.searchValue = value;
    }

    onThemeSelected(theme) {
        document.body.classList.remove('ss-theme-light', 'ss-theme-dark', 'ss-theme-glass');
        document.body.classList.add(`ss-theme-${theme}`);
        this.state.selectedTheme = theme;
    }

    onDragStart(event, appId) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', appId);
        this.state.draggedId = appId;
    }

    onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    onDrop(event, targetId) {
        event.preventDefault();
        const draggedId = this.state.draggedId || event.dataTransfer.getData('text/plain');
        if (!draggedId || draggedId === targetId) {
            return;
        }
        const apps = [...this.state.apps];
        const sourceIndex = apps.findIndex((app) => app.id === draggedId);
        const targetIndex = apps.findIndex((app) => app.id === targetId);
        if (sourceIndex === -1 || targetIndex === -1) {
            return;
        }
        const [moved] = apps.splice(sourceIndex, 1);
        apps.splice(targetIndex, 0, moved);
        this.state.apps = apps;
        this.state.draggedId = null;
    }
}
