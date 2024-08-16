const { geojsonToArcGIS } = require('@terraformer/arcgis')
const { asyncHandler } = require('./utils')

module.exports.post = asyncHandler(async (req, res) => {
  const geojson = req.body
  const arcgis = geojsonToArcGIS(geojson)
  res.json(arcgis)
})