import { db, Events } from 'astro:db';
import { getEvent, wednesday, sunday} from './utils'
import { add } from 'date-fns';

// https://astro.build/db/seed
export default async function seed() {
	await db.delete(Events).all();

	const border1 = getEvent(wednesday, 0, 0, 60);

	await db.insert(Events).values([
		{ title: 'border 1',  startAt: add(border1.startAt, { hours: -4}), endAt: border1.endAt, tags: border1.tags},
		{ title: 'event 1', ...getEvent(wednesday, 9, 0, 60) },
		{ title: 'event 2', ...getEvent(wednesday, 10, 0, 60) },
		{ title: 'event 3', ...getEvent(wednesday, 12, 0, 60) },
		{ title: 'event midnight', ...getEvent(wednesday, 23, 0, 60*4) },
		{ title: 'event 4', ...getEvent(sunday, 12, 0, 60) },
		{ title: 'event 5', ...getEvent(sunday, 13, 0, 90) },
		{ title: 'border 2', ...getEvent(sunday, 23, 0, 60*5) },
	])
}
