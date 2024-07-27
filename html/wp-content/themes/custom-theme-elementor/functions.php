<?php

function enqueue_tailwind()
{
  wp_enqueue_style('tailwind-css', get_template_directory_uri() . '/src/output.css');
}
add_action('wp_enqueue_scripts', 'enqueue_tailwind');


function tw_add_support()
{

  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('wp-block-styles');
}

add_action('after_setup_theme', 'tw_add_support');

function wpbeginner_remove_version()
{
  return '';
}
add_filter('the_generator', 'wpbeginner_remove_version');
