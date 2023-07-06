import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiSequelize, SiAuth0 } from 'react-icons/si';
import { TbBrandTypescript, TbBrandVite } from 'react-icons/tb';

const Stack = ({isClicked}) => {
  return (
    <div className={`flex justify-center items-center ${isClicked ? "shadow-md filter brightness-125" : ""}`}>
      <div className="flex flex-wrap justify-center items-center gap-6 text-argentina font-Poppins">
        <div className="flex flex-col items-center">
          <TbBrandVite size={48} />
          <span className="text-sm">Vite</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandTypescript size={48} />
          <span className="text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={48} />
          <span className="text-sm">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={48} />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql size={48} />
          <span className="text-sm">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <SiSequelize size={48} />
          <span className="text-sm">Sequelize</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={48} />
          <span className="text-sm">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiAuth0 size={48} />
          <span className="text-sm">Auth0</span>
        </div>
      </div>
    </div>
  );
};

export default Stack;