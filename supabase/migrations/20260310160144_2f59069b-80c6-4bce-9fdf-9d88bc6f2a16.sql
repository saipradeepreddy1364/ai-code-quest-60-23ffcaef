-- Create user_progress table
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  problem_id INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'solved',
  language TEXT NOT NULL,
  solved_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress" ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own progress" ON public.user_progress FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX idx_user_progress_user_id ON public.user_progress(user_id);
CREATE UNIQUE INDEX idx_user_progress_unique ON public.user_progress(user_id, problem_id);

-- Create saved_codes table
CREATE TABLE public.saved_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  problem_id INTEGER NOT NULL,
  code TEXT NOT NULL,
  language TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.saved_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own saved codes" ON public.saved_codes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own saved codes" ON public.saved_codes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own saved codes" ON public.saved_codes FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own saved codes" ON public.saved_codes FOR DELETE USING (auth.uid() = user_id);

CREATE INDEX idx_saved_codes_user_id ON public.saved_codes(user_id);
CREATE UNIQUE INDEX idx_saved_codes_unique ON public.saved_codes(user_id, problem_id, language);

-- Create user_streak table
CREATE TABLE public.user_streak (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_solved_date DATE
);

ALTER TABLE public.user_streak ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own streak" ON public.user_streak FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own streak" ON public.user_streak FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own streak" ON public.user_streak FOR UPDATE USING (auth.uid() = user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_saved_codes_updated_at
  BEFORE UPDATE ON public.saved_codes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();