export class Quote {
    id: number;
    text: string;
    author: string;
    submitter: string;
    date: Date;
    upvote: number;
    downvote: number;
    description: boolean;

    constructor(id: number,text:string, author:string,submitter: string,date: Date ){
        this.id = id;
        this.text = text;
        this.author = author;
        this.date = date;
        this.upvote = 0;
        this.downvote = 0;
        this.submitter = submitter;
        this.description = false;
    }

}

  
