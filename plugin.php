<?php
/**
 * Plugin Name: ImageFlip Block
 * Plugin URI: https://github.com/cumulus-media/gutenberg-imageflip/
 * Description: Image flip card block for Wordpress' Gutenberg
 * Author: vena
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
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
