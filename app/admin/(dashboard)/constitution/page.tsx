'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { UploadButton } from '@/lib/uploadthing';

type ConstitutionDoc = {
  id: number;
  filename: string;
  url: string;
  mimeType: string | null;
  uploadedAt: string;
};

export default function ConstitutionAdmin() {
  const [doc, setDoc] = useState<ConstitutionDoc | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDoc = async () => {
    try {
      const res = await fetch('/api/constitution');
      if (res.ok) {
        const data = await res.json();
        setDoc(data);
      }
    } catch {
      // no doc yet
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDoc(); }, []);

  return (
    <div className="admin-content">
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Constitution</h3>
            <p className="subtitle-text">Upload the current NUBS-Ghana constitution (PDF or Word). The new file replaces the previous one.</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Current document */}
          <div>
            <h4 className="text-sm font-semibold text-admin-text mb-3">Current Constitution</h4>
            {loading ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : doc ? (
              <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <i className="ph ph-file-pdf text-2xl text-red-500"></i>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{doc.filename}</p>
                  <p className="text-xs text-gray-500">
                    Uploaded {new Date(doc.uploadedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                >
                  <i className="ph ph-arrow-square-out"></i> View
                </a>
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No constitution uploaded yet.</p>
            )}
          </div>

          {/* Upload */}
          <div>
            <h4 className="text-sm font-semibold text-admin-text mb-3">Upload New Version</h4>
            <UploadButton
              endpoint="constitution"
              onClientUploadComplete={() => {
                toast.success('Constitution uploaded successfully');
                fetchDoc();
              }}
              onUploadError={(error) => {
                toast.error(`Upload failed: ${error.message}`);
              }}
            />
            <p className="text-xs text-gray-400 mt-2">Accepted: PDF, DOCX · Max size: 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
