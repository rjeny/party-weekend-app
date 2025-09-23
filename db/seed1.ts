import { db, Events } from 'astro:db';
import { yesterday, getEvent, tomorrow, today, randomOnDay } from './utils';

// https://astro.build/db/seed
export default async function seed() {
	await db.delete(Events).all();

	await db.insert(Events).values([
		{ title: 'Yesterday event', ...getEvent(yesterday, 12, 30, 60) },
		{ title: 'Tomorrow event', ...getEvent(tomorrow, 12, 30, 60) },
		{ title: 'Night party 1', ...getEvent(yesterday, 21, 0, 60*5) },
		{ title: 'Night party 2', ...getEvent(today, 21, 0, 60*5) },
		{ title: 'Today 1', ...randomOnDay(today) },
		{ title: 'Today 2', ...randomOnDay(today) },
		{ title: 'Today 3', ...randomOnDay(today) },
		{ title: 'Today 4', ...randomOnDay(today) },
		{ title: 'Today 5', ...randomOnDay(today) },
		{ title: 'Throw that day', startAt: yesterday, endAt: tomorrow },
	])
}
