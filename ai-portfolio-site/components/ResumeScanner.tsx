import React, { useState } from 'react';
import { ResumeEducation, ResumeExperience } from '../utils/extractResumeData';

interface ResumeScannerProps {
  onDataExtracted: (data: { education: ResumeEducation[], experience: ResumeExperience[] }) => void;
}

export default function ResumeScanner({ onDataExtracted }: ResumeScannerProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scanResume = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/parse-resume');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to scan resume');
      }

      onDataExtracted(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while scanning the resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Resume Scanner</h2>
      <button
        onClick={scanResume}
        disabled={loading}
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {loading ? 'Scanning...' : 'Scan Resume'}
      </button>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}
