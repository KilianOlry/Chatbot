<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\BotModel;

class Bots extends Controller {
  protected object $bot;

  public function __construct($param) {
    $this->bot = new BotModel();

    parent::__construct($param);
  }

  public function postBots() {
    
  }

  public function deleteBots() {
    return $this->bot->delete(intval($this->params['id']));
  }

  public function getBots() {

    return $this->bot->get();
  }

}