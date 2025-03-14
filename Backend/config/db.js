import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD } = process.env;

export const sql = neon(
  `postgresql://neondb_owner:npg_VN3cLmTeDX2b@ep-white-cloud-a1y2e97s-pooler.ap-southeast-1.aws.neon.tech/PC?sslmode=require`
);

// postgresql://neondb_owner:npg_VN3cLmTeDX2b@ep-white-cloud-a1y2e97s-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
