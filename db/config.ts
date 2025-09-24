import { defineDb, defineTable, column } from 'astro:db';

const Events = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    tags: column.text(),
    title: column.text(),
    startAt: column.date(),
    endAt: column.date(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Events
  }
});
