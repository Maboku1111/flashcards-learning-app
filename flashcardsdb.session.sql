CREATE TABLE IF NOT EXISTS flashcards (
    id SERIAL PRIMARY KEY,
    question TEXT,
    answer TEXT,
    box INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
