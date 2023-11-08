#!/bin/bash
docker compose exec strapi npm run strapi export -- --no-encrypt --file /srv/backup/blog_germaniii_com_backup.tar.gz

