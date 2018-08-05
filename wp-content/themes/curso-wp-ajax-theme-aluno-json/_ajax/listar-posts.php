<?php

	function listarPosts() {

		$page = $_GET['page'];
		$slug = $_GET['slug'];
		$string = $_GET['string'];

		$args  =  [ 
			'post_type' => 'post',
			'posts_per_page' => 2,
			'paged' => ($page) ? $page : 1,
			'category_name' => $slug,
			's' => $string
		];
		
		// armazena a query
		$posts = new WP_Query($args);

		// pega a quantidade de páginas
		$totalPages = $posts->max_num_pages;

		// verifica se tem posts na query
		if ($posts->have_posts()) {

			// armazena todos os posts
			$itens = [];			

			// cria o loop
			while($posts->have_posts()){

				$posts->the_post();

				// pega a quantidade de likes do post
				$likes = get_post_meta(get_the_ID(), 'likes', true);

				// armazena todos os campos do post
				$item = [
					'ID' => get_the_ID(),
					'titulo' => get_the_title(),
					'resumo' => get_the_excerpt(),
					'likes' => $likes
				];

				// empurra todos os posts para o array itens
				array_push($itens, $item);
			}

			// envia na resposta todos os dados que precisava
			$resposta = [
				'msg' => 'Vários posts foram encontrados.',
				'posts' => $itens,
				'page' => $page,
				'pages' => $totalPages
			];

			// 
			wp_send_json_success($resposta);
		} else {
			$resposta = [
				'msg' => 'Nenhum post encontrado.'
			];

			// envia os posts como json
			wp_send_json_error($resposta);
		}
	}

	add_action( 'wp_ajax_listarPosts', 'listarPosts' );
	add_action( 'wp_ajax_nopriv_listarPosts', 'listarPosts' );		