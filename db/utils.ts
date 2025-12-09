import { startOfMinute, set, add, nextSunday, nextSaturday } from "date-fns";

export const today = startOfMinute(new Date());
export const yesterday = add(today, { days: -1 });
export const tomorrow = add(today, { days: 1 });
export const saturday = startOfMinute(nextSaturday(new Date()));
export const sunday = startOfMinute(nextSunday(new Date()));

function random(max: number) {
    return Math.round(Math.random()*max);
}

export function getEvent(day: Date, startH: number, startM: number, durM: number): {startAt: Date, endAt: Date, tags: string} {
	const startAt = startOfMinute(set(day, {
		hours: startH,
		minutes: startM,
	}));

	return {
		tags: getRandomTags(),
		startAt,
		endAt: add(startAt, { minutes: durM})
	}
}

export function randomHour() {
    return random(23);
}

export function randomMinute() {
    return random(60);
}

export function randomOnDay(day: Date) {
    return getEvent(day, randomHour(), randomMinute(), randomHour() * 60 + randomMinute())
}

const tags = ['work', 'play', 'study', 'exercise', 'social', 'education'];

function getRandomTag() {
	return tags[random(tags.length - 1)];
}


export function getRandomTags() {
	return [...new Set(Array.from({length: random(2) + 1}, () => getRandomTag()))].join(',');
}