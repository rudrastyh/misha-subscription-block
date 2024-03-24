<?php
/**
 * Plugin Name:       My Super Subscription Block
 * Plugin URI:        https://rudrastyh.com
 * Description:       Blah blah blah
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Misha Rudrastyh
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       misha-subscription-block
 *
 * @package           misha
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function misha_misha_subscription_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'misha_misha_subscription_block_block_init' );
