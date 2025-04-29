<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Asegurar que estamos en modo testing
        $this->app['env'] = 'testing';
        
        // Configurar la aplicación para usar API routes
        $this->app['config']->set('app.api_key', 'test_api_key');
        
        // Asegurar rutas API correctas
        $this->withoutMiddleware([
            // Desactivar cualquier middleware global que pueda interferir con las pruebas
        ]);
    }
}
