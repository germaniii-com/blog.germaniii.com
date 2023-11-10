#!/bin/bash
mariadb-dump --host 127.0.0.1 --port 8003 \
      --user root --password \
      --all-databases \
      --ignore-database=mysql \
      --single-transaction \
      --events \
      --routines \
      --default-character-set=utf8mb4 \
      > strapi-db-dump.sql

