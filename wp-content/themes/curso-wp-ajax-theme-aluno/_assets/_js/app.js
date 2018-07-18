jQuery(function($){
	/*****************************
	* Listar Posts
	*****************************/

	var page = 1;
	var slug = $('.list-group-item.active').data('slug');
	var string = '';

	var ListarPostsAjax = function(page, slug, string){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'listarPosts',
				page: page,
				slug: slug,
				string: string
			},
			beforeSend: function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(reposta){
			$('.progress').addClass('d-none');
			$('#lista-posts').html(reposta);
		})
		.fail(function(){
			console.log('Ops! Algo deu errado.');
		})

	}

	ListarPostsAjax(page);

	// Ação do botão da categoria
	$('.list-group-item').on('click', function(){
		slug = $(this).data('slug');
		ListarPostsAjax(page, slug, string);

		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
	});

	// Ação do botão da paginação
	$('body').on('click', '.page-item', function(){
		page = $(this).find('span').text();
		ListarPostsAjax(page, slug, string);

		$('.page-item').removeClass('active');
		$(this).addClass('active');
	});

	// Ação do botão limpar busca
	$('#btn-limpar').on('click', function(){
		ListarPostsAjax(1);

		$(this).addClass('d-none');
		$('#campo-busca').val('');
	});	

	// Ação ao digitar uma palavra na busca
	$('#campo-busca').on('keyup', function(){
		string = $(this).val();

		if(string.length >= 3) {
			ListarPostsAjax(1, slug, string);
		}

		if(string.length < 1) {
			$('#btn-limpar').addClass('d-none');
		} else {
			$('#btn-limpar').removeClass('d-none');
		}
	});		

	/*****************************
	* Detalhe Post
	*****************************/

	var detalhesPostsAjax = function(id){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'detalhesPost',
				id: id
			},
			beforeSend: function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
			$('#detalhes-post').html(resposta);
			$('#detalhes-post').modal('show');
		})		

	}

	// detalhesPostsAjax();

	// Ação do botão leia mais
	$('body').on('click', '.btn-detalhes', function(){
		let id = $(this).closest('.item').data('id');
		detalhesPostsAjax(id);
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
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(reposta){
			$('.progress').addClass('d-none');
		})	

	}

	// curtirPostToggleAjax();

	// Ação do botão curtir
	$('.btn-curtir').on('click', function(){
		curtirPostToggleAjax();
	});

})