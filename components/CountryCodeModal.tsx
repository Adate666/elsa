import React, { useState, useMemo } from 'react';
import type { Country } from '../types';

const allCountries: Country[] = [
  // A comprehensive list of countries
  { name: 'France', code: '+33', flag: '🇫🇷' }, { name: 'Germany', code: '+49', flag: '🇩🇪' }, { name: 'United Kingdom', code: '+44', flag: '🇬🇧' }, { name: 'Italy', code: '+39', flag: '🇮🇹' }, { name: 'Spain', code: '+34', flag: '🇪🇸' }, { name: 'Russia', code: '+7', flag: '🇷🇺' }, { name: 'Netherlands', code: '+31', flag: '🇳🇱' }, { name: 'Belgium', code: '+32', flag: '🇧🇪' }, { name: 'Sweden', code: '+46', flag: '🇸🇪' }, { name: 'Switzerland', code: '+41', flag: '🇨🇭' }, { name: 'China', code: '+86', flag: '🇨🇳' }, { name: 'India', code: '+91', flag: '🇮🇳' }, { name: 'Japan', code: '+81', flag: '🇯🇵' }, { name: 'South Korea', code: '+82', flag: '🇰🇷' }, { name: 'Indonesia', code: '+62', flag: '🇮🇩' }, { name: 'Turkey', code: '+90', flag: '🇹🇷' }, { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' }, { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' }, { name: 'Nigeria', code: '+234', flag: '🇳🇬' }, { name: 'Egypt', code: '+20', flag: '🇪🇬' }, { name: 'South Africa', code: '+27', flag: '🇿🇦' }, { name: 'Ghana', code: '+233', flag: '🇬🇭' }, { name: 'Kenya', code: '+254', flag: '🇰🇪' }, { name: 'Morocco', code: '+212', flag: '🇲🇦' }, { name: 'Algeria', code: '+213', flag: '🇩🇿' }, { name: 'Angola', code: '+244', flag: '🇦🇴' }, { name: 'Benin', code: '+229', flag: '🇧🇯' }, { name: 'Botswana', code: '+267', flag: '🇧🇼' }, { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' }, { name: 'Cameroon', code: '+237', flag: '🇨🇲' }, { name: "Côte d'Ivoire", code: '+225', flag: '🇨🇮' }, { name: 'DR Congo', code: '+243', flag: '🇨🇩' }, { name: 'Ethiopia', code: '+251', flag: '🇪🇹' }, { name: 'Gabon', code: '+241', flag: '🇬🇦' }, { name: 'Guinea', code: '+224', flag: '🇬🇳' }, { name: 'Madagascar', code: '+261', flag: '🇲🇬' }, { name: 'Mali', code: '+223', flag: '🇲🇱' }, { name: 'Mozambique', code: '+258', flag: '🇲🇿' }, { name: 'Namibia', code: '+264', flag: '🇳🇦' }, { name: 'Niger', code: '+227', flag: '🇳🇪' }, { name: 'Senegal', code: '+221', flag: '🇸🇳' }, { name: 'Tanzania', code: '+255', flag: '🇹🇿' }, { name: 'Togo', code: '+228', flag: '🇹🇬' }, { name: 'Tunisia', code: '+216', flag: '🇹🇳' }, { name: 'Uganda', code: '+256', flag: '🇺🇬' }, { name: 'Zambia', code: '+260', flag: '🇿🇲' }, { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' }, { name: 'United States', code: '+1', flag: '🇺🇸' }, { name: 'Canada', code: '+1', flag: '🇨🇦' }, { name: 'Mexico', code: '+52', flag: '🇲🇽' }, { name: 'Brazil', code: '+55', flag: '🇧🇷' }, { name: 'Afghanistan', code: '+93', flag: '🇦🇫' }, { name: 'Argentina', code: '+54', flag: '🇦🇷' }, { name: 'Australia', code: '+61', flag: '🇦🇺' }, { name: 'Austria', code: '+43', flag: '🇦🇹' }, { name: 'Bangladesh', code: '+880', flag: '🇧🇩' }, { name: 'Chile', code: '+56', flag: '🇨🇱' }, { name: 'Colombia', code: '+57', flag: '🇨🇴' }, { name: 'Denmark', code: '+45', flag: '🇩🇰' }, { name: 'Finland', code: '+358', flag: '🇫🇮' }, { name: 'Greece', code: '+30', flag: '🇬🇷' }, { name: 'Hong Kong', code: '+852', flag: '🇭🇰' }, { name: 'Ireland', code: '+353', flag: '🇮🇪' }, { name: 'Malaysia', code: '+60', flag: '🇲🇾' }, { name: 'New Zealand', code: '+64', flag: '🇳🇿' }, { name: 'Norway', code: '+47', flag: '🇳🇴' }, { name: 'Pakistan', code: '+92', flag: '🇵🇰' }, { name: 'Philippines', code: '+63', flag: '🇵🇭' }, { name: 'Poland', code: '+48', flag: '🇵🇱' }, { name: 'Portugal', code: '+351', flag: '🇵🇹' }, { name: 'Singapore', code: '+65', flag: '🇸🇬' }, { name: 'Thailand', code: '+66', flag: '🇹🇭' }, { name: 'Vietnam', code: '+84', flag: '🇻🇳' }
].sort((a, b) => a.name.localeCompare(b.name));

interface CountryCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (country: Country) => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CountryCodeModal: React.FC<CountryCodeModalProps> = ({ isOpen, onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = useMemo(() => {
        if (!searchTerm) return allCountries;
        return allCountries.filter(country =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.code.includes(searchTerm)
        );
    }, [searchTerm]);

    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-[#12120D]/60 z-[60] flex justify-center items-center p-4">
            <div onClick={(e) => e.stopPropagation()} className="bg-[#F4F4F4] rounded-3xl shadow-2xl w-full max-w-sm p-6 relative flex flex-col max-h-[70vh]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#12120D]">Select Country</h2>
                    <button onClick={onClose} className="text-[#1D1D1B] hover:text-[#12120D]" aria-label="Close country selector">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search by country or code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 mb-4 bg-white border border-[#1D1D1B]/20 rounded-lg shadow-sm placeholder-[#1D1D1B]/70 focus:outline-none focus:ring-2 focus:ring-[#F4C196] text-[#12120D]"
                />
                <div className="overflow-y-auto flex-grow no-scrollbar">
                    {filteredCountries.map(country => (
                        <button
                            key={country.name}
                            onClick={() => onSelect(country)}
                            className="w-full flex items-center space-x-4 p-2 rounded-lg hover:bg-[#1D1D1B]/10 text-left"
                        >
                            <span className="text-xl">{country.flag}</span>
                            <span className="flex-grow text-[#12120D]">{country.name}</span>
                            <span className="text-sm text-[#1D1D1B]">{country.code}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryCodeModal;