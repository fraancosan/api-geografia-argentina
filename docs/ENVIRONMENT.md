# Environment

## Example

```plaintext
PORT = 3000

REDIS_URL = redis://localhost:6379 # Solo si querés usar redis

DB_DIALECT = sqlite # sqlite / mysql

# Para mysql
# DB_HOST = localhost
# DB_PORT = 3306
# DB_USER = root
# DB_PASSWORD = root
# DB_NAME = geografia

# NODE_ENV = production
```

> [!NOTE]
> Podés usar una base de datos sqlite o mysql. Si usás sqlite, no es necesario que asignes las variables de entorno para mysql.
>
> Si querés usar mysql, [acá tenés un backup para que lo implementes en la base de datos que desees](../database/mysqlScript.sql).
>
> Si deseás usar redis para cachear las peticiones, podés asignar la variable de entorno `REDIS_URL` con la URL de tu servidor redis. Si no querés usar redis, no es necesario que asignes esta variable.

> [!CAUTION]
> Si asignás variables de entorno para mysql, primero debés establecer la variable de entorno `DB_DIALECT` en `mysql`. De lo contrario, se usará sqlite como base de datos por defecto.
