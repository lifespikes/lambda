<?php

use function LifeSpikes\LaravelBare\Bootstrap\bare;

define('LARAVEL_START', microtime(true));

require __DIR__.'/../vendor/autoload.php';

bare(__DIR__.'/../')->web();
