import { IArticle } from "../interfaces/article.interface";

export class Article implements IArticle {
    id: number = 0
    title: string = "Titre"
    description: string = "Description"
    image: string = "/img/article/png"
    source: string = "Source"
    category: string = "Movie"
    time: string = "5 min"
    createdAt: Date = new Date()

}

