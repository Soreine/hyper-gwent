All files in `core/data/static` are data that should not be bundled in the extension. They will evolve with time. They depend on `gwent-data-release` in particular.

They are exposed here for testing purpose and to build the card data API on the website,

If the extension needs something there, it should instead fetch an updated version from a Web API.