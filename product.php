<?php

/**
 * Plugin Name: Beer Products custom post
 * Plugin URI: none
 * Description: This plugin is taylormade to accomplish the task that add beercraft products as blog posts
 * Version: 1.0
 * Author: Wes Benvindo
 * Author URI: my github
 */

register_post_meta(
     'post',
     'price',
     array(
         'single'  => true,
         'type'    => 'string',
         'default' => '0.00',
		 'show_in_rest' => true,
     )
 );

#Custom posttypes

function my_custom_post_product() {
  $labels = array(
    'name'               => _x( 'Products', 'post type general name' ),
    'singular_name'      => _x( 'Product', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Product' ),
    'edit_item'          => __( 'Edit Product' ),
    'new_item'           => __( 'New Product' ),
    'all_items'          => __( 'All Products' ),
    'view_item'          => __( 'View Product' ),
    'search_items'       => __( 'Search Products' ),
    'not_found'          => __( 'No products found' ),
    'not_found_in_trash' => __( 'No products found in the Trash' ), 
    'parent_item_colon'  => ’,
    'menu_name'          => 'Products'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our products and product specific data',
    'public'        => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
    'has_archive'   => true,
  );
  register_post_type( 'produtos', $args ); 
}
add_action( 'init', 'my_custom_post_product' );


 
?>