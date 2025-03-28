import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD } = process.env;
