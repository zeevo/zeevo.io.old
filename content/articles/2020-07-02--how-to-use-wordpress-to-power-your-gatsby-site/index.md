---
title: How to Use Wordpress to Power Your Gatsby Site
date: '2020-01-02T12:00:00.000Z'
layout: post
draft: true
path: '/2020/01/02/how-to-use-wordpress-to-power-your-gatsby-site/'
category: 'Web Development'
tags:
  - 'Web Development'
description: 'Want to use Wordpress as a backend CMS for your Gatsby site? Here is how: the definitive guide.'
---

## Stack we are going to use

- AWS Lightsail for Wordpress
- Netlify for our Gatsby site

## Setup Wordpress on AWS LightSail

### Plugins

- wpgraphql
- Advanced Custom Fields
- acf for wpgraphql

- Custom Post Types
  - https://docs.wpgraphql.com/getting-started/custom-post-types/
    - Custom Post Types GraphQL
      - https://github.com/wp-graphql/wp-graphql-custom-post-type-ui

### Themes

- wordpress-headless

## Setup CloudFlair for easy DNS routing

### Subdomain to netlify
