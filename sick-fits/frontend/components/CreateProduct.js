import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nike333',
    price: 34477,
    description: 'These are the best shoes',
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={inputs.name}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          onChange={handleChange}
          value={inputs.price}
        />
      </label>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
}
