import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon('postgresql://Gemini_AI_Contents_owner:2YWf3FQSGMLs@ep-old-glade-a2fkobgd.eu-central-1.aws.neon.tech/Gemini_AI_Contents?sslmode=require')

export const db = drizzle(sql, {schema})