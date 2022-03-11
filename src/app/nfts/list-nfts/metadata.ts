import { Owner } from "./owner";

export class Metadata {
  constructor(
    public id: number,
    public name: string,
    public generation: number,
    public description: string,
    public image_url: string,
    public owner: Owner
  ) {}
}
