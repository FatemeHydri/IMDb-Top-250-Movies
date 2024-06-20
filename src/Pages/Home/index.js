import titleMaker from "../../helpers/titleMaker";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { useEffect } from "react";
import MovieListByGenre from "../../Components/MovieListByGenre";
import MovieList from "../../Components/MovieList";
import HeroSection from "../../Components/HeroSection";

export default function Home(){
    useEffect(() => {
        titleMaker("IMDb's Top 250 Movies");
    }, [])
    return(
        <PrimaryLayout>
          <HeroSection></HeroSection>
            <div className="container">
              <MovieList page="1" headerDetail={{title:'Special', link:'/allMovie'}} />
              <MovieListByGenre page="1" genreId={1} headerDetail={{title:'Crime', link:'/genre/1'}} />
            </div>
        </PrimaryLayout>
    );
}