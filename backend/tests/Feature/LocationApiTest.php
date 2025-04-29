<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Route;

class LocationApiTest extends TestCase
{
    /**
     * Setup the test environment.
     */
    protected function setUp(): void
    {
        parent::setUp();
        
        // Asegurar que la ruta existe antes de probarla
        if (!Route::has('api.locations')) {
            // Definir la ruta manualmente para la prueba si no existe
            Route::get('/api/locations', [\App\Http\Controllers\Api\LocationController::class, 'index'])
                ->middleware('api.key')
                ->name('api.locations');
        }
        
        // Ensure API_KEY is set in config for testing
        config(['app.api_key' => 'test_api_key']);
    }

    /**
     * Test API endpoint with valid API key
     */
    public function test_locations_endpoint_with_valid_api_key(): void
    {
        $response = $this->withHeaders([
            'X-API-Key' => 'test_api_key',
        ])->get('/api/locations');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'code',
                'name',
                'image',
                'creationDate'
            ]
        ]);
    }

    /**
     * Test API endpoint with invalid API key
     */
    public function test_locations_endpoint_with_invalid_api_key(): void
    {
        $response = $this->withHeaders([
            'X-API-Key' => 'wrong_api_key',
        ])->get('/api/locations');

        $response->assertStatus(401);
        $response->assertJson([
            'error' => 'Invalid or missing API Key'
        ]);
    }

    /**
     * Test API endpoint without API key
     */
    public function test_locations_endpoint_without_api_key(): void
    {
        $response = $this->get('/api/locations');

        $response->assertStatus(401);
        $response->assertJson([
            'error' => 'Invalid or missing API Key'
        ]);
    }

    /**
     * Test API endpoint with missing API key in server configuration
     */
    public function test_locations_endpoint_with_missing_server_api_key(): void
    {
        // Clear API key config
        config(['app.api_key' => null]);

        $response = $this->withHeaders([
            'X-API-Key' => 'any_api_key',
        ])->get('/api/locations');

        $response->assertStatus(500);
        $response->assertJson([
            'error' => 'API Key not configured on server'
        ]);
    }
} 