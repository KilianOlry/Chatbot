<?php

require 'vendor/autoload.php';

use App\Controllers\Bots;
use App\Controllers\Messages;
use App\Router;
use App\Controllers\User;

new Router([
  'user/:id' => User::class,
  'messages/' => Messages::class,
  'bots/' => Bots::class
]);
