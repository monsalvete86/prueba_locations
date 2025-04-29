<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiKeyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $apiKey = config('app.api_key');
        
        if (!$apiKey) {
            return response()->json(['error' => 'API Key not configured on server'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
        $requestApiKey = $request->header('X-API-Key');
        
        if (!$requestApiKey || $requestApiKey !== $apiKey) {
            return response()->json(['error' => 'Invalid or missing API Key'], Response::HTTP_UNAUTHORIZED);
        }
        
        return $next($request);
    }
} 