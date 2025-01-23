interface Props {
    children?: React.ReactNode;
}

function Sidebar({children}: Props) {
  return (
    <aside id="default-sidebar" className="fixed pt-12 top-0 left-0 z-20 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-4 py-8 overflow-y-auto">
            {children}
         </div>
    </aside>
  )
}

export default Sidebar