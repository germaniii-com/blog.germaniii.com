# blog.germaniii.com

This is the repository for blog.germaniii.com, which is the personal blog of germaniiifelisarta.
This website is written in Javascript, Vue and Laravel.
We also use the CMS App Strapi. To manage blog post contents.

## Setup

- Create a **.env** file in the project root folder with these vars:

| Key                 | Value                         |
| ------------------- | ----------------------------- |
| MYSQL_ROOT_PASSWORD | \*\*\*                        |
| MYSQL_DATABASE      | \*\*\*                        |
| MYSQL_USER          | \*\*\*                        |
| MYSQL_PASSWORD      | \*\*\*                        |
| APP_KEYS            | _Random string_               |
| API_TOKEN_SALT      | _Random string_               |
| ADMIN_JWT_SECRET    | _Random string_               |
| API_TOKEN_SALT      | _Random string_               |
| STRAPI_TOKEN        | _Create in Strapi, see below_ |

- Run `docker compose up` in the root folder to start the containers
- Visit [http://localhost:1337/](http://localhost:1337/) (Strapi)
- Register, then generate a new "Full access" token in **Settings > API Tokens**
- Copy the token to the **.env** `STRAPI_TOKEN` var
- Create a **User** collection type with an email; add some users
- Restart Docker Compose
- Visit [http://localhost/](http://localhost/) to confirm it all works

## Database Structure

\* is required

### article

- content\* : richtext
- title\* : text
- tags : related

### tag

- name\* : text

~~

## BACKUP and RESTORE

### BACKUP

Make sure to not quit the docker container yet. And run `scripts/export.sh`

### IMPORT

Run `scripts/import.sh` and make sure the filename is the same as in the script

~~
