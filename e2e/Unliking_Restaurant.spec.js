/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(async (I) => {
  I.amOnPage('/#/favorites');

  I.seeElement('.favorite__content');
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

Scenario('unliking restaurant', async (I) => {
  I.seeElement('.card__item');

  I.seeElement('.card__item__link a');

  const firstResto = locate('.card__item__link a').first();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');

  I.see('Anda belum menambahkan restoran favorit', '.favorite__content__list__blank');
});
