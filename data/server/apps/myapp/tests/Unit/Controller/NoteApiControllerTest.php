<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: aaa <aaa@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\MyApp\Tests\Unit\Controller;

use OCA\MyApp\Controller\NoteApiController;

class NoteApiControllerTest extends NoteControllerTest {
	public function setUp(): void {
		parent::setUp();
		$this->controller = new NoteApiController($this->request, $this->service, $this->userId);
	}
}
