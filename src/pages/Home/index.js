import { Container, MovieList, Movie } from "./style";

function Home() {
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        <Movie>
          <a href="" title="">
            <img
              src="https://cdn.awsli.com.br/500x500/1610/1610163/produto/135086192/poster-spider-man-sem-volta-para-casa-no-way-home-a-d0060667.jpg"
              alt=""
            />
            <span>Nome do Filme</span>
          </a>
        </Movie>

        <Movie>
          <a href="" title="">
            <img
              src="https://cdn.awsli.com.br/500x500/1610/1610163/produto/135086192/poster-spider-man-sem-volta-para-casa-no-way-home-a-d0060667.jpg"
              alt=""
            />
            <span>Nome do Filme</span>
          </a>
        </Movie>

        <Movie>
          <a href="" title="">
            <img
              src="https://cdn.awsli.com.br/500x500/1610/1610163/produto/135086192/poster-spider-man-sem-volta-para-casa-no-way-home-a-d0060667.jpg"
              alt=""
            />
            <span>Nome do Filme</span>
          </a>
        </Movie>
      </MovieList>
    </Container>
  );
}

export default Home;
