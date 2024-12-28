import { useQuery } from '@tanstack/react-query';
import { pullSeries } from '@api/actions';
import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const SeriesSelect = () => {
  const { data: series, isLoading: seriesLoading } = useQuery({
    queryKey: ['series'],
    queryFn: pullSeries,
    initialData: [],
  });

  const { register } = useFormContext();

  return (
    <Select
      isRequired
      variant="faded"
      isLoading={seriesLoading}
      labelPlacement="outside"
      label="Series:"
      placeholder="Choose a series"
      items={series}
      {...register('seriesId', { required: true })}
    >
      {item => (
        <SelectItem key={item.id} value={item.id}>
          {item.name}
        </SelectItem>
      )}
    </Select>
  );
};

export default SeriesSelect;
