/** @jsx jsx */
import { jsx } from 'theme-ui';

const StatCard = function({ title, invert = false, addendum, number }) {
  return <div>
    <h3 sx={{ marginTop: '1rem' }}>{title}</h3>
    <div>
      {invert && (
        <p>
          {number > 100 ? `100` : number}
          <span>{title.includes(`%`) && `%`}</span>
        </p>
      )}
      {!invert && (
        <p>
          {number > 100 ? `100` : number}
          {addendum && <span>{addendum}</span>}
        </p>
      )}
    </div>
  </div>
}

export default StatCard;
