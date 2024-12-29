import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { Button, DatePicker } from '@nextui-org/react';
import { now } from '@internationalized/date';
import { DeleteButton } from '@components/DeleteButton';
import React from 'react';

const TimeslotsInput = () => {
  const { control } = useFormContext();

  const {
    fields: timeslotFields,
    append: addTimeslot,
    remove: removeTimeslot,
  } = useFieldArray({
    control,
    name: 'timeslots' as never,
    rules: {
      minLength: 1,
    },
  });

  return (
    <div className="flex flex-col gap-2">
      {timeslotFields.map((item, index) => (
        <div key={item.id} className="flex flex-row gap-2 items-end">
          <Controller
            name={`timeslots.${index}`}
            control={control}
            render={({ field }) => (
              <DatePicker
                isRequired
                variant="faded"
                labelPlacement="outside"
                size="md"
                hourCycle={24}
                showMonthAndYearPickers
                granularity="minute"
                label={`Timeslot ${index + 1} start time (GMT):`}
                defaultValue={now('GMT')}
                onChange={date => {
                  field.onChange(date?.toDate().toISOString());
                }}
              />
            )}
          />
          {timeslotFields.length === 1 ? null : (
            <DeleteButton
              onPress={() => {
                if (timeslotFields.length > 1) {
                  if ('vibrate' in navigator) navigator.vibrate(10);
                  removeTimeslot(index);
                }
              }}
            />
          )}
        </div>
      ))}
      <Button
        className="mt-2 w-full"
        color="primary"
        variant="ghost"
        onPress={() => {
          if ('vibrate' in navigator) navigator.vibrate(10);
          addTimeslot(' ');
        }}
      >
        Add a Timeslot
      </Button>
    </div>
  );
};

export default TimeslotsInput;
