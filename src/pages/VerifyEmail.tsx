// src/pages/VerifyEmail.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Placeholder — wire up real logic later
    await new Promise((res) => setTimeout(res, 1000));
    setSent(true);
    toast.success('Verification email sent!');
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-foreground text-center mb-2">
            {sent ? 'Email Sent!' : 'Verify Your Email'}
          </h1>

          {!sent ? (
            <>
              <p className="text-center text-muted-foreground mb-6">
                Enter your email address to receive a verification link
              </p>

              <form onSubmit={handleResend} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Verification Email'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                We've sent a verification email to:
              </p>
              <div className="bg-surface p-3 rounded-md mb-4">
                <p className="text-foreground font-medium">{email}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Click the link in the email to verify your account.
                If you don't see it, check your spam folder.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm text-primary hover:underline"
              >
                Use a different email
              </button>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-border text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-primary hover:underline"
            >
              Return to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}