<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: aaa <aaa@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\MyApp\AppInfo;

use OCP\AppFramework\App;

class Application extends App {
	public const APP_ID = 'myapp';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}
}
