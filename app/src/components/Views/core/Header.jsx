function Header({ children }) {
  console.log('Header -> render')
  return <header className='w-full'>{children}</header>
}

export default Header