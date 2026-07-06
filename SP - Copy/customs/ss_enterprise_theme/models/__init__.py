import logging

_logger = logging.getLogger(__name__)

_logger.info("[SS Enterprise Theme] Loading models")

from . import res_company
from . import res_config_settings
from . import res_users

_logger.info("[SS Enterprise Theme] Models loaded successfully")
