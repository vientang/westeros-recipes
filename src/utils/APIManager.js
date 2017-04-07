import superagent from 'superagent'

export default {
  get: (endpoint, params, callback) => {
    superagent
      .get(endpoint)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null)
          return err
        }
        callback(null, response)
      })
  }
}
