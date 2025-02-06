export interface IReview {

    id?:number | null,
    article_id:number,
    user_id:number,
    // rating:number | null,
    content:string,
    firstname?:string,
    avatar?:string,
    createdAt?:Date
}
