---
title: How to Use Wordpress to Power Your Gatsby Site
date: '2020-07-14T12:00:00.000Z'
layout: post
draft: true
path: '/2020/07/14/how-to-use-wordpress-to-power-your-gatsby-site/'
category: 'Web Development'
tags:
  - 'Web Development'
  - 'Gatsby'
description: 'Want to use Wordpress as a backend CMS for your Gatsby site? Here is how: The Definitive Guide.'
---

# Run this entire post through a spell-checker

## Introduction

We have come a long way in terms of how we build websites in the modern age.
From homebrewed HTML files, to PHP servers, to full JavaScript Web Applications,
the web has just gotten better and better. The [JAMstack](https://jamstack.org/)
is here and it is awesome. JAMstack is a combination of **J**avaScript,
**A**PIs, and **M**arkdown to build static sites from dynamic content. It has a
fantastic Developer Experience, increased security, cheap hosting, and extreme
performance.

Today we will be building one of these application using [Gatsby](https://gatsby.org) and [Wordpress](https://wordpress.org/) + [WPGraphQL](https://www.wpgraphql.com/).

## Full Stack we are going to use

The following stack may seem intimidating, but each piece is very easy to use
with amazing GUIs. This setup is extremely cheap--Only the Wordpress component
is not free--And it has the flexibility to be a reliable production deployment.

- **Gatsby App [gatsby-starter-zeevo-wordpress](https://github.com/zeevosec/gatsby-starter-zeevo-wordpress)**
  - A super simple Gatsby app powered by Wordpress. Open source!
- **AWS Lightsail for Wordpress**
  - An easy to use Wordpress as a service. Use whatever your favorite Wordpress hosting service is!
- **Netlify for hosting**
  - Netlify is the leader in JAMStack hosting. Free!
- **Cloudflare for DNS and HTTPS**
  - Cloudflare is a great service for DNS. Free!

## Setup Wordpress on AWS Lightsail

AWS Lightsail is a great service that allows you to spin up Wordpress
installations in seconds, and removes all of the hassel of server
administration. You simply checkout your Wordpress image and size, and receive
an IP of the running server.

![Lightsail](./lightsail.png)

After checkout, you will be able to get your default SSH keys from your
navigating to your account page in the top right of the Lightsail dashboard. You
will need your keys to SSH into your server and install plugins. It may or may
not be called `us-east-2.pem`. Make sure you save these somewhere secure.

You can SSH into your Wordpress instance with the following command. Run it
inside your favorite terminal emulator:

```
chmod 400 your-key.pem
ssh -i your-key.pem bitnami@<your-lightsail-ip-address>
```

Once you are in, grab your username and password from the credentials file in
your home folder.

```
cat bitnami_credentials
```

Login to your Wordpress admin dashboard that is located at
`<your-lightsail-ip-address>/wp-admin`

You should now have a terminal logged in to your server and the admin dashboard ready to go in your browser.

![Wordpress Admin](./wordpress-admin.png)

### Install plugins

- wpgraphql
- Advanced Custom Fields
- acf for wpgraphql

- Custom Post Types
  - https://docs.wpgraphql.com/getting-started/custom-post-types/
    - Custom Post Types GraphQL
      - https://github.com/wp-graphql/wp-graphql-custom-post-type-ui

### Themes

You can use any theme you want on Wordpress -- But remember, this is not going
to be reflected to your users. Your users are going to see your Gatsby site, not
your Wordpress site. Because of this, I recommend using a headless theme, or
even not giving any thought to themes at all.

You can install a headless them by n

- wordpress-headless

## DNS

DNS is the protocol in which browsers and other application can find the actual
IP Address of the server which we want to visit. Think of it as though you are
translating people (domains) to phone numbers (ip addresses) in a big phonebook.

I recommend using the following stack of services for DNS/Domain Name-related things:

- **Namecheap** to buy your domain name
- **Cloudflare** for domain record configuration
- **Netlify** for site hosting

We are going to achieve the DNS setup recommended by Netlify, only using Cloudflare's Nameservers instead of Netlify's. There is nothing wrong with using Netlify's, but Cloudflare is free as well and is extremely powerful and flexible.

Essentially we want to use `www.yourdomain.com` as our **primary** domain and
`yourdomain.com` seconday. You can think of `www.yourdomain` as where your
website lives, and `yourdomain.com` as the base domain from which you can setup
other types of DNS records against (mail, etc). The reason for this can be
somewhat technical, but Jen Kagan from Netlify does a great job summarizing this
concisely:

> You might think that you could simply configure a CNAME record for the apex
> domain—point example.com to <automatically-generated-name>.netlify.app—but you
> shouldn’t! This could severely break other things for you. According to the
> DNS specification, any domain name that has a CNAME record set cannot have any
> other DNS records associated with it. This means that if you set up a CNAME
> record for example.com, you wouldn’t be able to set up MX records—so you
> wouldn’t be able to receive email at that domain. Want to validate your domain
> for Google’s webmaster tools? Or perhaps you’d like to use the SPF system to
> help verify your email sending hosts? You’d need to add a TXT record to the
> apex domain, but you wouldn’t be allowed to because you already have a CNAME.
>
> -- <cite>Jen Kagan</cite>

1. Purchase your Domain from [Namecheap](https://www.namecheap.com/)

2. Sign up with [Cloudflare](https://www.cloudflare.com/)

3. Sign up with [Netlify](https://link)

## Setup CloudFlare for easy DNS routing

### Subdomain to netlify
