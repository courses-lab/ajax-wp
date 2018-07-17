<?php 
	$detalhes = get_post( 34 );
?>
<div class="modal-dialog modal-lg">
	<div class="modal-content">
		<?php if($detalhes): ?>
			<div class="modal-header">
				<h5 class="modal-title"><?php echo $detalhes->post_title; ?></h5>
				<button type="button" class="close" data-dismiss="modal">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<?php echo wpautop( $detalhes->post_content ); ?>
			</div>
			<div class="modal-footer"></div>
		<?php else: ?>
			<div class="modal-body">
				<div class="alert alert-danger text-center">Não foi encontrado conteúdo deste post.</div>
			</div>
		<?php endif; ?>	
	</div>
</div>