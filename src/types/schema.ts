/**
 * @module types/schema
 * @description Type definitions for schema.org
 *   vocabulary data structures. These types
 *   represent the shape of the parsed JSON-LD
 *   schema.org vocabulary file.
 *
 * @since 0.1.0
 * @author Claude Code
 * @license MIT
 */

// ─────────────────────────────────────────────
// Schema entry types
// ─────────────────────────────────────────────

/**
 * Represents a single entry in the schema.org
 * vocabulary graph. Each entry can be a type,
 * property, or enumeration value.
 *
 * @interface SchemaEntry
 */
export interface SchemaEntry {
  /**
   * The unique identifier for this entry,
   * typically a full URL like
   * "https://schema.org/Thing".
   *
   * @type {string}
   */
  '@id': string

  /**
   * The RDF type of this entry. Common values
   * include "rdfs:Class" for types and
   * "rdf:Property" for properties.
   *
   * @type {string | string[]}
   */
  '@type': string | string[]

  /**
   * The human-readable label for this entry.
   *
   * @type {string | undefined}
   */
  'rdfs:label'?: string

  /**
   * The human-readable comment/description
   * for this entry.
   *
   * @type {string | { '@value': string } | undefined}
   */
  'rdfs:comment'?:
    | string
    | { '@value': string }

  /**
   * The parent class(es) this entry inherits
   * from, if this entry is a class type.
   *
   * @type {{ '@id': string } | Array<{ '@id': string }> | undefined}
   */
  'rdfs:subClassOf'?:
    | { '@id': string }
    | Array<{ '@id': string }>
}

// ─────────────────────────────────────────────
// Schema type
// ─────────────────────────────────────────────

/**
 * Represents a class/type definition in the
 * schema.org vocabulary.
 *
 * @interface SchemaType
 * @extends {SchemaEntry}
 */
export interface SchemaType
  extends SchemaEntry {
  /**
   * The RDF type is always "rdfs:Class" for
   * schema.org type definitions.
   *
   * @type {'rdfs:Class'}
   */
  '@type': 'rdfs:Class'

  /**
   * The properties that belong to this type.
   * This is populated after cross-referencing
   * with the property definitions.
   *
   * @type {SchemaProperty[] | undefined}
   */
  properties?: SchemaProperty[]
}

// ─────────────────────────────────────────────
// Schema property
// ─────────────────────────────────────────────

/**
 * Represents a property definition in the
 * schema.org vocabulary.
 *
 * @interface SchemaProperty
 * @extends {SchemaEntry}
 */
export interface SchemaProperty
  extends SchemaEntry {
  /**
   * The RDF type is always "rdf:Property" for
   * schema.org property definitions.
   *
   * @type {'rdf:Property'}
   */
  '@type': 'rdf:Property'

  /**
   * The domain (applicable types) for this
   * property, indicating which types can
   * have this property.
   *
   * @type {{ '@id': string } | Array<{ '@id': string }> | undefined}
   */
  'https://schema.org/domainIncludes'?:
    | { '@id': string }
    | Array<{ '@id': string }>

  /**
   * The range (value types) for this property,
   * indicating what types of values this
   * property can hold.
   *
   * @type {{ '@id': string } | Array<{ '@id': string }> | undefined}
   */
  'https://schema.org/rangeIncludes'?:
    | { '@id': string }
    | Array<{ '@id': string }>
}

// ─────────────────────────────────────────────
// Schema graph
// ─────────────────────────────────────────────

/**
 * Represents the complete schema.org vocabulary
 * graph as parsed from the JSON-LD file.
 *
 * @interface SchemaGraph
 */
export interface SchemaGraph {
  /**
   * The JSON-LD context mapping prefixes to
   * their full namespace URLs.
   *
   * @type {Record<string, string>}
   */
  '@context': Record<string, string>

  /**
   * The array of all entries (types, properties,
   * enumeration values) in the vocabulary.
   *
   * @type {SchemaEntry[]}
   */
  '@graph': SchemaEntry[]
}

// ─────────────────────────────────────────────
// Schema metadata
// ─────────────────────────────────────────────

/**
 * Represents computed metadata and statistics
 * about a schema.org vocabulary file.
 *
 * @interface SchemaMetadata
 */
export interface SchemaMetadata {
  /**
   * The file name of the schema file.
   *
   * @type {string}
   */
  fileName: string

  /**
   * The full resolved path to the schema file.
   *
   * @type {string}
   */
  filePath: string

  /**
   * The file size in bytes.
   *
   * @type {number}
   */
  fileSizeBytes: number

  /**
   * The formatted file size string.
   *
   * @type {string}
   */
  fileSizeFormatted: string

  /**
   * The number of class/type definitions.
   *
   * @type {number}
   */
  typeCount: number

  /**
   * The number of property definitions.
   *
   * @type {number}
   */
  propertyCount: number

  /**
   * The number of enumeration definitions.
   *
   * @type {number}
   */
  enumerationCount: number

  /**
   * The total number of graph entries.
   *
   * @type {number}
   */
  totalEntries: number

  /**
   * The schema.org version, if available.
   *
   * @type {string | null}
   */
  version: string | null

  /**
   * The last modified timestamp of the file.
   *
   * @type {string}
   */
  lastModified: string
}
