"use client";

import React, { useState, useRef } from 'react';
import { Eye, EyeOff, Mail, Lock, UploadCloud, Building, ShieldCheck } from 'lucide-react';
import SplashCursor from '../components/SplashCursor';
import StarBorder from '../components/StarBorder';
import TargetCursor from '../components/TargetCursor';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  // Login State
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register State
  const [agreed, setAgreed] = useState(false);
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regState, setRegState] = useState('');
  const [regZip, setRegZip] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering');
  };

  const FileUploadZone = ({ label, required }: { label: string; required?: boolean }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    return (
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-white/90">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-white/20 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-pointer group bg-black/20 backdrop-blur-sm"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
          />
          <UploadCloud className={`h-8 w-8 mb-2 transition-colors ${fileName ? 'text-green-400' : 'text-white/40 group-hover:text-blue-400'}`} />
          <p className={`text-xs sm:text-sm transition-colors ${fileName ? 'text-green-400 font-semibold' : 'text-white/50 group-hover:text-white/80'}`}>
            {fileName ? fileName : "Drag 'n' drop some files here, or click to select"}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#3b1c5a] to-[#7f1d1d] flex items-center justify-center p-4 sm:p-8 transition-colors duration-500 relative overflow-hidden">

      <SplashCursor />
      <TargetCursor targetSelector="input, select, button, a, .cursor-target" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/50 blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-red-500/50 blur-[120px] mix-blend-screen"></div>
      </div>

      <StarBorder
        as="div"
        className="max-w-4xl w-full z-10 shadow-[0_0_80px_rgba(0,0,0,0.7)]"
        innerClassName="bg-[#0a0a0f]/70 backdrop-blur-2xl"
        color="#0ea5e9"
        speed="6s"
        thickness={4}
      >

        {/* Navigation Pills */}
        <div className="flex justify-center p-6 sm:p-8 border-b border-white/5 bg-transparent">
          <div className="inline-flex bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 shadow-inner w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 sm:flex-none px-8 sm:px-12 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-500 ${activeTab === 'login'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105'
                : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 sm:flex-none px-8 sm:px-12 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-500 ${activeTab === 'register'
                ? 'bg-gradient-to-r from-purple-500 to-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-105'
                : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Content Area with Grid Animation for Smooth Height Change */}
        <div className="relative w-full">

          {/* LOGIN FORM */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${activeTab === 'login' ? 'grid-rows-[1fr] opacity-100 translate-y-0' : 'grid-rows-[0fr] opacity-0 -translate-y-4 pointer-events-none'
              }`}
          >
            <div className="overflow-hidden">
              <div className="p-6 sm:p-10 md:p-12 max-w-md mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Welcome Back</h2>
                  <p className="text-white/60">Enter your credentials to access your VapeHub account.</p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2" htmlFor="email">
                      Email or Username
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input
                        id="email"
                        type="text"
                        className="block w-full pl-11 pr-4 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-white/30"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2" htmlFor="password">
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="block w-full pl-11 pr-12 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-white/30"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white/80 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-white/20 rounded cursor-pointer bg-black/40 checked:bg-blue-500 transition-colors"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70 cursor-pointer hover:text-white transition-colors">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] text-base font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] hover:bg-[position:100%_0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-500 transform hover:scale-[1.02]"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* REGISTER FORM */}
          <div
            className={`grid transition-all duration-500 ease-in-out absolute top-0 left-0 w-full ${activeTab === 'register' ? 'grid-rows-[1fr] opacity-100 translate-y-0 relative' : 'grid-rows-[0fr] opacity-0 translate-y-4 pointer-events-none'
              }`}
          >
            <div className="overflow-hidden">
              <div className="p-6 sm:p-10 md:p-12">
                <div className="text-center mb-8 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Business Registration</h2>
                  <p className="text-white/60">Join VapeHub to access exclusive wholesale deals and premium products.</p>
                </div>

                <form onSubmit={handleRegisterSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                    {/* Basic Info */}
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={regFirstName}
                        onChange={(e) => setRegFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={regLastName}
                        onChange={(e) => setRegLastName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white/90 mb-2">Business Email</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address."
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="5551234567"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">FEIN Number</label>
                      <input type="text" placeholder="XX-XXXXXXX" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all" />
                    </div>

                    {/* Divider */}
                    <div className="md:col-span-2 py-2">
                      <div className="h-px w-full bg-white/10"></div>
                    </div>

                    {/* Documents Section */}
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-purple-400" size={20} /> Required Documents
                      </h3>
                    </div>

                    <FileUploadZone label="Upload FEIN License" required />
                    <FileUploadZone label="Upload Tobacco License" required />
                    <FileUploadZone label="Upload State Tax ID / Business License" required />
                    <FileUploadZone label="Government Issued ID" required />

                    {/* Divider */}
                    <div className="md:col-span-2 py-2">
                      <div className="h-px w-full bg-white/10"></div>
                    </div>

                    {/* Business Details */}
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Building className="text-purple-400" size={20} /> Business Details
                      </h3>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Store Type</label>
                      <select defaultValue="" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all appearance-none">
                        <option value="" disabled className="bg-gray-900">Select Store Type</option>
                        <option value="retail" className="bg-gray-900">Retail</option>
                        <option value="wholesale" className="bg-gray-900">Wholesale</option>
                        <option value="online" className="bg-gray-900">Online</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Tobacco License Type</label>
                      <select defaultValue="" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all appearance-none">
                        <option value="" disabled className="bg-gray-900">Select License Type</option>
                        <option value="type1" className="bg-gray-900">Type 1</option>
                        <option value="type2" className="bg-gray-900">Type 2</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white/90 mb-2">Business Name</label>
                      <input type="text" placeholder="Vape World Inc." className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-white/90 mb-2">Business Address</label>
                      <input type="text" placeholder="123 Vapor Ave, Suite 100" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">City</label>
                      <input type="text" placeholder="Los Angeles" className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">State</label>
                      <input
                        type="text"
                        placeholder="CA"
                        value={regState}
                        onChange={(e) => setRegState(e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 2))}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Country</label>
                      <input type="text" defaultValue="United States of America" readOnly className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl outline-none text-white/50 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">Postcode Zip</label>
                      <input
                        type="text"
                        placeholder="90001"
                        value={regZip}
                        onChange={(e) => setRegZip(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-white/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-0.5">
                        <input
                          id="terms"
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="w-5 h-5 border-white/20 rounded text-purple-600 focus:ring-purple-500 bg-black/40 checked:bg-purple-500 cursor-pointer transition-colors"
                        />
                      </div>
                      <label htmlFor="terms" className="ml-3 text-sm font-medium text-white/70 cursor-pointer hover:text-white transition-colors">
                        I agree to the <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">Terms & Conditions</a> and <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">Privacy Policy</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:100%_0] shadow-[0_0_20px_rgba(239,68,68,0.2)] text-white font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-500 transform hover:scale-[1.02]"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </StarBorder>
    </div>
  );
}
