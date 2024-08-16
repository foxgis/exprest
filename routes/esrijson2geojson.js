const { arcgisToGeoJSON } = require('@terraformer/arcgis')
const { asyncHandler } = require('./utils')

module.exports.post = asyncHandler(async (req, res) => {
  const arcgis = req.body
  const geojson = arcgisToGeoJSON(arcgis)
  res.json(geojson)
})