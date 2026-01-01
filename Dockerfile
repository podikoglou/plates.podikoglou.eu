# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /app

# install dependencies (production only to avoid better-sqlite3 build issues)
FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
WORKDIR /temp/prod
RUN bun install --frozen-lockfile --production

# final production image
FROM base AS release
WORKDIR /app

# copy production dependencies
COPY --from=install /temp/prod/node_modules node_modules

# copy source code
COPY package.json bun.lock tsconfig.json ./
COPY src ./src
COPY static ./static
COPY drizzle ./drizzle

# create directory for database with proper permissions
RUN mkdir -p /app/data && chown -R bun:bun /app/data

# environment variables
ENV NODE_ENV=production
ENV DB_FILE_NAME=/app/data/lp.db

# run as non-root user
USER bun

# expose port
EXPOSE 3000

# run the app
ENTRYPOINT ["bun", "run", "src/index.tsx"]
