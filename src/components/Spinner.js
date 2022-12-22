import { ThreeDots } from 'react-loader-spinner';

export default function Spinner(size='50', radius='4', color='#73C800') {
  return (
    <ThreeDots
      height={size}
      width={size}
      radius={radius}
      color={color}
    />
  );
}