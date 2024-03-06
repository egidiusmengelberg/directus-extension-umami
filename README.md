# Umami Directus Extension

## Description
This project is a directus extension for integrating Umami analytics. It's configurable using environment variables.

## Installation
There are two options to install this extension:

1. Using the extension marketplace inside Directus
2. Using npm (run `npm install directus-extension-umami` inside your directus installation)

## Configuration
To configure the extension, you need to set the following environment variables:

- `UMAMI_SRC`: The source of your umami analytics script (example: `https://umami.yourdomain.com/script.js`)
- `UMAMI_WEBSITE_ID`: The ID of your website
- `CONTENT_SECURITY_POLICY_DIRECTIVES__SCRIPT_SRC`: This is needed to allow loading your umami script. <nobr>It's value should be: `'self' 'unsafe-eval' 'https://umami.yourdomain.com'`</nobr>

The following variables are optional:

- `UMAMI_HOST_URL`: The source of your umami analytics script (example: `https://umami.yourdomain.com`)
- `UMAMI_AUTO_TRACK`: The source of your umami analytics script (example: `false`)
- `UMAMI_CACHE`: If the umami script should cache events (example: `true`)
- `UMAMI_DOMAINS`: The domains the script should send events about (example: `www.yourdomain.com,yourdomain.com`)
- `UMAMI_DEBUG`: If the extension should log debug messages (example: `true`)

For more info you can check the [umami docs](https://umami.is/docs/tracker-configuration)

You can find an example environment file at [`.env.example`](.env.example).

## Usage
When configured correctly you should be able to see events pop up in your umami installation.

## Development
1. Clone the repository: `git clone https://github.com/egidiusmengelberg/directus-extension-umami.git && cd directus-extension-umami`
2. Install dependencies: `npm install`
3. Copy .env.example file to .env: `cp .env.example .env`
4. Configure environment variables in .env (check configuration for detailed explanation)
5. Run directus in docker: `docker compose up`
6. Run `npm run dev` to watch and build the extension

## Contributing
Contributions are welcome! Please create a PR and use the provided linting script inside the package.json (`npm run lint`)

## License
This project is licensed under the [MIT License](LICENSE.md).