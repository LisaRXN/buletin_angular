import { IReview } from "../interfaces/review.interface";

export class Review implements IReview {

    id?:number | null = null
    article_id:number = 0
    user_id:number = 0
    // rating:number = 0
    // title:string = "title"
    content:string = "content"
    createdAt?: Date = new Date()
    // likes:number = 0
    firstname?:string = ""
    avatar?:string = ""
}
