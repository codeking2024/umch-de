/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type AddressSchema = {
  _id: string;
  _type: "addressSchema";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  address?: string;
  houseNumber?: string;
  postcode?: number;
  city?: string;
  country?: string;
  mapUrl?: string;
};

export type Teachers = {
  _id: string;
  _type: "teachers";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
};

export type Colleagues = {
  _id: string;
  _type: "colleagues";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
};

export type SanityPreviewUrlSecret = {
  _id: string;
  _type: "sanity.previewUrlSecret";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  secret?: string;
  source?: string;
  studioUrl?: string;
  userId?: string;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type TranslationMetadata = {
  _id: string;
  _type: "translation.metadata";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  translations?: Array<{
    _key: string;
  } & InternationalizedArrayReferenceValue>;
  schemaTypes?: Array<string>;
  slug?: Slug;
};

export type InternationalizedArrayReferenceValue = {
  _type: "internationalizedArrayReferenceValue";
  value?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "event";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "homePage";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "siteSettings";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigationItem";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigation";
  };
};

export type Navigation = {
  _id: string;
  _type: "navigation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  title?: string;
  sort?: number;
  items?: Array<{
    _key: string;
  } & NavigationItem>;
};

export type NavigationItem = {
  _type: "navigationItem";
  language?: string;
  title?: string;
  link?: string;
  sort?: number;
  items?: Array<{
    _key: string;
  } & NavigationItem>;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
};

export type HomePage = {
  _id: string;
  _type: "homePage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Event = {
  _id: string;
  _type: "event";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  title?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  logoImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  typeEvent?: "On-Site" | "Online" | "Both";
  onSiteDate?: RecurringDates;
  onlineDate?: RecurringDates;
  address?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "addressSchema";
  }>;
};

export type RecurringDates = {
  _type: "recurringDates";
  startDate?: string;
  endDate?: string;
  recurs?: boolean;
  rrule?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  title?: string;
  slug?: Slug;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    caption?: string;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type InternationalizedArrayReference = Array<{
  _key: string;
} & InternationalizedArrayReferenceValue>;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | BlockContent | AddressSchema | Teachers | Colleagues | Category | SanityPreviewUrlSecret | MediaTag | TranslationMetadata | InternationalizedArrayReferenceValue | Navigation | NavigationItem | SiteSettings | HomePage | Page | Event | RecurringDates | Post | Author | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug | InternationalizedArrayReference;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: settingsQuery
// Query: *[_type == "settings"][0]
export type SettingsQueryResult = null;
// Variable: indexQuery
// Query: *[_type == "post"] | order(date desc, _updatedAt desc) {    _id,  title,  date,  _updatedAt,  excerpt,  coverImage,  "slug": slug.current,  "author": author->{name, picture}}
export type IndexQueryResult = Array<{
  _id: string;
  title: string | null;
  date: null;
  _updatedAt: string;
  excerpt: null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  slug: string | null;
  author: {
    name: string | null;
    picture: null;
  } | null;
}>;
// Variable: postAndMoreStoriesQuery
// Query: {  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {    content,      _id,  title,  date,  _updatedAt,  excerpt,  coverImage,  "slug": slug.current,  "author": author->{name, picture}  },  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {    content,      _id,  title,  date,  _updatedAt,  excerpt,  coverImage,  "slug": slug.current,  "author": author->{name, picture}  }}
export type PostAndMoreStoriesQueryResult = {
  post: {
    content: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      alt?: string;
      _type: "image";
      _key: string;
    }> | null;
    _id: string;
    title: string | null;
    date: null;
    _updatedAt: string;
    excerpt: null;
    coverImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    slug: string | null;
    author: {
      name: string | null;
      picture: null;
    } | null;
  } | null;
  morePosts: Array<{
    content: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      caption?: string;
      alt?: string;
      _type: "image";
      _key: string;
    }> | null;
    _id: string;
    title: string | null;
    date: null;
    _updatedAt: string;
    excerpt: null;
    coverImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    slug: string | null;
    author: {
      name: string | null;
      picture: null;
    } | null;
  }>;
};
// Variable: postSlugsQuery
// Query: *[_type == "post" && defined(slug.current)][].slug.current
export type PostSlugsQueryResult = Array<string | null>;
// Variable: postBySlugQuery
// Query: *[_type == "post" && slug.current == $slug][0] {    _id,  title,  date,  _updatedAt,  excerpt,  coverImage,  "slug": slug.current,  "author": author->{name, picture}}
export type PostBySlugQueryResult = {
  _id: string;
  title: string | null;
  date: null;
  _updatedAt: string;
  excerpt: null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  slug: string | null;
  author: {
    name: string | null;
    picture: null;
  } | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"settings\"][0]": SettingsQueryResult;
    "\n*[_type == \"post\"] | order(date desc, _updatedAt desc) {\n  \n  _id,\n  title,\n  date,\n  _updatedAt,\n  excerpt,\n  coverImage,\n  \"slug\": slug.current,\n  \"author\": author->{name, picture}\n\n}": IndexQueryResult;
    "\n{\n  \"post\": *[_type == \"post\" && slug.current == $slug] | order(_updatedAt desc) [0] {\n    content,\n    \n  _id,\n  title,\n  date,\n  _updatedAt,\n  excerpt,\n  coverImage,\n  \"slug\": slug.current,\n  \"author\": author->{name, picture}\n\n  },\n  \"morePosts\": *[_type == \"post\" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {\n    content,\n    \n  _id,\n  title,\n  date,\n  _updatedAt,\n  excerpt,\n  coverImage,\n  \"slug\": slug.current,\n  \"author\": author->{name, picture}\n\n  }\n}": PostAndMoreStoriesQueryResult;
    "\n*[_type == \"post\" && defined(slug.current)][].slug.current\n": PostSlugsQueryResult;
    "\n*[_type == \"post\" && slug.current == $slug][0] {\n  \n  _id,\n  title,\n  date,\n  _updatedAt,\n  excerpt,\n  coverImage,\n  \"slug\": slug.current,\n  \"author\": author->{name, picture}\n\n}\n": PostBySlugQueryResult;
  }
}
