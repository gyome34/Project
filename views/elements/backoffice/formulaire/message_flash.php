<?php
	$titrepage = array(
		'posts' => 'article',
		'categories' => 'page',
		'sliders' => 'slider',
		'projects' => 'project',
		'typeprojects' => 'type de projet',
		'typeposts' => 'type d\'article',
		'postscomments' => 'commentaire',
		'mails' => 'messages'
	);
	
	// echo $titrepage[$this->request->controller];
	$messageFlash = Session::read('Flash');
		if($messageFlash){
			echo "<div class='alert alert-".Session::read('Flash.type')."'>";
			echo Session::read('Flash.message').'</div>';
		}
	Session::delete('Flash');
?>