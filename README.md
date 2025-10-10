## Api

GET /api/getEvents

types: `types/api/GetEvents.ts`
```ts
type Result = {
  events: {
    id: number;
    title: string;
    tags: string; // 'tag1,tag2,tag3'
    startAt: string; // ISO Date,
    endAt: string; // ISO Date
  };
};
```

POST /api/updateEvent

types: `types/api/UpdateEvent.ts`
```ts
export type Body = {
  id: number;
  startAt: string; // ISO Date
  endAt: string; // ISO Date
};

export type Result = {
  done: true;
};
```
