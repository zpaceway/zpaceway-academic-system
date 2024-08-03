# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build api-gateway
RUN npm run build course-management-service
RUN npm run build course-registration-service
RUN npm run build student-management-service
RUN npm run build student-payment-service

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/entrypoint.sh ./

RUN chmod +x ./entrypoint.sh

RUN npm install --only=production

ENTRYPOINT ["./entrypoint.sh"]
