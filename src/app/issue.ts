export class Issue {
  id: number;
  user: number;
  description: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
