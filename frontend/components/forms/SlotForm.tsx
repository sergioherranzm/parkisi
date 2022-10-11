import { useForm } from 'react-hook-form';

export const SlotForm = () => {
  const methods = useForm();

  const handle_submit = methods.handleSubmit(async (data) => {
    console.log(data);
    //añadir el parking al data
  });

  return (
    <div tw="flex-col py-6">
      <div>
        <label htmlFor="identification">Identification*:</label>
        <input
          type="text"
          tw="border rounded-lg p-2"
          {...methods.register('identification', {
            required: 'Identification is required',
          })}
        />
      </div>
      <div>
        <label htmlFor="size">Size* (1/2/3):</label>
        <input
          type="text"
          tw="border rounded-lg p-2"
          {...methods.register('size', { required: 'Size is required' })}
        />
      </div>
      <div>
        <label htmlFor="difficulty">
          Parking difficulty (easy/medium/hard):
        </label>
        <input
          type="text"
          tw="border rounded-lg p-2"
          {...methods.register('difficulty')}
        />
      </div>
      <div>
        <label htmlFor="description">Price* (€/day):</label>
        <input
          type="text"
          tw="border rounded-lg p-2"
          {...methods.register('description', { required: 'Size is required' })}
        />
      </div>

      <button tw="border bg-green-200 p-1" onClick={() => handle_submit()}>
        Create slot
      </button>
    </div>
  );
};
