import { Badge } from "./Badge";

export interface User {
    id: string;
    name: string;
    points: number;
    badges: Badge[];
}