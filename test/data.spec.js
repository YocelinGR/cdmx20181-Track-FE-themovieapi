const {cinema.getMoviInfo} = require('../src/js/data')
describe('getMoviInfo retorna un array', () =>{
  const moviePiratas = cinema.getMovies('Piratas');
  it('moviePiratas es un array', () =>{
      expect(typeof(moviePiratas)).toBe('array');
  });
});
