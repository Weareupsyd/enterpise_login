import logging

_logger = logging.getLogger(__name__)

def _post_load_hook():
    _logger.info("[SS Enterprise Theme] Module loaded successfully")

from . import models
