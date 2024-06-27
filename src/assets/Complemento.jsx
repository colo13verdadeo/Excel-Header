import { Seccion1 } from "./Secciones-Nav/Seccion_1"
import { Seccion2 } from "./Secciones-Nav/Seccion_2"
import { Seccion3 } from "./Secciones-Nav/Seccion_3"
import { Seccion4 } from "./Secciones-Nav/Seccion_4"
import { Seccion5 } from "./Secciones-Nav/Seccion_5"
export function Navbar()
{
    return(
        <main>
            <nav>
                <section className="SeccionMain">
                    <Seccion1></Seccion1>
                    <Seccion2></Seccion2>
                    <Seccion3></Seccion3>
                    <Seccion4></Seccion4>
                    <Seccion5></Seccion5>
                </section>
            </nav>
        </main>
    )
}