<?php
/**
 * Plugin Name: CardFlip Block
 * Plugin URI: https://github.com/cumulus-digital/gutenberg-imageflip/
 * Description: Image flip card block for Wordpress' Gutenberg
 * Author: vena
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: cumulus-digital/gutenberg-imageflip
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
