<?php

	function curtirPostToggle() {
		
		$postID = $_GET['id'];
		$tipo = $_GET['tipo'];

		$likes = get_post_meta($postID, 'likes', true);

		if($tipo == 'like') {
			update_post_meta($postID, 'likes', $likes + 1, $likes);
		} else {
			update_post_meta($postID, 'likes', $likes - 1, $likes);
		}

		$likes = get_post_meta($postID, 'likes', true);

		echo $likes;

		exit;
	}

	add_action( 'wp_ajax_curtirPostToggle', 'curtirPostToggle' );
	add_action( 'wp_ajax_nopriv_curtirPostToggle', 'curtirPostToggle' );		