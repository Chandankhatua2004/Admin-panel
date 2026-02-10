import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <AuthLayout>
            <div className="flex flex-col">
                <h2 className="text-[36px] font-bold text-nav-text mb-2">Sign In</h2>
                <p className="text-secondary text-base mb-8">Enter your email and password to sign in!</p>

                {/* Google Sign In */}
                <button className="flex items-center justify-center gap-3 w-full bg-background-body py-4 rounded-2xl font-bold text-sm text-nav-text hover:bg-background-body/80 transition-colors mb-6">
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.01 24.53c0-1.66-.15-3.26-.43-4.81H24.48v9.11h12.63c-.54 2.92-2.19 5.4-4.66 7.07l7.55 5.85c4.41-4.06 6.96-10.04 6.96-17.22z" fill="#4285F4" />
                        <path d="M24.48 47.48c6.34 0 11.66-2.11 15.54-5.71l-7.55-5.85c-2.1 1.4-4.78 2.22-7.99 2.22-6.14 0-11.34-4.15-13.2-9.74l-7.79 6.04c3.84 7.64 11.75 12.83 21 12.83z" fill="#34A853" />
                        <path d="M11.28 28.4c-.48-1.42-.75-2.92-.75-4.48s.27-3.06.75-4.48l-7.79-6.04C1.86 16.54 1 19.95 1 23.92s.86 7.38 2.49 10.51l7.79-6.03z" fill="#FBBC04" />
                        <path d="M24.48 9c3.45 0 6.55 1.18 8.98 3.5l6.75-6.75C36.13 2.1 30.82 0 24.48 0 15.23 0 7.32 5.19 3.49 12.83l7.79 6.04c1.86-5.59 7.06-9.74 13.2-9.74z" fill="#EA4335" />
                    </svg>
                    Sign in with Google
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-background-body" />
                    <span className="text-sm font-medium text-secondary">or</span>
                    <div className="flex-1 h-px bg-background-body" />
                </div>

                {/* Form */}
                <form className="flex flex-col gap-6">
                    <div>
                        <label className="text-sm font-bold text-nav-text mb-2 block">
                            Email <span className="text-primary">*</span>
                        </label>
                        <input
                            type="email"
                            autoComplete="off"
                            placeholder="mail@example.com"
                            className="w-full px-5 py-4 rounded-2xl border-2 border-background-body focus:border-primary focus:bg-background-card bg-background-body outline-none transition-all placeholder:text-secondary/50 text-nav-text font-medium"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-bold text-nav-text mb-2 block">
                            Password <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                placeholder="Min. 8 characters"
                                className="w-full px-5 py-4 rounded-2xl border-2 border-background-body focus:border-primary focus:bg-background-card bg-background-body outline-none transition-all placeholder:text-secondary/50 text-nav-text font-medium"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-5 h-5 rounded-md border-2 border-background-body group-hover:border-primary transition-colors flex items-center justify-center">
                                <input type="checkbox" className="hidden" />
                                <div className="w-2.5 h-2.5 rounded-sm bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                            </div>
                            <span className="text-sm font-bold text-nav-text">Keep me logged in</span>
                        </label>
                        <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot password?</a>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-base shadow-[0_20px_40px_-10px_rgba(67,24,255,0.3)] hover:bg-[#3311CC] transition-all transform hover:scale-[1.01] active:scale-[0.99] mt-2">
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-sm font-medium text-secondary">
                    Not registered yet? <Link to="/signup" className="text-primary font-bold hover:underline">Create an Account</Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default SignIn;
