jQuery(function($){
	/*****************************
	* Listar Posts
	*****************************/

	var page = 1;
	var slug = $('.list-group-item.active').data('slug');
	var string = '';
	var rlp = null;

	var ListarPostsAjax = function(page, slug, string){

		rlp = $.ajax({
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
				if (rlp != null) {
					rlp.abort();
					rlp = null;
				}
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
			$('#lista-posts').html('');

			let success = resposta.success;
			let pages = resposta.data.pages;
			let posts = resposta.data.posts;

			if(success) {
				// listar posts
				$.each(posts, function(i, post){
					$('#lista-posts').append(
						`
							<div class="item" data-id="${post.ID}">
								<div class="card">
									<div class="card-body">
										<h4>${post.titulo}</h4>
										${post.resumo}
									</div>
									<div class="card-footer text-right">
										<button type="button" class="btn btn-sm btn-primary btn-detalhes">Leia mais</button>
										<button type="button" class="btn btn-sm btn-info btn-curtir" data-tipo="like"><span class="text">Curtir</span> <span class="badge badge-light">${post.likes ? post.likes : 0}</span></button>
									</div>
								</div>
							</div>
						`
					)
				});

				// paginação
				if(pages > 0) {
					$('#lista-posts').append(
						`
							<section class="paginacao">
								<nav>
									<ul class="pagination">
										
									</ul>
								</nav>
							</section>
						`
					);

					for (var i = 1; i <= pages; i++) {
						$('.pagination').append(
							`
								<li class="page-item ${ page == i ? 'active' : '' }"><span class="page-link">${i}</a></li>
							`
						);
					}
				}
			} else {
				$('#lista-posts').html(
					`
						<div class="alert alert-danger text-center">
							${resposta.data.msg}
						</div>
					`
				);
			}

			visitantesLikes();
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
		string = '';
	});	

	// Ação ao digitar uma palavra na busca
	$('#campo-busca').on('keyup', function(){
		string = $(this).val();

		if(string.length >= 3) {
			ListarPostsAjax(1, slug, string);
		} else {
			ListarPostsAjax(1, slug);
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

	var curtirPostToggleAjax = function(id, tipo){

		$.ajax({
			url: wp.ajaxurl,
			type: 'GET',
			data: {
				action: 'curtirPostToggle',
				id: id,
				tipo: tipo
			},
			beforeSend: function(){
				$('.progress').removeClass('d-none');
			}
		})
		.done(function(resposta){
			$('.progress').addClass('d-none');
			
			if(tipo == 'like') {
				$('[data-id='+ id +'] .btn-curtir').data('tipo', 'deslike');
				$('[data-id='+ id +'] .btn-curtir').removeClass('btn-info').addClass('btn-success');
			} else {
				$('[data-id='+ id +'] .btn-curtir').data('tipo', 'like');
				$('[data-id='+ id +'] .btn-curtir').removeClass('btn-success').addClass('btn-info');
			}

			$('[data-id='+ id +'] .btn-curtir .badge').html(resposta);


		})	

	}

	// curtirPostToggleAjax();

	// Ação do botão curtir
	$('body').on('click', '.btn-curtir', function(){
		let id = $(this).closest('.item').data('id');
		let tipo = $(this).data('tipo');

		curtirPostToggleAjax(id, tipo);

		let salvos = localStorage.getItem('likes');

		if(!salvos) {
			localStorage.setItem('likes', id.toString());
		} else {
			salvos = salvos.split(',');
			let item = $.inArray(id.toString(), salvos);

			if(item == -1) {
				salvos.push(id.toString());
			} else {
				salvos.splice(item, 1);
			}

			localStorage.setItem('likes', salvos);
		}
	});

	var visitantesLikes = function(){
		let salvos = localStorage.getItem('likes');

		if(salvos) {
			salvos = salvos.split(',');
			salvos.forEach( function(id){
				$('[data-id='+ id +'] .btn-curtir').removeClass('btn-info').addClass('btn-success');
				$('[data-id='+ id +'] .btn-curtir').attr('data-tipo', 'deslike');
			});
		}
	}

})