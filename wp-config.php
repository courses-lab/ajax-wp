<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'curso_ajax_wp');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'root');

/** Nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ji!RZIR,W,#.o:ri{-EV$}J}e2/j.AV4=K} >}=3c3wlpldJs.Pp0S=K/. H%kaZ');
define('SECURE_AUTH_KEY',  '=U%ECRs?i-Bq-e#Mt9l]G8/3TP8JS&#1/=$[,M)<3!3%A9?8AGQ81lh33v%(L_@x');
define('LOGGED_IN_KEY',    'YFJm`2V9jQLL^Xj}ph$k%dpT2Pw7]P*O`f|qXn-TBwg5i`KbE_qj{UNZAnwQ5&}K');
define('NONCE_KEY',        '@?s%K~G#R$l _+v$U#P[]v[cNQ7nj+Ihe{gdBc&O~BmW2N5^IBJ|cF${|iQfA2v,');
define('AUTH_SALT',        'b/rHuE-X!lagpjwtz#@miQrKJr@`T T&0?OI07SHM8xUq[-3WF)W6V`A4|//a;Wx');
define('SECURE_AUTH_SALT', '@XC%;E#Q4y$A-.f8iB<FC,Eh7].*gGJAbJ+Ld}m[SL*2YtF~<xpb2|y?ADf_<]]>');
define('LOGGED_IN_SALT',   'Po>=cH`~S4F>c*b{*TYf/9H070gip .n/xO!cbExfPx?.H+SVr^,=-9Gy(dnYU%4');
define('NONCE_SALT',       'k@mb&mUy;Ja.h[0U@]ZLaLT[p3PO#ws E{|b*}x6bf%+oE bZD5/6#+al,0b -a`');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
