-- Cloudflare D1 Database Schema for SolutionSynq
-- Run with: npx wrangler d1 execute solutionsynq-db --local --file=./schema.sql (or --remote)

-- 1. Confidential Problem Signals Table (De-identified & Whistleblower Protected)
CREATE TABLE IF NOT EXISTS problem_reports (
  id TEXT PRIMARY KEY,
  tracking_code TEXT UNIQUE NOT NULL,
  role TEXT,
  sector TEXT NOT NULL,
  region TEXT,
  problem_category TEXT,
  narrative TEXT NOT NULL,
  affected_count TEXT,
  frequency TEXT,
  impact_level TEXT,
  confidentiality_tier TEXT DEFAULT 'anonymized-research',
  created_at TEXT DEFAULT (datetime('now'))
);

-- 2. Founding Network Applications Table
CREATE TABLE IF NOT EXISTS network_applications (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  organization TEXT,
  role_category TEXT NOT NULL,
  sector TEXT NOT NULL,
  region TEXT NOT NULL,
  participation_type TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Optimization Indexes
CREATE INDEX IF NOT EXISTS idx_problem_reports_sector ON problem_reports(sector);
CREATE INDEX IF NOT EXISTS idx_network_applications_email ON network_applications(email);
