<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\MessageModel;

class Messages extends Controller {
  protected object $message;

  public function __construct($param) {
    $this->message = new MessageModel();

    parent::__construct($param);
  }

  public function postMessages() {
    
  }

  public function deleteMessages() {
    return $this->message->delete(intval($this->params['id']));
  }

  public function getMessages() {

    return $this->message->get();
  }

}