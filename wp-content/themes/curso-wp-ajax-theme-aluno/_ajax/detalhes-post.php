<?php

	function detalhesPost() {
		echo "detalhesPost";
		exit;
	}

	add_action( 'wp_ajax_detalhesPost', 'detalhesPost' );
	add_action( 'wp_ajax_nopriv_detalhesPost', 'detalhesPost' );		