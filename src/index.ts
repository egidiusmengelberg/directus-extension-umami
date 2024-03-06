import { defineHook } from '@directus/extensions-sdk'

export default defineHook(({ embed }, { env, logger }) => {
  if (!env.UMAMI_SRC) {
    logger.error('UMAMI: UMAMI_SRC is not defined')
    return
  }

  if (!env.UMAMI_WEBSITE_ID) {
    logger.error('UMAMI: UMAMI_WEBSITE_ID is not defined')
    return
  }

  let element = `<script defer src="${env.UMAMI_SRC}" data-website-id="${env.UMAMI_WEBSITE_ID}"`

  if (env.UMAMI_HOST_URL) {
    element += ` data-host-url="${env.UMAMI_HOST_URL}"`
  }

  if (env.UMAMI_AUTO_TRACK) {
    element += ` data-auto-track="${env.UMAMI_AUTO_TRACK}"`
  }

  if (env.UMAMI_CACHE) {
    element += ` data-cache="${env.UMAMI_CACHE}"`
  }

  if (env.UMAMI_DOMAINS) {
    element += ` data-domains="${env.UMAMI_DOMAINS}"`
  }

  element += '></script>'

  if (env.UMAMI_DEBUG) {
    logger.info(`UMAMI: Embedding script -> ${element}`)
  }

  embed('head', element)
})
