import { Input, Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const DurationInput = () => {
  const { register, setValue } = useFormContext();

  return (
    <div className="flex flex-row gap-2 items-end">
      <Input
        isRequired
        validationBehavior="native"
        variant="faded"
        type="number"
        label="Length:"
        labelPlacement="outside"
        placeholder="Ex. 360"
        {...register('duration', { valueAsNumber: true })}
      />
      <Tabs
        size="md"
        color="primary"
        onSelectionChange={index => {
          setValue('durationAsLaps', !!+index);
        }}
      >
        <Tab key="0" title="Minutes" value="0" />
        <Tab key="1" title="Laps" value="1" />
      </Tabs>
    </div>
  );
};

export default DurationInput;
