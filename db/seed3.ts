import { db, Events } from 'astro:db';
import { getEvent, wednesday, sunday} from './utils';

// https://astro.build/db/seed
export default async function seed() {
	await db.delete(Events).all();

	await db.insert(Events).values([
		{ title: 'event 1', ...getEvent(wednesday, 9, 0, 60) },
		{ title: 'event 2', ...getEvent(wednesday, 11, 0, 60) },
		{ title: 'event 2', ...getEvent(wednesday, 13, 0, 120) },
		{ title: 'event 1', ...getEvent(sunday, 9, 0, 60) },
		{ title: 'event 2', ...getEvent(sunday, 11, 15, 60) },
		{ title: 'event 2', ...getEvent(sunday, 13, 55, 120) },
	])
}
