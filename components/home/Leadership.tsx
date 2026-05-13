"use client"

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function Leadership() {
  // Get current academic year (same logic as API)
  const now = new Date();
  const currentYear = now.getFullYear();
  const month = now.getMonth();
  const academicYear = month < 7
    ? `${currentYear - 1}/${currentYear}`
    : `${currentYear}/${currentYear + 1}`;

  // Fetch leadership data using TanStack Query
  const { data: leaders = [], isLoading, error } = useQuery({
    queryKey: ['leadership', academicYear], queryFn: async () => {
      try {
        const base = typeof window !== 'undefined' ? window.location.origin : '';
        const response = await fetch(`${base}/api/leadership?academicYear=${academicYear}`);
        if (!response.ok) {
          console.error('Primary leadership fetch failed', response.status);
          return [];
        }

        let data = await response.json();

        // If no data for the computed academic year, fallback to unfiltered list
        if (Array.isArray(data) && data.length === 0) {
          const fallback = await fetch(`${base}/api/leadership`);
          if (!fallback.ok) {
            console.error('Fallback leadership fetch failed', fallback.status);
            return [];
          }
          data = await fallback.json();
        }

        return data;
      } catch (err) {
        console.error('Error fetching leadership in useQuery', err);
        return [];
      }
    },
  });

  // Debug: log query state in browser console
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.debug('Leadership query', { academicYear, isLoading, error, leaders });
  }

  // Ensure reveal animations trigger for async-loaded elements
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isLoading) return;
    const root = document.getElementById('leadership');
    if (!root) return;
    const els = root.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    els.forEach(el => el.classList.add('active'));
  }, [isLoading, Array.isArray(leaders) ? leaders.length : 0]);

  // Separate coordinator and NEC members
  const coordinator = leaders.find((leader: any) => leader.role.toLowerCase().includes('coordinator'));
  const necMembers = leaders.filter((leader: any) => !leader.role.toLowerCase().includes('coordinator'));

  // Render leader card
  const renderLeaderCard = (leader: any, isCoordinator = false) => (
    <div key={leader.id} className={`leader-card ${isCoordinator ? 'coordinator' : ''} reveal-up`}>
      <div className="leader-image-box">
        {leader.photo ? (
          <img
            src={leader.photo.url}
            alt={leader.name}
            className="leader-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`placeholder-avatar ${leader.photo ? 'hidden' : ''}`}>
          <i className="ph ph-user"></i>
        </div>
      </div>
      {isCoordinator ? (
        <div className="leader-info">
          <span className="role">{leader.role}</span>
          <h3>{leader.name}</h3>
          <p className="institution">{leader.institution}</p>
        </div>
      ) : (
        <>
          <span className="role">{leader.role}</span>
          <h3>{leader.name}</h3>
          <p className="institution">
            {leader.grade ? `${leader.grade}, ` : ''}{leader.institution}
          </p>
        </>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <section id="leadership" className="leadership section bg-light pattern-bg">
        <div className="container">
          <div className="section-title center">
            <span className="subtitle">Guiding the Vision</span>
            <h2>Loading Leadership...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leadership" className="leadership section bg-light pattern-bg">
        <div className="container">
          <div className="section-title center">
            <span className="subtitle">Guiding the Vision</span>
            <h2>Leadership</h2>
            <p className="section-desc">Error loading leadership data: {error instanceof Error ? error.message : 'An error occurred'}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leadership" className="leadership section bg-light pattern-bg">
      <div className="container">
        <div className="section-title center reveal-up">
          <span className="subtitle">Guiding the Vision</span>
          <h2>The {leaders[0]?.academicYear || academicYear} Leadership</h2>
          <p className="section-desc">NUBS–GHANA is led by the National Executive Council (NEC) under the guidance of a National Coordinator appointed by the Ghana Baptist Convention (GBC).</p>
        </div>

        <div className="leadership-grid">
          {/* National Coordinator (Special Card) */}
          {coordinator && renderLeaderCard(coordinator, true)}

          {/* NEC Members */}
          {necMembers.map((leader: any) => renderLeaderCard(leader))}
        </div>
      </div>
    </section>
  );
}
