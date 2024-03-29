var config = {
  isDev: process.env.NODE_ENV === 'development' || false,
  mongo: {
    default: {
      uri: process.env.DB_HOST
    },
    development: {
      uri: process.env.DB_HOST
    },
  },
}

export { config }