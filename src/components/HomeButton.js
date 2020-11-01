/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Image } from 'theme-ui';

function HomeButton(props) {
  return (
    <Link href="/" {...props}>
      <Image
        sx={{
          width: '2rem',
          height: '2rem',
          border: '1px solid',
          borderRadius: '1rem',
          borderColor: 'text',
          '&:hover': {
            borderColor: 'text',
            border: '3px solid',
          },
          '&:active': {
            borderColor: 'text',
          },
        }}
        src="/photo.png"
      />
    </Link>
  );
}

export default HomeButton;
