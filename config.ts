import * as dotenv from 'dotenv'
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, `./config/${process.env.NODE_ENV||''}.env`) });

const envVars = [
  'JWT_SECRET',
  'JWT_MAX_AGE',
  'ETHEREUM_NODE_URL',
  'TYPEORM_DATABASE_TYPE',
  'TYPEORM_DATABASE_NAME',
  'TYPEORM_DATABASE_USER',
  'TYPEORM_DATABASE_PASSWORD',
  'TYPEORM_DATABASE_HOST',
  'TYPEORM_DATABASE_PORT',
  'TYPEORM_LOGGING',
  'TYPEORM_DROP_SCHEMA',
  'APOLLO_KEY',
  'REGISTER_USERNAME_PASSWORD',
  'STRIPE_KEY',
  'STRIPE_SECRET',
  'STRIPE_APPLICATION_FEE',
  'STRIPE_WEBHOOK_SECRET',
  'PINATA_API_KEY',
  'PINATA_SECRET_API_KEY',
  'UPLOAD_MAX_FILE_SIZE'
]

class Config {
  JWT_SECRET: string
  JWT_MAX_AGE: string
  ETHEREUM_NODE_URL: string
  TYPEORM_DATABASE_TYPE: string
  TYPEORM_DATABASE_NAME: string
  TYPEORM_DATABASE_USER: string
  TYPEORM_DATABASE_PASSWORD: string
  TYPEORM_DATABASE_HOST: string
  TYPEORM_DATABASE_PORT: string
  TYPEORM_LOGGING: string
  TYPEORM_DROP_SCHEMA: string
  APOLLO_KEY: string
  REGISTER_USERNAME_PASSWORD: string

  STRIPE_KEY: string
  STRIPE_SECRET: string
  STRIPE_APPLICATION_FEE: number
  STRIPE_WEBHOOK_SECRET: string

  PINATA_API_KEY: string
  PINATA_SECRET_API_KEY: string
  UPLOAD_FILE_MAX_SIZE: string

  constructor () {
    const envFile = process.env;
    envVars.forEach(envVar => {
      if (envFile[envVar]) {
        this[envVar] = envFile[envVar]
        // console.log(`envVar ---> : ${this[envVar]}`)
      } else {
        throw new Error(`Need to provide a ${envVar} in the .env`)
      }
    })
  }

  get (envVar: string): string | number {
    return this[envVar]
  }
}

const config = new Config();

export default config