import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: currenError = images.noImage, ...prove }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(currenError);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...prove} onError={handleError} />;
});

export default Image;
