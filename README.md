# Lite YouTube Embed

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/sycho/lite-youtube-embed.svg)](https://packagist.org/packages/sycho/lite-youtube-embed) [![Total Downloads](https://img.shields.io/packagist/dt/sycho/lite-youtube-embed.svg)](https://packagist.org/packages/sycho/lite-youtube-embed)

A [Flarum](http://flarum.org) extension.

Replaces iframe YouTube embeds from ![`fof/formatting`](https://github.com/FriendsOfFlarum/formatting) with a lightweight embed implementation using ![`lite-youtube`](https://github.com/justinribeiro/lite-youtube).

Th `MediaEmbed` option in `fof/formatting` must be enabled for this extension to work.

## Installation

Install with composer:

```sh
composer require sycho/lite-youtube-embed:"*"
```

## Updating

```sh
composer update sycho/lite-youtube-embed:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/sycho/lite-youtube-embed)
- [GitHub](https://github.com/sycho/lite-youtube-embed)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
