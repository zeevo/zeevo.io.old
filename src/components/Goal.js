/** @jsx jsx */
/* eslint-disable-next-line */
import React from 'react';
import { jsx, useThemeUI, Flex } from 'theme-ui';
import { ResponsiveCalendar } from '@nivo/calendar';
import { Chip } from '@nivo/tooltip';

import StatCard from './StatCard';

const Goal = ({ name, subtitle, dates, completed, failed, dayOfYear, streak }) => {
  const { theme } = useThemeUI();

  return (
    <>
      <h2>{name}</h2>
      <p>{subtitle}</p>
      <p>Days Tracked</p>
      <div style={{ height: '130px' }}>
        <ResponsiveCalendar
          data={dates.map(({ date, count, message }) => {
            return { day: date, value: count, message };
          })}
          from={new Date(new Date().getFullYear(), 0, 1)}
          to={new Date(new Date().getFullYear(), 11, 31)}
          emptyColor="#eeeeee"
          colors={['#FF3232', '#44a340', '#696969']}
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
          tooltip={(values) => (
            <div
              sx={{
                background: theme.colors.background,
                color: 'inherit',
                fontSize: 'inherit',
                borderRadius: '2px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
                padding: '5px 9px',
              }}
            >
              <div
                sx={{
                  whiteSpace: 'pre',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {<Chip color={values.color} style={{ marginRight: 7 }} />}
                {values.value !== undefined ? (
                  <span sx={{ color: theme.colors.text }}>
                    {values.day}: <strong>{`${values.value}`}</strong>
                    {values.data.message ? <> - {values.data.message}</> : null}
                  </span>
                ) : (
                  values.id
                )}
              </div>
            </div>
          )}
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
        <StatCard title="Streak" number={streak} />
      </Flex>
    </>
  );
};

export default Goal;
