/** @jsx jsx */
import { jsx, Label, Input, Box, Button, Textarea } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ExternalLink from '../components/ExternalLink';
import banner from '../assets/images/banner.jpeg';
import useSiteMetadata from '../hooks/use-site-metadata';

function About() {
  const { title, url, author } = useSiteMetadata();
  const { socials } = author;
  const { twitter, discord, instagram } = socials;
  const pageTitle = 'About me';
  const description = 'Tracking goals to be better.';

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{`${''} - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zeevosec" />
        <meta name="twitter:creator" content="@zeevosec" />
        <meta name="twitter:title" content={`${'pageTitle'} - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url + banner} />
      </Helmet>
      <h1 className="page__title">{pageTitle}</h1>
      <h2>I like to build things with computer code.</h2>
      <p>&quot;How do I interact with you?&quot;</p>
      <ul>
        <li>
          Tweet at me <ExternalLink href={twitter.url}>{twitter.name}.</ExternalLink>
        </li>
        <li>
          Follow me on Instagram <ExternalLink href={instagram.url}>{instagram.name}</ExternalLink>{' '}
          for pictures of food and lizards.
        </li>
        <li>
          <a>
            I am also around on <ExternalLink href={discord.url}>Discord</ExternalLink> at{' '}
            {discord.name}.
          </a>
        </li>
        <li>
          <p sx={{ fontWeight: 'bold' }}>Hire me directly if you need a website built:</p>

          <Box
            as="form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="#"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Label htmlFor="name">Name</Label>
            <Input name="name" mb={3} placeholder="John Smith" />
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" mb={3} placeholder="your.email@gmail.com" />
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              rows="4 z"
              mb={3}
              placeholder="I need a website for my company with email notifications and pictures -- Let's build this together for cheap..."
            />
            <Button
              type="submit"
              sx={{
                width: '100%',
                cursor: 'pointer',
                borderColor: 'background',
                color: 'background',
                backgroundColor: 'primary',
                '&:hover': {
                  color: 'background',
                  backgroundColor: 'secondary',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </li>
      </ul>
    </Layout>
  );
}

export default About;
