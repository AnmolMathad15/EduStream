import { useRoute } from "wouter";

export default function NotFound() {
  const [match] = useRoute("/404");

  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>404 Not Found</h1>
      <p style={{ marginTop: '8px' }}>The page you are looking for does not exist.</p>
    </div>
  );
}