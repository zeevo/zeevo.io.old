/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Image } from 'theme-ui';

function HomeButton(props) {
  return (
    <Link to="/" {...props}>
      <Image
        sx={{
          width: '3rem',
          height: '3rem',
          border: '1px solid',
          borderRadius: '50%',
          borderColor: 'text',
          '&:hover': {
            borderColor: 'text',
            border: '1px solid',
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
