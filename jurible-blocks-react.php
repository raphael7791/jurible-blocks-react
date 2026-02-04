<?php
/**
 * Plugin Name:       Jurible Blocks React
 * Description:       Blocs Gutenberg personnalisés pour Jurible (Infobox, Sommaire, Lien Leçon, Bouton, Citation, Flashcards, Assessment)
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Jurible
 * License:           GPL-2.0-or-later
 * Text Domain:       jurible-blocks-react
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function jurible_blocks_react_init() {
	register_block_type( __DIR__ . '/build/infobox' );
	register_block_type( __DIR__ . '/build/sommaire' );
	register_block_type( __DIR__ . '/build/lien-lecon' );
	register_block_type( __DIR__ . '/build/bouton' );
	register_block_type( __DIR__ . '/build/citation' );
	register_block_type( __DIR__ . '/build/flashcards' );
	register_block_type( __DIR__ . '/build/assessment' );
	register_block_type( __DIR__ . '/build/alert' );
	register_block_type( __DIR__ . '/build/breadcrumb' );
	register_block_type( __DIR__ . '/build/step-indicator' );
	register_block_type( __DIR__ . '/build/card-cours' );
	register_block_type( __DIR__ . '/build/card-testimonial' );
	register_block_type( __DIR__ . '/build/badge-trust' );
	register_block_type( __DIR__ . '/build/pricing-duration-selector' );
	register_block_type( __DIR__ . '/build/card-formule-reussite' );
	register_block_type( __DIR__ . '/build/card-pricing-suite-ia' );
	register_block_type( __DIR__ . '/build/card-produits-comparatif' );
	// register_block_type( __DIR__ . '/build/playlist' );
}
add_action( 'init', 'jurible_blocks_react_init' );
