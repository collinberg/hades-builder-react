import Aspect from "./BuildSelector";


function Sidebar() {
    return(
        <>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-4 py-4 overflow-y-auto">
                <section id='weapon-side' className="space-y-2 font-medium">
                    <h2>Weapon</h2>
                    <div className='weapon_wrap'>
                        <Aspect>Weapon</Aspect>
                    </div>
                    <div className="weapon_wrap">
                        <Aspect>Aspect</Aspect>
                    </div>
                </section>
                <section id='aspect-side'>
                    <h2>Abilities</h2>
                    <Aspect>Attack</Aspect>
                    <Aspect>Special</Aspect>
                    <Aspect>Cast</Aspect>
                    <Aspect>Dash</Aspect>
                    <Aspect>Call</Aspect>
                </section>
            </div>
        </aside>
      </>
    )
}
export default Sidebar;