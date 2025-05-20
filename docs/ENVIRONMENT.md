# Environment

## Example

```plaintext
PORT = 3000

REDIS_URL = redis://localhost:6379 # Just if want to use redis

DB_DIALECT = sqlite # sqlite, mysql

# Para mysql
# DB_HOST = localhost
# DB_PORT = 3306
# DB_USER = root
# DB_PASSWORD = root
# DB_NAME = geografia

# NODE_ENV = production
```

> [!NOTE]
> Podes usar una base de datos sqlite o mysql. Si usas sqlite, no es necesario que asignes las variables de entorno para mysql.
>
> Si queres usar mysql, [aca tenes un backup para que lo implementes en la base de datos que desees](../database/mysqlScript.sql)
>
> Si deseas usar redis para cachear las peticiones, puedes asignar la variable de entorno `REDIS_URL` con la url de tu servidor redis. Si no deseas usar redis, no es necesario que asignes esta variable.

> [!CAUTION]
> Si asignas variables de entorno para mysql, primero debes establecer la variable de entorno `DB_DIALECT` a `mysql`. De lo contrario, se usara sqlite como base de datos por defecto.
