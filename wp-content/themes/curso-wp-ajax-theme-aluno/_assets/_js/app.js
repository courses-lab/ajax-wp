jQuery(function($){
	/*****************************
	* Listar Posts
	
	(x) função php
	(x) admin-ajax.php
	() função js
	*****************************/

	var ListarPostsAjax = function(){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'listarPosts'
			},
			beforeSend: function(){
				console.log('carregando posts...');
			}
		})
		.done(function(reposta){
			console.log(reposta);
		})
		.fail(function(){
			console.log('Ops! Algo deu errado.');
		})

	}

	ListarPostsAjax();

	/*****************************
	* Detalhe Post
	*****************************/

	var detalhesPostsAjax = function(){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'detalhesPost'
			},
			beforeSend: function(){
				console.log('carregando detalhes do posts...');
			}
		})
		.done(function(reposta){
			console.log(reposta);
		})		

	}

	// detalhesPostsAjax();

	/*****************************
	* Curtir e Descurtir Posts
	******************************/	

	var curtirPostToggleAjax = function(){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'curtirPostToggle'
			},
			beforeSend: function(){
				console.log('carregando curtir posts...');
			}
		})
		.done(function(reposta){
			console.log(reposta);
		})	

	}

	// curtirPostToggleAjax();

})