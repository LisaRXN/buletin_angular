import { ISource } from "../interfaces/source.interface";

export class Source implements ISource {
    id: number = 1
    name: string = "DailyGame"
    image: string = "img/image.png"
    category: string ="Video Game"

      
    constructor() {
    }

  }