import React from 'react';

function Skel({ w, h, style }: { w?: string; h?: string; style?: React.CSSProperties }) {
  return (
    <div
      className="dash-skeleton"
      style={{ width: w ?? '100%', height: h ?? '16px', borderRadius: 8, ...style }}
    />
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="dash-content">
      {/* Hero card skeleton */}
      <div className="dash-section-card" style={{ borderRadius: 'var(--radius-lg)', padding: '36px 40px', height: 200, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Skel w="140px" h="12px" />
        <Skel w="55%" h="28px" />
        <Skel w="70%" h="12px" />
        <Skel h="8px" style={{ borderRadius: 999 }} />
        <Skel w="160px" h="40px" style={{ borderRadius: 12 }} />
      </div>

      {/* Stats grid skeleton */}
      <div className="dash-stats-grid">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="dash-stat-card" style={{ gap: 12 }}>
            <Skel w="40px" h="40px" style={{ borderRadius: 12 }} />
            <Skel w="60px" h="30px" />
            <Skel w="80%" h="12px" />
            <Skel w="60%" h="12px" />
          </div>
        ))}
      </div>

      {/* Bottom grid skeleton */}
      <div className="dash-bottom-grid">
        {/* Recently accessed */}
        <div className="dash-section-card">
          <div className="dash-section-header">
            <Skel w="140px" h="16px" />
            <Skel w="50px" h="12px" />
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="dash-recent-item" style={{ cursor: 'default' }}>
              <Skel w="38px" h="38px" style={{ borderRadius: 10, flexShrink: 0 }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Skel w="75%" h="13px" />
                <Skel w="50%" h="11px" />
              </div>
              <Skel w="40px" h="11px" />
            </div>
          ))}
        </div>

        {/* Courses table */}
        <div className="dash-section-card">
          <div className="dash-section-header">
            <Skel w="100px" h="16px" />
            <Skel w="90px" h="12px" />
          </div>
          <div style={{ padding: '0 18px 8px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border-soft)' }}>
                <Skel w="36px" h="36px" style={{ borderRadius: 10, flexShrink: 0 }} />
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <Skel w="80%" h="13px" />
                  <Skel w="55%" h="11px" />
                </div>
                <Skel w="80px" h="12px" style={{ flex: 1 }} />
                <Skel w="70px" h="22px" style={{ borderRadius: 999, flex: 0 }} />
                <div style={{ display: 'flex', gap: 6 }}>
                  <Skel w="32px" h="32px" style={{ borderRadius: 9 }} />
                  <Skel w="32px" h="32px" style={{ borderRadius: 9 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
