'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setCountValue } from '@/redux/counterSlice';

export default function Home() {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='flex h-screen justify-center flex-col items-center gap-10'>
      <h1 className='text-6xl font-bold text-center'>
        Count: {count}
      </h1>
      <div className="flex gap-5">
        <button
          className='bg-gray-700 text-white px-5 py-2'
          onClick={() => {
            dispatch(setCountValue(
              count + 1
            ));
          }}
        >
          Increment
        </button>
        <button
          className='bg-gray-700 text-white px-5 py-2'
          onClick={() => {
            dispatch(setCountValue(
              count - 1
            ));
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
