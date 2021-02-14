export const OptionValues = `
  ...on KeyValueType {
    label
    value
    isDefault
  }
`;

export const ImageSrc = `
  ...on images_Asset {
    optimisedJpeg : url @imagerSrcset (handle: "optimisedJpeg")
    optimisedWebp : url @imagerSrcset (handle: "optimisedWebp")
    optimised : url @imagerSrcset (handle:"optimised")
  }
`

export const RowFields = `
  ...on FieldInterface {
    __typename
    ... on Field_Heading {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      headingSize
    }
    ... on Field_Checkboxes {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      layout
      options {
        ${OptionValues}
      }
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_Radio {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      layout
      options {
        ${OptionValues}
      }
      defaultValue
      cssClasses
      instructions
    }
    ... on Field_Dropdown {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      options {
        ${OptionValues}
      }
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_Email {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_SingleLineText {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_MultiLineText {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_Phone {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_Number {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
    }
    ... on Field_Html {
      id
      uid
      name
      handle
      required
      placeholder
      labelPosition
      type
      errorMessage
      cssClasses
      instructions
      htmlContent
    }
  }
`;

export const FormValues = `
  ... on Form {
    id
    uid
    title
    slug
    enabled
    handle
    siteId
    fields {
      ... on Field_Repeater {
        id
        uid
        name
        addLabel
        handle
        required
        placeholder
        labelPosition
        type
        errorMessage
        cssClasses
        instructions
        minRows
        maxRows
        nestedRows {
          ... on RowInterface {
            __typename
            ... on RowType {
              fields {
                ${RowFields}
              }
            }
          }
        }
        fields {
          ${RowFields}
        }
      }
      ${RowFields}
    }
    pages {
      ... on PageType {
        rows {
          ... on RowType {
            fields {
              ... on Field_Repeater {
                id
                uid
                name
                addLabel
                handle
                required
                placeholder
                labelPosition
                type
                errorMessage
                cssClasses
                instructions
                minRows
                maxRows
                nestedRows {
                  ... on RowInterface {
                    __typename
                    ... on RowType {
                      fields {
                        ${RowFields}
                      }
                    }
                  }
                }
                fields {
                  ${RowFields}
                }
              }
              ${RowFields}
            }
          }
        }
      }
    }
  }
`;

export const PageBlocks = `
  ...on pageBlockContent_MatrixField {
    ... on pageBlockContent_intro_BlockType {
      typeHandle
      imagenes {
        url
        ${ImageSrc}
      }
      texto
      cta {
        ariaLabel
        customText
        target
        text
        title
        type
        url
      }
    }
    ... on pageBlockContent_textoNumerosDinamicos_BlockType {
      typeHandle
      texto
      cta {
        ariaLabel
        customText
        target
        text
        title
        type
        url
      }
      numeros {
        ... on numeros_BlockType {
          cantidad
          sufijo
          titulo
          texto
        }
      }
    }
    ... on pageBlockContent_inmueblesDestacados_BlockType {
      typeHandle
      titulo
    }
    ... on pageBlockContent_descargasDeFormularios_BlockType {
      typeHandle
      texto
      formularioItems {
        ... on formularioItems_BlockType {
          pdf {
            url
          }
          titulo
        }
      }
    }
    ... on pageBlockContent_texto_BlockType {
      typeHandle
      textoItems {
        ... on textoItems_BlockType {
          texto
          tamano
        }
      }
    }
    ... on pageBlockContent_textoCta_BlockType {
      typeHandle
      texto
      cta {
        ariaLabel
        customText
        target
        text
        title
        type
        url
      }
    }
    ... on pageBlockContent_textoEnCajones_BlockType {
      typeHandle
      cajones {
        ... on cajones_BlockType {
          icono {
            url
            ${ImageSrc}
          }
          titulo
          texto
          cta {
            ariaLabel
            customText
            target
            text
            title
            type
            url
          }
        }
      }
    }
    ... on pageBlockContent_textoImagenes_BlockType {
      typeHandle
      texto
      imagenes {
        url
        ${ImageSrc}
      }
    }
    ... on pageBlockContent_textoDestacadoIconos_BlockType {
      typeHandle
      texto
      iconos {
        ... on iconos_BlockType {
          icono {
            url
            ${ImageSrc}
          }
          titulo
          texto
        }
      }
    }
    ... on pageBlockContent_textoDestacadoImagen_BlockType {
      typeHandle
      texto
      imagen {
        url
        ${ImageSrc}
      }
    }
    ... on pageBlockContent_descubraMas_BlockType {
      typeHandle
      titulo
      descubraItems {
        ... on descubraItems_BlockType {
          cta {
            ariaLabel
            customText
            target
            text
            title
            type
            url
          }
          imagen {
            url
            ${ImageSrc}
          }
        }
      }
    }
    ... on pageBlockContent_formulariosDinamicos_BlockType {
      typeHandle
      titulo
      uid
      formularios {
        ... on formularios_BlockType {
          nombre
          formulario {
            ${FormValues}
          }
        }
      }
    }
    ... on pageBlockContent_iconoTexto_BlockType {
      typeHandle
      iconoItems {
        ... on iconoItems_BlockType {
          icono {
            url
            ${ImageSrc}
          }
          titulo
          texto
        }
      }
    }
    ... on pageBlockContent_sedes_BlockType {
      typeHandle
      sedeItems {
        ... on sedeItems_BlockType {
          titulo
          texto
          iframe
        }
      }
    }
    ... on pageBlockContent_formulario_BlockType {
      id
      typeHandle
      formulario {
        ${FormValues}
      }
    }
    ... on pageBlockContent_inmuebles_BlockType {
      typeHandle
    }
  }
`;
