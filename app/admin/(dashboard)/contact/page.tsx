'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ContactInfo = { address: string; phone: string; email: string };

export default function ContactAdmin() {
  const [form, setForm] = useState<ContactInfo>({ address: '', phone: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/contact-info')
      .then((r) => r.json())
      .then((data) => {
        if (data) setForm({ address: data.address, phone: data.phone, email: data.email });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success('Contact info updated');
      } else {
        const err = await res.json();
        toast.error(err.error || 'Failed to update');
      }
    } catch {
      toast.error('Failed to update contact info');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="admin-content">Loading...</div>;

  return (
    <div className="admin-content">
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Contact Information</h3>
            <p className="subtitle-text">Update the address and phone shown on the public contact section.</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="address">
              <i className="ph ph-map-pin mr-1"></i> Address
            </Label>
            <Input
              id="address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="e.g. University of Cape Coast, Ghana"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              <i className="ph ph-phone mr-1"></i> Phone
            </Label>
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="e.g. +233 (0) 24 210 9888"
              required
            />
          </div>


          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </form>
      </div>
    </div>
  );
}
