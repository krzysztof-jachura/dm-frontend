import { Button, Input } from '@nextui-org/react';
import { DeleteButton } from '@/components/delete-button';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const CarClassesInput = () => {
  const { register, control } = useFormContext();

  const {
    fields: carClassFields,
    append: addCarClass,
    remove: removeCarClass,
  } = useFieldArray({
    control,
    name: 'classes' as never,
    rules: {
      minLength: 1,
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-end">
        {carClassFields.length === 0 ? (
          <div className="flex flex-row gap-2 flex-nowrap items-end">
            <Input
              isRequired
              isClearable
              variant="faded"
              validationBehavior="aria"
              label={`Car Class 1:`}
              labelPlacement="outside"
              placeholder="Ex. GT3"
              inputMode="text"
              autoComplete="car-class"
              {...register(`classes.0`)}
            />
          </div>
        ) : (
          carClassFields.map((carClass, index) => (
            <div key={carClass.id} className="flex flex-row gap-2 flex-nowrap items-end">
              <Input
                isRequired
                isClearable
                variant="faded"
                label={`Car Class ${index + 1}:`}
                labelPlacement="outside"
                placeholder="Ex. GT3"
                inputMode="text"
                autoComplete="car-class"
                {...register(`classes.${index}`, { setValueAs: (value: string) => value.trim() })}
              />
              {carClassFields.length === 1 ? null : (
                <DeleteButton
                  onClick={() => {
                    if (carClassFields.length > 1) {
                      navigator.vibrate(10);
                      removeCarClass(index);
                    }
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <Button
        className="mt-2 w-full"
        color="primary"
        variant="ghost"
        onClick={() => {
          // @ts-expect-error comparison
          if (carClassFields[carClassFields.length - 1] !== '') {
            navigator.vibrate(10);
            addCarClass(`Class ${carClassFields.length + 1}`);
          }
        }}
      >
        Add a Car Class
      </Button>
    </>
  );
};

export default CarClassesInput;
