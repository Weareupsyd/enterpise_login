{
    'name': 'Enterprise Backend Theme',
    'version': '17.0.1.2.0',
    'category': 'Themes/Backend',
    'summary': 'Enterprise-style Backend Theme for Odoo Community - White Navbar, App Icons, Login Page, Tiles, and Header Search',
    'author': 'Smart System for Information Technology',
    'maintainer': 'Smart System for Information Technology',
    'support': 'info@smartsystem.sa',
    'website': 'https://smartsystem.sa',
    'license': 'LGPL-3',
    'depends': ['base', 'web'],
    'data': [],
    'post_init_hook': None,
    'assets': {
        'web.assets_backend': [],
        'web.assets_frontend': [
            'ss_enterprise_theme/static/src/css/login_theme.css',
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
}
