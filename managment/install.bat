@ECHO OFF
for /f "delims== tokens=1,2" %%G in (config.env) do set %%G=%%H
docker-compose up -d
docker cp tables.sql database:/tables.sql
docker exec -i database /usr/bin/mysql -u%MYSQL_USER% -p%MYSQL_PASSWORD% %MYSQL_DATABASE% < tables.sql
PAUSE