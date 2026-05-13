CREATE TABLE IF NOT EXISTS "donations" (
  "id" text PRIMARY KEY NOT NULL,
  "donated_on" text NOT NULL,
  "display_date" text NOT NULL,
  "charity_name" text NOT NULL,
  "property_label" text NOT NULL,
  "amount_rand" integer NOT NULL,
  "is_adjustment" boolean DEFAULT false NOT NULL,
  "notes" text,
  "archived_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "listings" (
  "unique_id" text PRIMARY KEY NOT NULL,
  "display_address" text,
  "full_address" text,
  "status" text NOT NULL,
  "price" integer NOT NULL,
  "type" text NOT NULL,
  "category" text NOT NULL,
  "bedrooms" integer NOT NULL,
  "bathrooms" real NOT NULL,
  "garages" integer NOT NULL,
  "parking" integer NOT NULL,
  "floor_size" integer NOT NULL,
  "erf_size" integer NOT NULL,
  "rates" integer NOT NULL,
  "levy" integer NOT NULL,
  "region" text NOT NULL,
  "mandate" text NOT NULL,
  "keywords" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "public_url" text,
  "photos" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "hero_photo" text,
  "date_loaded" text NOT NULL,
  "date_modified" text NOT NULL,
  "source_account_id" text,
  "source_account_label" text,
  "is_published" boolean DEFAULT true NOT NULL,
  "archived_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "admin_audit_log" (
  "id" serial PRIMARY KEY NOT NULL,
  "entity_type" text NOT NULL,
  "entity_id" text NOT NULL,
  "action" text NOT NULL,
  "actor" text DEFAULT 'admin' NOT NULL,
  "before" jsonb,
  "after" jsonb,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
