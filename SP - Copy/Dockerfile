FROM odoo:17
EXPOSE 8069

USER root
RUN apt-get update && apt-get install -y --no-install-recommends libreoffice && rm -rf /var/lib/apt/lists/*

RUN pip3 install --no-cache-dir docxtpl jinja2 pypdf reportlab minio

USER odoo
CMD ["odoo"]
