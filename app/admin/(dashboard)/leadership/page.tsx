'use client';

import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from '@/components/ui/select';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

// Academic year utility functions
const getCurrentAcademicYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const month = now.getMonth(); // 0-11 (0 = January)
  
  // Academic year typically starts around August/September
  // If month is before August, academic year is previous/current
  // If month is August or after, academic year is current/next
  if (month < 7) { // Before August
    return `${currentYear - 1}/${currentYear}`;
  } else { // August or later
    return `${currentYear}/${currentYear + 1}`;
  }
};

// Zod schema for form validation
const coordinatorSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  institution: z.string().min(2, 'Institution must be at least 2 characters'),
  order: z.number().min(0, 'Order must be 0 or greater'),
  isActive: z.boolean(),
});

const necMemberSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role must be at least 2 characters'),
  institution: z.string().min(2, 'Institution must be at least 2 characters'),
  grade: z.string().optional(),
  bio: z.string().optional(),
  order: z.number().min(0, 'Order must be 0 or greater'),
  isActive: z.boolean(),
});

export default function LeadershipAdmin() {
  const { data: session } = useSession();
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLeader, setEditingLeader] = useState<any | null>(null);
  const [isCoordinator, setIsCoordinator] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const editAbortRef = useRef<AbortController | null>(null);

  const form = useForm<any>({
    resolver: zodResolver(isCoordinator ? coordinatorSchema : necMemberSchema),
    defaultValues: {
      name: '',
      role: '',
      institution: '', // Required for NEC members
      grade: '', // Required for NEC members
      bio: '', // Optional for both
      order: 0,
      isActive: true,
    },
  });

  // Update form when switching between coordinator/nec member
  useEffect(() => {
    if (isCoordinator) {
      form.reset({
        name: '',
        role: '',
        institution: '',
        order: 0,
        isActive: true,
      });
    } else {
      form.reset({
        name: '',
        role: '',
        institution: '',
        grade: '',
        bio: '',
        order: 0,
        isActive: true,
      });
    }
  }, [isCoordinator]);

  useEffect(() => {
    fetchLeaders();
    return () => { editAbortRef.current?.abort(); };
  }, []);

  const fetchLeaders = async () => {
    try {
      const res = await fetch('/api/leadership');
      if (res.ok) {
        const data = await res.json();
        setLeaders(data);
      }
    } catch (error) {
      console.error('Error fetching leaders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: any) => {
    setSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', data.name);
    formDataToSend.append('role', data.role);
    
    // Only include NEC member fields if they exist
    if ('institution' in data && data.institution) {
      formDataToSend.append('institution', data.institution);
    }
    // Add automatic academic year for NEC members only (coordinators handled by API)
    if ('grade' in data) {
      formDataToSend.append('academicYear', getCurrentAcademicYear());
    }
    if ('grade' in data && data.grade) {
      formDataToSend.append('grade', data.grade);
    }
    if (data.bio) formDataToSend.append('bio', data.bio);
    formDataToSend.append('order', data.order.toString());
    formDataToSend.append('isActive', data.isActive.toString());
    if (photoFile) {
      formDataToSend.append('photo', photoFile);
    }

    if (editingLeader && editingLeader.id) {
      formDataToSend.append('id', String(editingLeader.id));
    }

    try {
      const url = editingLeader 
        ? `/api/leadership/${editingLeader.id}`
        : '/api/leadership';
      
      const method = editingLeader ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (res.ok) {
        await fetchLeaders();
        resetForm();
        setShowForm(false);
        toast.success(editingLeader ? 'Leader updated successfully' : 'Leader created successfully');
      } else {
        const error = await res.json();
        toast.error(error.error || 'Failed to save leader');
      }
    } catch (error) {
      console.error('Error saving leader:', error);
      toast.error('Failed to save leader');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async (leader: any) => {
    // Cancel any in-flight prefetch from a previous edit click
    editAbortRef.current?.abort();
    const controller = new AbortController();
    editAbortRef.current = controller;

    const applyLeader = (data: any) => {
      if (controller.signal.aborted) return;
      const isLeaderCoordinator = data.role?.toLowerCase().includes('coordinator');
      setEditingLeader(data);
      setIsCoordinator(isLeaderCoordinator);
      form.reset(
        isLeaderCoordinator
          ? { name: data.name, role: data.role, institution: data.institution, order: data.order, isActive: data.isActive }
          : { name: data.name, role: data.role, institution: data.institution, grade: data.grade || '', bio: data.bio || '', order: data.order, isActive: data.isActive }
      );
      setShowForm(true);
    };

    try {
      const res = await fetch(`/api/leadership/${leader.id}?id=${leader.id}`, { signal: controller.signal });
      if (res.ok) {
        applyLeader(await res.json());
      } else {
        applyLeader(leader);
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      console.error('Failed to prefetch leader for edit', err);
      applyLeader(leader);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this leader?')) return;

    try {
      const res = await fetch(`/api/leadership/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchLeaders();
        toast.success('Leader deleted');
      } else {
        const error = await res.json();
        toast.error(error.error || 'Failed to delete leader');
      }
    } catch (error) {
      console.error('Error deleting leader:', error);
      toast.error('Failed to delete leader');
    }
  };

  const resetForm = () => {
    if (isCoordinator) {
      form.reset({
        name: '',
        role: '',
        institution: '',
        order: 0,
        isActive: true,
      });
    } else {
      form.reset({
        name: '',
        role: '',
        institution: '',
        grade: '',
        bio: '',
        order: 0,
        isActive: true,
      });
    }
    setPhotoFile(null);
    setEditingLeader(null);
  };

  if (loading) {
    return <div className="admin-content">Loading leaders...</div>;
  }

  return (
    <div className="admin-content">
      <div className="admin-section-card">
        <div className="section-card-header">
          <div>
            <h3>Leadership Management</h3>
            <p className="subtitle-text">Manage National Executive Council members</p>
          </div>
          <Button
            onClick={() => {
              resetForm();
              setIsCoordinator(false); // Default to NEC member
              setShowForm(true);
            }}
          >
            <i className="ph ph-plus"></i> Add Leader
          </Button>
          <div className="flex items-center gap-2 ml-4">
            <Label>Type:</Label>
            <Select value={isCoordinator ? 'coordinator' : 'nec'} onValueChange={(value) => { const newType = value === 'coordinator'; setIsCoordinator(newType) }}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coordinator">Coordinator</SelectItem>
                <SelectItem value="nec">NEC Member</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {showForm && (
          <div className="p-6 border-b border-admin-border">
            <Form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-admin-text mb-2">
                  {isCoordinator ? 'Coordinator Information' : 'NEC Member Information'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isCoordinator 
                    ? 'Add the National Coordinator information (no academic details needed)'
                    : 'Add NEC Member information (academic year, institution, and grade required)'
                  }
                </p>
              </div>

              {/* Common fields for both types */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Enter leader's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder={isCoordinator ? "National Youth/NUBS Coordinator" : "e.g., National Chairperson"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Coordinator-only fields */}
              {isCoordinator && (
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., National Union of Students"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              )}

              {/* NEC Member-only fields */}
              {!isCoordinator && (
                <>
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., University of Cape Coast" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grade</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Level 300" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Brief biography or description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* Common fields for both types */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="order"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Order <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          placeholder="Display order (0 = first)"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-y-2">
                  <Label>Photo</Label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {photoFile && (
                    <p className="text-sm text-gray-600">Selected: {photoFile.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium">Active</FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex space-x-3">
                <Button
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Saving...' : (editingLeader ? 'Update' : 'Create')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        )}

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader) => (
              <div key={leader.id} className="admin-card">
                {leader.photo?.url && (
                  <img
                    src={leader.photo.url}
                    alt={leader.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{leader.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {leader.role}
                  </p>
                  {leader.institution && (
                    <p className="text-sm text-gray-500 mb-3">
                      {leader.institution}
                    </p>
                  )}
                  {leader.academicYear && (
                    <p className="text-sm text-gray-500 mb-2">
                      Academic Year: {leader.academicYear}
                    </p>
                  )}
                  {leader.grade && (
                    <p className="text-sm text-gray-500 mb-3">
                      Grade: {leader.grade}
                    </p>
                  )}
                  {leader.bio && (
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {leader.bio}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      leader.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {leader.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(leader)}
                      >
                        <i className="ph ph-pencil"></i>
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(leader.id)}
                      >
                        <i className="ph ph-trash"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
