from odoo import models, fields


class ResCompany(models.Model):
    
    _inherit = 'res.company'
    
    #----------------------------------------------------------
    # Fields
    #----------------------------------------------------------
    
    favicon = fields.Binary(
        string="Company Favicon", 
        attachment=True
    )
    
    background_image = fields.Binary(
        string='Apps Menu Background Image',
        attachment=True
    )
    
    has_background_image = fields.Boolean(
        string='Has Background Image',
        compute='_compute_has_background_image'
    )
    
    #----------------------------------------------------------
    # Compute
    #----------------------------------------------------------
    
    def _compute_has_background_image(self):
        for company in self:
            company.has_background_image = bool(company.background_image)