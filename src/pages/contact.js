/** @jsx jsx */
import { jsx, Label, Input, Box, Button, Textarea, useThemeUI, Themed } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ExternalLink from '../components/ExternalLink';
import BorderedBox from '../components/BorderedBox';
import banner from '../assets/images/banner.jpeg';
import useSiteMetadata from '../hooks/use-site-metadata';
import PageHeader from '../components/PageHeader';

const Contact = function Contact() {
  const { colorMode } = useThemeUI();
  const { title, url, author } = useSiteMetadata();
  const { socials } = author;
  const { twitter, discord, instagram } = socials;
  const pageTitle = 'Contact me';
  const description = "Contact me. Let's build cool stuff.";

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{`${pageTitle} - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitter.name} />
        <meta name="twitter:creator" content={twitter.name} />
        <meta name="twitter:title" content={`${pageTitle} - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url + banner} />
      </Helmet>

      <PageHeader>Let&apos;s get in touch.</PageHeader>

      <BorderedBox st={{ marginTop: 3 }}>
        <Themed.ul>
          <Themed.li>
            Tweet at me <ExternalLink href={twitter.url}>{twitter.name}.</ExternalLink>
          </Themed.li>
          <Themed.li>
            Follow me on Instagram{' '}
            <ExternalLink href={instagram.url}>{instagram.name}</ExternalLink> for pictures of food
            and lizards.
          </Themed.li>
          <Themed.li>
            <ExternalLink href={discord.url}>
              I am also around on Discord at {discord.name}.
            </ExternalLink>
          </Themed.li>
        </Themed.ul>
        <div>
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
              variant="primary"
              sx={{
                width: '100%',
                cursor: 'pointer',
              }}
            >
              Submit
            </Button>
          </Box>
        </div>
      </BorderedBox>
    </Layout>
  );
};

export default Contact;
