import { useParams } from 'react-router';
import { destinations } from '../data';

const SingleDestination = () => {
  const { slug } = useParams();

  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return (
      <div className='text-center py-20'>
        <h1 className='text-3xl font-bold text-error'>Destination Not Found</h1>
        <p className='text-base-content mt-2'>Sorry, we couldn't find the destination you're looking for.</p>
      </div>
    );
  }
  return (
    <div className='max-w-4xl mx-auto px-4 space-y-6'>
      <h1 className='text-4xl font-bold text-primary text-center'>{destination.title}</h1>
      <img src={destination.image} alt={destination.title} className='w-full h-80 object-cover rounded-box shadow-md' />
      <p className='text-lg'>{destination.text}</p>
    </div>
  );
};

export default SingleDestination;
