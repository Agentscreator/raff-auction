CREATE TABLE "auctions" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"make" varchar(100) NOT NULL,
	"model" varchar(100) NOT NULL,
	"year" integer NOT NULL,
	"mileage" integer,
	"engine" varchar(255),
	"transmission" varchar(255),
	"condition" varchar(100),
	"location" varchar(255),
	"starting_bid" numeric(10, 2) NOT NULL,
	"current_bid" numeric(10, 2) NOT NULL,
	"buy_now_price" numeric(10, 2),
	"image_url" text,
	"seller_id" integer,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "bids" (
	"id" serial PRIMARY KEY NOT NULL,
	"auction_id" integer NOT NULL,
	"bidder_id" integer NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "raffle_tickets" (
	"id" serial PRIMARY KEY NOT NULL,
	"raffle_id" integer NOT NULL,
	"buyer_id" integer NOT NULL,
	"ticket_number" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "raffles" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"make" varchar(100) NOT NULL,
	"model" varchar(100) NOT NULL,
	"year" integer NOT NULL,
	"estimated_value" numeric(10, 2) NOT NULL,
	"ticket_price" numeric(10, 2) NOT NULL,
	"total_tickets" integer NOT NULL,
	"sold_tickets" integer DEFAULT 0,
	"image_url" text,
	"seller_id" integer,
	"draw_date" timestamp NOT NULL,
	"is_active" boolean DEFAULT true,
	"winner_id" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"name" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "auctions" ADD CONSTRAINT "auctions_seller_id_users_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bids" ADD CONSTRAINT "bids_auction_id_auctions_id_fk" FOREIGN KEY ("auction_id") REFERENCES "public"."auctions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bids" ADD CONSTRAINT "bids_bidder_id_users_id_fk" FOREIGN KEY ("bidder_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffle_tickets" ADD CONSTRAINT "raffle_tickets_raffle_id_raffles_id_fk" FOREIGN KEY ("raffle_id") REFERENCES "public"."raffles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffle_tickets" ADD CONSTRAINT "raffle_tickets_buyer_id_users_id_fk" FOREIGN KEY ("buyer_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffles" ADD CONSTRAINT "raffles_seller_id_users_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffles" ADD CONSTRAINT "raffles_winner_id_users_id_fk" FOREIGN KEY ("winner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;