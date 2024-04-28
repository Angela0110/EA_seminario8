import { User } from "./user";

export interface Post {
    _id?: String; // Optional _id field
    title: string;
    content: string;
    author: User; // Reference to the User collection
}



