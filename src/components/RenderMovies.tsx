import { FC } from "react";
import { displayMovie } from "@/types/Movietypes";
import Image from "next/image";

const Display: FC<displayMovie> = ({ display, children }) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center p-4">{children}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mx-2">
          {display.map((movie, index) => {
            return (
              <li key={index} className="p-2 max-w-[240px]">
                <a href={`/movies/${movie.slug}`}>
                  <Image
                    src={movie.posterUrl}
                    alt="Movie poster"
                    width={130}
                    height={180}
                    className="w-auto h-auto rounded-2xl"
                  />
                  <p className="text-xl">{movie.title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Display;
