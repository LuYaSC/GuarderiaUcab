<?php

/*
 * This file is part of the Ocrend Framewok 2 package.
 *
 * (c) Ocrend Software <info@ocrend.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

namespace app\controllers;

use app\models as Model;
use Ocrend\Kernel\Router\IRouter;
use Ocrend\Kernel\Controllers\Controllers;
use Ocrend\Kernel\Controllers\IControllers;
  
/**
 * Controlador medicinas/
 *
 * @author Ramon García, Fernando Gomes y Alexander De Azevedo <oeneikaphotos@gmail.com>
*/
  
class medicinasController extends Controllers implements IControllers {

    public function __construct(IRouter $router) {
      parent::__construct($router);  
      global $config; 
      $r = new Model\Medicinas($router);
      switch ($this->method) {
        case 'crear':
          echo $this->template->render('medicinas/crear');
        break;
        case 'editar':
          $r->editar();
        break;
        case 'eliminar':
          # code...
        break;
        default:
          echo $this->template->render('medicinas/medicinas',array(
          'medicinas' => $r->get()
          ));
          break;
      }
      
    }

}