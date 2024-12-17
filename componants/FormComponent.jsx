import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const productSchema = z.object({
  name: z.string().min(1, 'please enter name'),
  price: z
    .number()
    .min(1, 'please enter number')
    .or(z.string().regex(/^\d+$/, 'please enter number')),
});

const FormComponent = ({ addProduct }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    addProduct({ name: data.name, price: parseFloat(data.price) });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 p-5 bg-gray-100 rounded-md shadow-md"
    >
      <input
        type="text"
        placeholder=" Name producer"
        {...register('name')}
        className="p-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="text"
        placeholder=" price"
        {...register('price')}
        className="p-2 border rounded"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <button
        type="submit"
        className="py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add produce
      </button>
    </form>
  );
};

export default FormComponent;
