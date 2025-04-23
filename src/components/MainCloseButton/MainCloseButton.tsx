import './MainCloseButton.scss';

export default function MainCloseButton({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) {
  return (
    <button className="ai-crypto-w__button-close" onClick={() => setIsOpen(false)} />
  );
}
