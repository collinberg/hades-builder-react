

interface Props {
    children?: React.ReactNode;
}
function Main({children}: Props) {
    return (
    <main className='p-4 sm:ml-64'>
        {children}
    </main>
  )
}

export default Main