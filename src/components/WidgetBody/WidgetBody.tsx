import './WidgetBody.scss';

export default function WidgetBody({isOpen}: {isOpen: boolean}) {
  return (
    <div className={`ai-crypto-w__widget-body ${isOpen ? 'ai-crypto-w__widget-body_is-open' : ''}`}>
      <h1>AI Crypto</h1>
    </div>
  );
}
