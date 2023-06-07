# Test task for `optimax-dev`

<div style="width: 300px; height: 55px; margin-bottom: 1rem;">
  <img style=" object-fit: cover; inline-size: 100%; block-size: 100%" src="./public/logo.svg" />
</div>

## Requirements

## Introduction

- [Requirements](https://github.com/optimaxdev/frontend-test)
- [Setup](#setup)
- [Development](#development)
- [Structure](#structure)
- [Acknowledgements](#acknowledgements)

## Setup

For development recommended use [asdf](https://asdf-vm.com/) with `pnpm`

- This application use svg icons that generates to sprite

```sh
pnpm sprite
```

- Use commitizen for commits

```sh
pnpm commit
```

- Installation deps

```sh
pnpm install
```

## Development

Two variations on how to start

### Start local

```sh
pnpm dev
```

### Using a docker

The docker must be installed

```sh
docker compose up -d
```

- Check the result list containers

```bash
$ docker ps

CONTAINER ID   IMAGE           COMMAND                   CREATED              STATUS              PORTS                               NAMES
7e34d10fef75   optimaxdev      "nginx -g 'daemon of…"    About a minute ago   Up About a minute   0.0.0.0:80->80/tcp, :::80->80/tcp   test-task
```

- Stop and remove containers

```bash
docker-compose down
```

- After starting the application, go to navigate <http://localhost>

## Structure

- `assets` - contains static icons for build it to sprite
- `public` - contains static assets
- `config.js` - contains templates for replacing strings with `vite`

```sh
└── src/
    ├── base      - design tokens, colors, font
    ├── entities  - models
    ├── features  - reducers, actions...
    ├── shared    - lib, ui kit, api
    └── main.tsx  - entry point
```

## Acknowledgements

- [Feathericons](https://feathericons.com/) is a collection of simply beautiful open source icons

- [Martian Mono](https://github.com/evilmartians/mono/) Free and open-source monospaced font from Evil Martians
