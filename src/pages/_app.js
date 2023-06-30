import '@/styles/globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 h-screen w-screen overflow-x-hidden">
      <title>FitSpark</title>
      <Component {...pageProps} />
    </div>
  );
}
