import { User } from "./User";

export interface Quest {
    id: string;
    name: string;
    description: string;
    points: number;
    key: string;
    user: User;
}