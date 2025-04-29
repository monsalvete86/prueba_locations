# Laravel Locations API

Esta es una aplicación Laravel que expone una API REST protegida mediante autenticación con API Key para listar sedes.

## Requisitos Previos

- PHP 8.1 o superior
- Composer
- Servidor web (Apache, Nginx) o PHP artisan serve
- Laragon (si lo está utilizando como en este proyecto)

## Estructura del Proyecto

- `app/Http/Middleware/ApiKeyMiddleware.php`: Middleware para autenticación por API Key.
- `app/Http/Controllers/Api/LocationController.php`: Controlador que maneja la lista de sedes.
- `routes/api.php`: Define las rutas de la API.
- `config/cors.php`: Configuración CORS para permitir solicitudes desde el frontend.
- `tests/Feature/LocationApiTest.php`: Pruebas para verificar el funcionamiento de la API.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd laravel_locations
   ```

2. Instala las dependencias:
   ```bash
   composer install
   ```

3. Copia el archivo de entorno y configúralo:
   ```bash
   cp env-example .env
   ```

4. Genera una clave de aplicación:
   ```bash
   php artisan key:generate
   ```

5. Configura tu API Key:
   Edita el archivo `.env` y establece un valor para `API_KEY`, por ejemplo:
   ```
   API_KEY=your_secret_api_key_here
   ```

## Uso de la API

### Endpoint: `/api/locations`

Este endpoint retorna una lista de sedes simuladas.

#### Requisitos:
- Método: `GET`
- Header de autenticación: `X-API-Key: your_secret_api_key_here`

#### Ejemplo de respuesta:
```json
[
  {
    "code": "LOC001",
    "name": "Headquarters",
    "image": "https://via.placeholder.com/150?text=Headquarters",
    "creationDate": "2023-06-15T00:00:00+00:00"
  },
  {
    "code": "LOC002",
    "name": "Regional Office - North",
    "image": "https://via.placeholder.com/150?text=North",
    "creationDate": "2023-08-20T00:00:00+00:00"
  }
]
```

### Ejemplos de uso con curl

**Con API Key válida:**
```bash
curl -X GET http://localhost:8000/api/locations -H "X-API-Key: your_secret_api_key_here"
```

**Con API Key inválida:**
```bash
curl -X GET http://localhost:8000/api/locations -H "X-API-Key: invalid_key"
```

**Sin API Key:**
```bash
curl -X GET http://localhost:8000/api/locations
```

## Configuración para Frontend

Para permitir que tu frontend acceda a esta API:

1. La API ya está configurada con CORS para permitir solicitudes desde cualquier origen.
2. El frontend debe incluir el encabezado `X-API-Key` en todas las solicitudes a la API.

Ejemplo con JavaScript/Fetch:
```javascript
fetch('http://localhost:8000/api/locations', {
  method: 'GET',
  headers: {
    'X-API-Key': 'your_secret_api_key_here'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Ejecutar las pruebas

```bash
php artisan test
```

Las pruebas incluyen:
- Verificación de acceso con API Key válida
- Verificación de rechazo con API Key inválida
- Verificación de rechazo sin API Key
- Verificación de error cuando la API Key no está configurada en el servidor

## Herramientas de Calidad de Código

### PHP CodeSniffer

Para verificar el estilo de código según PSR-12:
```bash
vendor/bin/phpcs
```

### PHPStan

Para análisis estático de código:
```bash
vendor/bin/phpstan analyse
```

### Laravel Pint

Para formatear el código automáticamente:
```bash
vendor/bin/pint
```

## Servir la aplicación

```bash
php artisan serve
```

Por defecto, la aplicación estará disponible en: http://localhost:8000

## Notas sobre el Desarrollo

- La API utiliza datos simulados, no se requiere base de datos.
- La autenticación se realiza mediante un encabezado HTTP personalizado `X-API-Key`.
- Todas las rutas de la API están protegidas por el middleware `api.key`.
- La configuración CORS permite solicitudes desde cualquier origen para facilitar el desarrollo del frontend.

