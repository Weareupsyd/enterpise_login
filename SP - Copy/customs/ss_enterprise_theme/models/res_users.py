from odoo import models, fields
import json


class ResUsers(models.Model):
    _inherit = 'res.users'

    @property
    def SELF_READABLE_FIELDS(self):
        return super().SELF_READABLE_FIELDS + [
            'ss_app_order',
            'ss_selected_theme',
            'ss_background'
        ]

    @property
    def SELF_WRITEABLE_FIELDS(self):
        return super().SELF_WRITEABLE_FIELDS + [
            'ss_app_order',
            'ss_selected_theme',
            'ss_background'
        ]

    ss_app_order = fields.Text(string='App Order', default='[]')
    ss_selected_theme = fields.Char(string='Selected Theme')
    ss_background = fields.Char(string='Background')

    def get_app_order(self):
        try:
            return json.loads(self.ss_app_order or '[]')
        except Exception:
            return []

    def set_app_order(self, order):
        self.ss_app_order = json.dumps(order)
