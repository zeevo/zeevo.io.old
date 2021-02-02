/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Image, useThemeUI } from 'theme-ui';

function HomeButton(props) {
  const { theme } = useThemeUI();
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
            border: `1px solid ${theme.colors.primary}`,
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
