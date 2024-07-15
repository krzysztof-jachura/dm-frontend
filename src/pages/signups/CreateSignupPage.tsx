import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SeriesSelect from '@/pages/signups/components/SeriesSelect';
import TrackAutocomplete from '@/pages/signups/components/TrackAutocomplete';
import SignupChannelSelect from '@/pages/signups/components/SignupChannelSelect';
import { I18nProvider } from '@react-aria/i18n';
import { Button, Input } from '@nextui-org/react';
import CarClassesInput from '@/pages/signups/components/CarClassesInput';
import TimeslotsInput from '@/pages/signups/components/TimeslotsInput';
import ScheduledSignupDateInput from '@/pages/signups/components/ScheduledSignupDateInput';
import DurationInput from '@/pages/signups/components/DurationInput';
import { submitSignup } from '@/api/api';
import { useMutation } from '@tanstack/react-query';

export type SignupFormData = {
  seriesId: string;
  name: string;
  track: string;
  duration: number;
  durationAsLaps: boolean;
  classes: string[];
  timeslots: string[];
  discordChannelId: string;
  scheduledSignupDate?: string;
  logo?: string;
};

const CreateSignupPage = () => {
  const formMethods = useForm<SignupFormData>({
    mode: 'onSubmit',
    defaultValues: {
      timeslots: [new Date().toISOString()],
      classes: ['Class 1'],
      durationAsLaps: false,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: submitSignup,
  });

  const onSubmit = (data: SignupFormData) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-4 w-[700px] max-w-full mx-auto my-auto pb-4">
      <form
        className="flex flex-col gap-4 w-[700px] max-w-full mx-auto my-auto pb-4"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <I18nProvider locale="en-GB">
          <FormProvider {...formMethods}>
            <SeriesSelect />
            <TrackAutocomplete />

            <Input
              isRequired
              validationBehavior="native"
              variant="faded"
              label="Event name:"
              labelPlacement="outside"
              placeholder="Ex. Watkins Glen 6h"
              autoComplete="off"
              {...formMethods.register('name')}
            />

            <Input
              label="Event logo URL:"
              variant="faded"
              description="(optional that defaults to series logo if not provided)"
              labelPlacement="outside"
              placeholder="Ex. https://example.com/logo.png"
              autoComplete="off"
              {...formMethods.register('logo')}
            />

            <DurationInput />
            <CarClassesInput />
            <TimeslotsInput />
            <ScheduledSignupDateInput />
            <SignupChannelSelect />

            <Button
              className="mt-4 w-full text-medium"
              color="primary"
              type="submit"
              onClick={() => navigator.vibrate(10)}
              isLoading={isPending}
            >
              Create Signup
            </Button>
          </FormProvider>
        </I18nProvider>
      </form>
    </div>
  );
};

export default CreateSignupPage;
