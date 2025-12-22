FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Copy only the files needed to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the files
COPY . .

# Clear the cache
RUN rm -rf .next

# Run build with the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm build; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Add nextjs user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4000

ENV PORT 4000
ENV HOSTNAME "0.0.0.0"
ENV NODE_OPTIONS="--max-old-space-size=16384"


CMD ["node", "server.js"]