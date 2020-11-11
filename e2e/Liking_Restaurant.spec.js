/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('.favorite__content');
  I.see('Anda belum menambahkan restoran favorit', '.favorite__content__list__blank');
});

Scenario('liking one restaurant', async (I) => {
  I.see('Anda belum menambahkan restoran favorit', '.favorite__content__list__blank');

  I.amOnPage('/');

  I.seeElement('.card__item__link a');

  const firstResto = locate('.card__item__link a').first();
  const firstRestoName = await I.grabTextFrom(locate('.card__item__content h3').first());
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card__item');
  const likedRestoName = await I.grabTextFrom(locate('.card__item__content h3').first());

  assert.strictEqual(firstRestoName, likedRestoName);
});
