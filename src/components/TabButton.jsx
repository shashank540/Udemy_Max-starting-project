export default function TabButton({children, onClick}) {
console.log('TabButton component is rendering');
  return (
      <div>
          <li>
              <button onClick={onClick}>{children}</button>
          </li>
      </div>
  );
}