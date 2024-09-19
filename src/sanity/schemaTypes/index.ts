import { type SchemaTypeDefinition } from "sanity";
import {blockContentType} from './blockContentType'
import categorySchema from "./posts/categorySchema";
import postSchema from "./posts/postSchema";
import authorSchema from "./people/authorSchema";
import eventSchema from "./posts/eventSchema";
import newsSchema from "./posts/newsSchema";
import homeSchema from "./pages/homeSchema";
import pageSchema from "./pages/pageSchema";
import settingSchema from "./settings/settingSchema";
import addressSchema from "./settings/addressSchema";
import colleagueSchema from "./people/colleagueSchema";
import teacherSchema from "./people/teacherSchema";
import navigationSchema from "./settings/navigationSchema";
import navigationItemSchema from "./settings/navigationItemSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeSchema,
    pageSchema,
    newsSchema,
    postSchema,
    authorSchema,
    categorySchema,
    eventSchema,
    settingSchema,
    colleagueSchema,
    teacherSchema,
    addressSchema,
    navigationSchema,
    navigationItemSchema,
    blockContentType
  ],
};

