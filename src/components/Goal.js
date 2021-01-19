import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import { useThemeUI } from 'theme-ui';
import { ResponsiveCalendar } from '@nivo/calendar';
import { getYear } from 'date-fns';

import StatCard from './StatCard';
import { Flex } from 'theme-ui';

const Goal = ({ name, subtitle, dates, completed, failed, dayOfYear }) => {
  React.useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  const context = useThemeUI();
  const { theme } = context;

  console.log(theme);
  return (
    <>
      <h2>{name}</h2>
      <p>{subtitle}</p>
      <p>Days Tracked</p>
      <div style={{ height: '130px' }}>
        <ResponsiveCalendar
          data={dates.map(({ date, count }) => {
            return { day: date, value: count };
          })}
          from={new Date(new Date().getFullYear(), 0, 1)}
          to={new Date(new Date().getFullYear(), 11, 31)}
          emptyColor="#eeeeee"
          colors={['#44a340']}
          margin={{ left: 20 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          theme={{
            textColor: theme.colors.text,
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left',
            },
          ]}
        />
      </div>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <StatCard title="Done Days" number={completed} />
        <StatCard title="Failed Days" number={failed} invert={failed !== 0} />
        <StatCard
          title="Success %"
          number={Math.round((completed / dayOfYear) * 100)}
          addendum="%"
          invert={Math.round((completed / dayOfYear) * 100) < 80}
        />
      </Flex>
    </>
  );
};

export default Goal;
