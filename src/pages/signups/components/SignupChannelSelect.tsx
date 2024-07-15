import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { pullChannels } from '@/api/api';
import { useFormContext } from 'react-hook-form';

const SignupChannelSelect = () => {
  const { data: channels, isLoading: channelsLoading } = useQuery({
    queryKey: ['channels'],
    queryFn: pullChannels,
    initialData: [],
  });

  const { register } = useFormContext();

  return (
    <Select
      isRequired
      variant="faded"
      isLoading={channelsLoading}
      label="Signup channel:"
      labelPlacement="outside"
      placeholder="Choose a channel"
      selectionMode="single"
      items={channels}
      description="Discord channel where the signup will be created"
      {...register('discordChannelId', { required: true })}
    >
      {channels.map(channel => (
        <SelectItem key={channel.id} value={channel.id}>
          {channel.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SignupChannelSelect;
