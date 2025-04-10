import './WidgetOpenButton.scss';

export default function WidgetOpenButton({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
  return (
    <button className={`ai-crypto-w__button-open ${isOpen ? 'ai-crypto-w__button-open_is-open' : ''}`} onClick={() => setIsOpen(true)}>
      <img 
        src="./assets/money.png"
        alt="open" 
        className='icon-money' 
        width={20} 
        height={20}
      />
    </button>
  );
}
