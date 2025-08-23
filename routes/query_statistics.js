const { createClient } = require('@supabase/supabase-js')
const { asyncHandler, getAuthToken } = require('./utils')

module.exports.post = asyncHandler(async (req, res, next) => {
  const { geometry, layers, srid } = req.body
  const token = getAuthToken(req)
  const supabase = createClient(process.env.SUPABASE_URL, token)
  const result = []

  const { data, error } = await supabase.rpc('query_statistic', {
    geometry,
    layers,
    srid,
  })

  if (error) return next(error)

  const groups = Object.groupBy(data, ({ layerName }) => layerName)

  for (let [layerName, features] of Object.entries(groups)) {
    features = features.filter(({ geometry}) => geometry)
    result.push({ layerName, features })
  }

  return res.json(result)
})
