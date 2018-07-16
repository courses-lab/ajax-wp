jQuery(function($){
	/*****************************
	* Listar Posts
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

	// Ação do botão da categoria
	$('.list-group-item').on('click', function(){
		ListarPostsAjax();

		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
	});

	// Ação do botão da paginação
	$('.page-item').on('click', function(){
		ListarPostsAjax();

		$('.page-item').removeClass('active');
		$(this).addClass('active');
	});

	// Ação do botão limpar busca
	$('#btn-limpar').on('click', function(){
		ListarPostsAjax();

		$(this).addClass('d-none');
		$('#campo-busca').val('');
	});	

	// Ação ao digitar uma palavra na busca
	$('#campo-busca').on('keyup', function(){
		ListarPostsAjax();

		$('#btn-limpar').removeClass('d-none');
	});		

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

	// Ação do botão leia mais
	$('.btn-detalhes').on('click', function(){
		detalhesPostsAjax();
	});

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

	// Ação do botão curtir
	$('.btn-curtir').on('click', function(){
		curtirPostToggleAjax();
	});

})