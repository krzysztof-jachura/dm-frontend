import { DatePicker, Tab, Tabs } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
import { now } from '@internationalized/date';
import React, { useState } from 'react';

const ScheduledSignupDateInput = () => {
  const { control, setValue } = useFormContext();

  const [submitImmediately, setSubmitImmediately] = useState<boolean>(true);

  return (
    <>
      <Tabs
        size="md"
        classNames={{ tabList: 'w-full' }}
        color="primary"
        onClick={() => {
          navigator.vibrate(10);
        }}
        onSelectionChange={index => {
          const value = !+index;
          value
            ? setValue('scheduledSignupDate', null)
            : setValue('scheduledSignupDate', now('GMT').toDate().toISOString());
          setSubmitImmediately(value);
        }}
      >
        <Tab key={0} title="Send immediately" value={0} />
        <Tab key={1} title="Send at specific day" value={1} />
      </Tabs>
      {submitImmediately ? null : (
        <Controller
          name={'scheduledSignupDate'}
          control={control}
          defaultValue={now('GMT').toDate().toISOString()}
          render={({ field: { onChange } }) => (
            <DatePicker
              isRequired
              variant="faded"
              labelPlacement="outside"
              size="md"
              showMonthAndYearPickers
              granularity="day"
              label="Submission day:"
              defaultValue={now('GMT')}
              onChange={date => {
                onChange(date.toDate().toISOString());
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default ScheduledSignupDateInput;
