import Feels from './icons/Feels';
import Wind from './icons/Wind';
import Humidity from './icons/Humidity';
import Pressure from './icons/Pressure';
import Pop from './icons/Pop';
import Visibility from './icons/Visibility';
import { motion } from 'framer-motion';

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop';
  title: string;
  info: string | JSX.Element;
  description: string;
};

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

export const Tile = ({
  icon,
  title,
  info,
  description,
}: Props): JSX.Element => {
  const Icon = icons[icon];
  return (
    <motion.article
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
      className="w-[140px] h-[130px] text-zinc-700 bg-white/30 
    backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between"
    >
      <div className="flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </motion.article>
  );
};
