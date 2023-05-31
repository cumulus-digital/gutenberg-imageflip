<?php

namespace CRSG\Wordpress\Gutenberg\ImageFlip;

/*
 * Plugin Name: CardFlip Block
 * Plugin URI: https://github.com/cumulus-digital/gutenberg-imageflip/
 * Description: Image flip card block for Wordpress' Gutenberg
 * Author: vena
 * Version: 2.1.0
 * Author: vena
 * License: UNLICENSED
 * Requires at least: 5.6
 * GitHub Plugin URI: cumulus-digital/gutenberg-imageflip
 *
 * @category Gutenberg
 * @author vena
 * @version 2.0.0
 */
// Exit if accessed directly.
if ( ! \defined( 'ABSPATH' ) ) {
	exit;
}

// Editor Assets
function editor_assets() {
	$url = \untrailingslashit( \plugin_dir_url( __FILE__ ) );

	\wp_enqueue_style(
		'gutenberg_imageflip-backend-css', // Handle.
		$url . '/build/backend.css'
	);

	$assets = include \plugin_dir_path( __FILE__ ) . 'build/backend.asset.php';
	\wp_enqueue_script(
		'gutenberg_imageflip-backend-js', // Handle.
		$url . '/build/backend.js',
		$assets['dependencies'],
		$assets['version'],
		true
	);
}
\add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\editor_assets' );

// Frontend Assets
function frontend_assets() {
	if ( \has_block( 'cumulus-gutenberg/imageflip' ) && ! \is_admin() ) {
		$url = \untrailingslashit( \plugin_dir_url( __FILE__ ) );

		\wp_enqueue_style(
			'gutenberg_imageflip-frontend-css', // Handle.
			$url . '/build/frontend.css'
		);

		/*
		$assets = include( \plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php');
		\wp_enqueue_script(
			'gutenberg_imageflip-frontend-js', // Handle.
			$url . '/build/frontend.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
		*/
	}
}
\add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\frontend_assets' );
