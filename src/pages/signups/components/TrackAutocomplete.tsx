import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { pullTracks } from '@/api/api';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

const TrackAutocomplete = () => {
  const { data: tracks, isLoading: tracksLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: pullTracks,
    initialData: [],
  });

  const { register } = useFormContext();

  return (
    <Autocomplete
      isRequired
      validationBehavior="aria"
      variant="faded"
      isLoading={tracksLoading}
      labelPlacement="outside"
      label="Track:"
      placeholder="Choose a track"
      {...register('track', { required: true })}
    >
      {tracks.map(track => (
        <AutocompleteItem key={track.track_id}>
          {track.config_name ? `${track.track_name} (${track.config_name})` : track.track_name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default TrackAutocomplete;
