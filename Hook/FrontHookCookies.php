<?php
/*************************************************************************************/
/*      This file is part of the Thelia package.                                     */
/*                                                                                   */
/*      Copyright (c) OpenStudio                                                     */
/*      email : dev@thelia.net                                                       */
/*      web : http://www.thelia.net                                                  */
/*                                                                                   */
/*      For the full copyright and license information, please view the LICENSE.txt  */
/*      file that was distributed with this source code.                             */
/*************************************************************************************/

namespace HookCookies\Hook;
use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;


/**
 * Class FrontHookCookies
 * @package HookCookies\Hook
 * @author Damien Foulhoux <dfoulhoux@openstudio.fr>
 */
class FrontHookCookies extends BaseHook {

    public function addCookiesCSS(HookRenderEvent $event)
    {
        $event->add($this->addCSS('assets/css/cookie-headband.css'));
    }

    public function addCookies(HookRenderEvent $event)
    {
        $event
            ->add($this->addJS('assets/js/jquery.cookie.js'))
            ->add($this->addJS('assets/js/cookie-headband.min.js'))
            ->add($this->render("cookie-headband.html"))
            ->add($this->addJS('assets/js/init-cookie-headband.js'))
        ;
    }

}
