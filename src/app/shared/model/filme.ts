export class Filme {
  public id?: string;
  public titulo?: string;
  public ano?: number | null;
  public categoria?: string

  constructor(
    id?: string,
    filme: Filme = {}
  ){
    this.id = id;
    this.titulo = filme.titulo;
    this.ano = filme.ano;
    this.categoria = filme.categoria;
  }


}
