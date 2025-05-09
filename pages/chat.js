import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hey there—welcome to MovingCo. I’ll give you a real price range right here in chat. Where are you moving from?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (const [stage, setStage] = useState(0);
const [formData, setFormData] = useState({ from: '', to: '' });

const handleSend = () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: 'user', text: input }];
  let botReply = '';

  if (stage === 0) {
    setFormData({ ...formData, from: input });
    botReply = 'Thanks! What city are you moving to?';
    setStage(1);
  } else if (stage === 1) {
    setFormData({ ...formData, to: input });
    botReply = `Got it—${formData.from} to ${input}. Solid route. What kind of place are you moving out of?`;
    setStage(2);
  } else {
    botReply = "Thanks! We'll keep building from here.";
  }

  setMessages([...newMessages, { role: 'bot', text: botReply }]);
  setInput('');
};) => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }, { role: 'bot', text: 'Thanks! What city are you moving to?' }]);
    setInput('');
  };

  return (
    <main style={{ fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        MoveSafe Chat Concierge
      </header>
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', background: '#f6f6f6' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '1rem', textAlign: msg.role === 'bot' ? 'left' : 'right' }}>
            <div style={{ display: 'inline-block', padding: '0.75rem 1rem', borderRadius: '1rem', background: msg.role === 'bot' ? '#e0e0e0' : '#d1eaff' }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <footer style={{ display: 'flex', padding: '1rem', background: '#fff', borderTop: '1px solid #ccc' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '0.75rem', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSend} style={{ marginLeft: '0.5rem', padding: '0.75rem 1rem', fontSize: '1rem' }}>
          Send
        </button>
      </footer>
    </main>
  );
}
