export class Article {
  id: number;
  header: string;
  description: string;


  constructor(id: number, header: string, description: string) {
    this.id = id;
    this.header = header;
    this.description = description;
  }
}
