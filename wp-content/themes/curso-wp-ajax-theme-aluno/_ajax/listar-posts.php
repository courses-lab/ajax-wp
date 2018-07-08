<?php

	function listarPosts() {
		echo "listarPosts";
		exit;
	}

	add_action( 'wp_ajax_listarPosts', 'listarPosts' );
	add_action( 'wp_ajax_nopriv_listarPosts', 'listarPosts' );		