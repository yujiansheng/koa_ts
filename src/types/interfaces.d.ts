export interface IConfig {
  port: string;
  redis: {
    host: string;
    port: number;
  };
}

export interface IStorage {
  get: (list: string) => Pomise<string[]>;
  add: (list: string, name: string) => Promise<boolean>;
  remove: (list: string, name: string) => Promise<boolean>;
}
