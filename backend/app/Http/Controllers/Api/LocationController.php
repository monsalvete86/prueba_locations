<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class LocationController extends Controller
{
    /**
     * Return a list of locations
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Simulated data - no database needed
        $locations = [
            [
                'code' => 'LOC001',
                'name' => 'Headquarters',
                'image' => 'https://images.adsttc.com/media/images/63f5/0c90/e8da/b036/17fe/0440/newsletter/on-labs-new-global-headquarters-for-on-running-specific-generic_10.jpg?1677003939',
                'creationDate' => Carbon::now()->subMonths(6)->toIso8601String()
            ],
            [
                'code' => 'LOC002',
                'name' => 'Regional Office - North',
                'image' => 'https://www.bop.gov/locations/regional_offices/ncro/NCRO_lrg.jpg',
                'creationDate' => Carbon::now()->subMonths(4)->toIso8601String()
            ],
            [
                'code' => 'LOC003',
                'name' => 'Regional Office - South',
                'image' => 'https://d13oj9mobuhvai.cloudfront.net/ccu.jpg',
                'creationDate' => Carbon::now()->subMonths(3)->toIso8601String()
            ],
            [
                'code' => 'LOC004',
                'name' => 'Branch Office - West',
                'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhqE78bvw5hGzWWwa8xkrefodUrdKAK0xQXCJenqRx3pbOb56q3vN6kZchw99fUGHURA',
                'creationDate' => Carbon::now()->subMonths(2)->toIso8601String()
            ],
            [
                'code' => 'LOC005',
                'name' => 'Branch Office - East',
                'image' => 'https://sjpproperties.com/wp-content/uploads/2014/12/20160531_Mazda.jpg',
                'creationDate' => Carbon::now()->subMonths(1)->toIso8601String()
            ],
        ];

        return response()->json($locations);
    }
} 