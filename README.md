## Подключение своего фреймворка (react/vue)

[https://docs.astro.build/en/guides/integrations-guide/react/](https://docs.astro.build/en/guides/integrations-guide/react/)

```html
<SomeReactComponent client:only="react" />
<SomePreactComponent client:only="preact" />
<SomeSvelteComponent client:only="svelte" />
<SomeVueComponent client:only="vue" />
<SomeSolidComponent client:only="solid-js" />
```

## Api

GET /api/getEvents

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
