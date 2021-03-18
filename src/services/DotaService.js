import heroesData from './data.json';
import tweetData from './data.json';

export function getLimits () {
  return {
    low: heroesData.heroes[0].id,
    high: heroesData.count
  };
}

export function getData (min, max, delay = 0) {
  min = Math.max(0, min);
  max = Math.min(max, heroesData.count);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(heroesData.heroes.slice(min, max));
    }, Math.max(delay, 0));
  });
}

export function getTweet (id, delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.tweets[id]);
    }, Math.max(delay, 0));
  });
}

export function getDescription (delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.description);
    }, Math.max(delay, 0));
  });
}

export function getMetaDescription (delay = 0) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tweetData.metaDescription);
    }, Math.max(delay, 0));
  });
}

export function getHero (opts) {
  // Data comes in the stringified format
  // because it's taking the benefit of react-cache for the cache hit
  let { id, delay = 0 } = JSON.parse(opts);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(heroesData.heroes.find((hero) => hero.id === id));
    }, delay);
  });
}
