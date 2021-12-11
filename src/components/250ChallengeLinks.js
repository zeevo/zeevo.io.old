/** @jsx jsx */
import { jsx, Flex, Link } from 'theme-ui';
import _ from 'lodash';
import FlexColumn from './FlexColumn';

const TwoHundredFiftyChallengeLinks = function TwoHundredFiftyChallengeLinks({ num, prefix }) {
  const range = [...Array(num).keys()];
  const chunks = _.chunk(range, 6);
  const formatted = chunks.map((chunk) => {
    const first = (chunk[0] + 1).toString();
    const last = (chunk[chunk.length - 1] + 1).toString();
    return `${first.padStart(3, '0')}-${last.padStart(3, '0')}`;
  });
  const by = _.chunk(formatted, Math.floor(formatted.length / 3));
  return (
    <Flex>
      {by.map((chunkArray) => (
        <FlexColumn sx={{ flex: 1 }}>
          {chunkArray.map((chunk) => (
            <Link href={`${prefix}${chunk}.jpg`}>{chunk}</Link>
          ))}
        </FlexColumn>
      ))}
    </Flex>
  );
};

export default TwoHundredFiftyChallengeLinks;
