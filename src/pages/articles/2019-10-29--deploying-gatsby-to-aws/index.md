---
title: Deploying a Gatsby website to AWS S3 with HTTPS
date: '2019-10-30T16:51:00.000Z'
layout: post
draft: false
path: '/2019/08/31/deplying-a-gatsby-site-aws-with-https/'
category: 'Web Development'
tags:
  - 'Web Development'
  - 'AWS'
description: "Want a better, faster, site with Gatsby? Want to finally get off Wordpress with a sustainable solution? Here's how. With Gatsby!"
---

So what seems like eons ago I wrote a post on how to deploy a NodeJS app to AWS. I have recently gotten off that setup and with the power of
[Gatsby](https://www.gatsbyjs.org) we can create a much faster wesbite that leverages modern technology patterns -- With a much better developer experience too as you can write posts in Markdown and check them in to Git!

This post will be using the following stack of technologies and services:

- Gatsby
- AWS (Amazon Web Services)
  - S3
  - Route 53
  - Cloudfront
  - Certificate Manager
- Namecheap

Thats it! I believe this to be the best setup for small sites, blogs, and general use. It doesn't involve a lot of manual heavy lifting and can get you the most bang for your buck. Onwards!

## Create your Gatsby Site

Now I won't be going through how to write your own website (Thats for you to decide!). If you already have a Gatsby site ready to go then skip this part! There are tons of Gatsby tutorials springing up, and a lot of [starters](https://www.gatsbyjs.org/starters/?v=2). Let's just got with a common starter.

```sh
npm install -g gatsby-cli

gatsby new my-site https://github.com/gatsbyjs/gatsby-starter-default

cd my-site

gatsby develop
```

You should see this!

![Gastby Starter](./gastby-starter.png)

## Create your S3 Bucket

![Bucket 1](./bucket-1.png)

Log in to your AWS Console and navigate to S3. Press "Create bucket" and type in your domain name. Keep selecting next until it is created.

Select your newly created bucket and go to Properties.

In "Block public access

![Bucket 1](./bucket-2.png)

Copy and paste the following for your bucket policy. Changing the bucket name for yours. This will make it a public website.

```sh
{
    "Version": "2012-10-17",
    "Id": "Policy1567132375075",
    "Statement": [
        {
            "Sid": "Stmt1567132352689",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME_HERE/*"
        }
    ]
}
```
