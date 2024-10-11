export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: DATABASE_URL,
        connectionString: DATABASE_URL,
    }
}