define({
  "_widgetLabel": "Modelador de idoneidad",
  "general": {
    "clear": "Borrar",
    "cancel": "Cancelar",
    "save": "Ejecutar",
    "saveAs": "Exportar"
  },
  "saveModel": {
    "save": "Exportar",
    "title": "Título: ",
    "summary": "Resumen: ",
    "description": "Descripción: ",
    "tags": "Etiquetas: ",
    "folder": "Carpeta: ",
    "homeFolderPattern": "{username} (Home)",
    "failed": "Falló al exportar."
  },
  "util": {
    "colorRamp": {
      "1": "Excesivamente bajo",
      "2": "Muy bajo",
      "3": "Bajo",
      "4": "Bajo - Medio",
      "5": "Mediana",
      "6": "Alto - Medio",
      "7": "Alto",
      "8": "Muy alto",
      "9": "Excesivamente alto",
      "low": "Bajo",
      "high": "Alto",
      "tipPattern": "{label} ({value})",
      "flipCaption": "Invertir"
    }
  },
  "wro": {
    "caption": "Modelador de idoneidad",
    "browsePrompt": "Servicio de superposición ponderada",
    "selectLayersCaption": "Seleccionar capas",
    "selectLayers": "Capas",
    "designModelCaption": "Modelo de diseño",
    "designModel": "Modelo de diseño",
    "transparency": "Transparencia",
    "visible": "Visible",
    "total": "Total",
    "unableToLoad": "No se puede cargar el modelo.",
    "projectNotOpen": "No hay ningún proyecto abierto.",
    "readMore": "Leer más",
    "validation": {
      "validating": "Validando...",
      "invalidItemCaption": "Advertencia sobre servicio de superposición ponderada",
      "notAnImageService": "Este elemento no es un servicio de imágenes.",
      "notAWroService": "Este elemento no es un servicio de superposición ponderada.",
      "undefinedUrl": "No se ha definido la dirección URL de este elemento.",
      "inaccessible": "No se puede acceder al servicio.",
      "generalError": "No se puede abrir el elemento.",
      "missingFieldPattern": "{field} es un campo requerido",
      "notAllowRasterFunction": "allowRasterFunction debe estar definido como verdadero",
      "notNearestResampling": "defaultResamplingMethod debe ser Más cercano",
      "notIsWeightedOverlayProp": "La propiedad de la clave IsWeightedOverlay debe estar definida como verdadera",
      "invalidLink": "La dirección URL no es válida. Fallo al abrir el sitio para la capa seleccionada.",
      "unexpectedError": "Se produjo un estado inesperado.",
      "rangeMessage": "El valor debe estar comprendido entre ${0} y ${1}",
      "rangeMessage100": "El valor debe estar comprendido entre 0 y 100",
      "maxLayers": "Se permite un máximo de ${0} capas por servicio, primero debe quitar una capa antes de agregar una nueva.",
      "notFound": "No se encontró la capa ${0} en el servicio de superposición ponderada",
      "wroServiceNotDefined": "No hay ningún servicio de superposición ponderada definido para el modelo.",
      "overlayLayerOutputInvalid": "Falta el valor de salida de los rangos de nueva representación cartográfica [${1}] de la capa de superposición [${0}] o no es válido",
      "overlayLayerInputInvalid": "Falta el valor mínimo/máximo de entrada de los rangos de nueva representación cartográfica [${1}] de la capa de superposición [${0}] o no es válido",
      "overlayLayerRangesMissing": "Faltan los rangos de nueva representación cartográfica de la capa de superposición [${0}]",
      "overlayLayerWeight": "Las ponderaciones de la capa de superposición deben sumar 100",
      "overlayLayerRequired": "Se requiere al menos una capa de superposición",
      "overlayLayerNotDefined": "No se han definido las capas de superposición",
      "requiresColormap": "Esta función de ráster requiere un mapa de color, pero el modelo no tiene una definición de mapa de color válida",
      "createModelError": "Error al crear el modelo",
      "invalidModel": "El modelo no es válido",
      "imageServiceNotDefined": "No se ha definido la capa del servicio de imágenes",
      "imageLayerNotDefined": "No se ha definido la capa del servicio de imágenes",
      "histogramNotDefined": "No se ha definido ninguna función de histograma de superposición ponderada."
    },
    "colorRampLabel": {
      "Green Yellow Red": "Verde Amarillo Rojo",
      "Red Yellow Green": "Rojo Amarillo Verde",
      "Yellow to Dark Red": "De amarillo a rojo oscuro",
      "Dark Red to Yellow": "De rojo oscuro a amarillo",
      "Light Gray to Dark Gray": "De gris claro a gris oscuro",
      "Dark Gray to Light Gray": "De gris oscuro a gris claro",
      "Light Brown to Dark Brown": "De marrón claro a marrón oscuro",
      "Dark Brown to Light Brown": "De marrón oscuro a marrón claro",
      "Full Spectrum - Bright Red to Blue": "Espectro completo - De rojo brillante a azul",
      "Full Spectrum - Bright Blue to Red": "Espectro completo - De azul brillante a rojo",
      "Partial Spectrum - Yellow to Blue": "Espectro parcial - De amarillo a azul",
      "Partial Spectrum - Blue to Yellow": "Espectro parcial - De azul a amarillo",
      "Yellow-Green to Dark Blue": "De amarillo-verde a azul oscuro",
      "Dark Blue to Yellow-Green": "De azul oscuro a amarillo-verde",
      "Cold to Hot Diverging": "Frío a cálido divergente",
      "Hot to Cold Diverging": "Divergencia de frío a caliente",
      "Surface - Low to High": "Superficie - De menor a mayor",
      "Surface - High to Low": "Superficie - De mayor a menor"
    }
  }
});