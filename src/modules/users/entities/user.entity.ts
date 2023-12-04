import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  image?: string;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
