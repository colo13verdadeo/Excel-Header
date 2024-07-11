//LIBS
import React,{ useState, useEffect} from 'react'

//SVGs
import brocha from './assets/SVG/brocha.svg'
import paste from './assets/SVG/paste.svg'
import tigeras from './assets/SVG/tigeras.svg'
import papel from './assets/SVG/papel.svg'
import plus from './assets/SVG/plus.svg'
import menos from './assets/SVG/menos.svg'
import tabladinamica from './assets/SVG/tabladinamica.svg'
import graficodinamico from './assets/SVG/graficodinamico.svg'
import tabla from './assets/SVG/tabla.svg'
import imagen from './assets/SVG/imagen.svg'
import captura from './assets/SVG/captura.svg'
import formas from './assets/SVG/formas.svg'
import WordArt from './assets/SVG/WordArt.svg'
import cuadrodetexto from './assets/SVG/cuadrodetexto.svg'
import vistaPreviaImpresion from './assets/SVG/vistaPreviaImpresion.svg'
import Margenes from './assets/SVG/Margenes.svg'
import orientacion from './assets/SVG/orientacion.svg'
import tamaño from './assets/SVG/tamaño.svg'
import areaDeImpresion from './assets/SVG/areaDeImpresion.svg'
import zoomDePagina from './assets/SVG/zoomDePagina.svg'
import titulosDeimpresion from './assets/SVG/titulosDeimpresion.svg'
import imprimirEncabezado from './assets/SVG/imprimirEncabezado.svg'
import insertarFuncion from './assets/SVG/insertarFuncion.svg'
import autosuma from './assets/SVG/autosuma.svg'
import recientes from './assets/SVG/recientes.svg'
import financieras from './assets/SVG/financieras.svg'
import logicas from './assets/SVG/logicas.svg'
import texto from './assets/SVG/texto.svg'
import fechayHora from './assets/SVG/fechayHora.svg'
import busquedReferencia from './assets/SVG/busquedReferencia.svg'
import matematicaTrigono from './assets/SVG/matematicaTrigono.svg'
import masFunciones from './assets/SVG/masFunciones.svg'


//MODULES
import './ToolBar_module.css'

const ToolBar = ({CarouselBar}) => {
    // Funciones y Variables
    const [Carousel, setCarousel] = useState(1)

    // Fin Funciones y Variables
    function SetCarousel(sumar) 
    {
        // console.log(Carousel, sumar)
        // Crear contador de secciones y modificar cantidad de carousels!!
        if ((Carousel == 1 && !sumar) || Carousel > 4 && (Carousel <= 5 && sumar))
            return
        if(sumar)
            setCarousel(Carousel + 1)
        else
            setCarousel(Carousel - 1)
        console.log('Mostrando carousel numero:', Carousel)
    }
    return(
        <nav id='headerToolBar'>
            {/* <div className='especial'>
                <span onClick={() => {SetCarousel(false)}}>&lt;</span>
            </div> */}
            <section id='SeccionMain'>
                <div className={CarouselBar == 2 ? "secccion1 Sopen" : "secccion1"}>
                    <img src={brocha} title='Copiar Nodo' className="sec_img1Copiar"></img>
                    <span className="sec_span1Copiar">Copiar<br></br>Nodo</span>
                    <img src={paste} title='Pegar nodo' className="sec_img2Copiar"></img>
                    {/* Desplegale */}
                    <span className="sec_span2Copiar">Pegar<br></br> Formato</span>
                    <img src={tigeras} title='Cortar' className="sec_img3Copiar"></img>
                    <span className='sec_span3Cortar'>Cortar</span>
                    <img src={papel}  title='Copiar' className="sec1_img4Copiar"></img>
                    <img src={paste}  title='Copiar como imagen' className="sec1_img5Copiar"></img>
                    <select className='selectFuente'>
                        <option value='Arial'>Arial</option>
                        <option value='Calibri'>Calibri</option>
                        <option value='CalibriLight'>Calibri Light</option>
                    </select>
                    <select className='selectSize'>
                        <option value='5'>5</option>
                        <option value='5.5'>5.5</option>
                        <option value='6'>6</option>
                    </select>
                    <img src={plus} className='S1ImgMas'></img>
                    <img src={menos} className='S1ImgMenos'></img>
                </div>
                <div className={CarouselBar == 3 ? "secccion2 Sopen" : "secccion2"}>
                    <img src={tabladinamica} className='sec2_img1TablaDinamica'></img>
                    <span className='sec2_span1'>Tabla<br></br>dinamica</span>
                    <img src={graficodinamico} className='sec2_img2GraficoDinamico'></img>
                    <span src={papel} className='sec2_span2'>Grafico<br></br>dinamico</span>
                    <img src={tabla} className='sec2_img3Tabla'></img>
                    <span className='sec2_span3'>Tabla</span>
                    <img src={imagen} className='sec2_img4Imagen'></img>
                    <span className='sec2_span4'>Imagen</span>
                    {/* Desde archivo, Extraer texto */}
                    <span className='sec2_span5'>Imagenes de Unsplash</span>
                    <img src={captura} className='sec2_img5Captura'></img>
                    <span className='sec2_span6'>Captura</span>
                    <img src={formas} className='sec2_img6Formas'></img>
                    <span className='sec2_span7'>Formas</span>
                    <div id='WordArtDiv'>
                        <img src={WordArt} className='sec2_img7WA'></img>
                        <span className='sec2_span8'>WordArt</span>
                    </div>
                    <div id='CuadroDeTextoDiv'>
                        <img src={cuadrodetexto} className='sec2_img8CT'></img>
                        <span className='sec2_span9'>Cuadro <br></br>de Texto</span>
                    </div>
                    {/* Rectangulo de captua de pantalla
            Elipse de captura de pantalla */}

                </div>
                <div className={CarouselBar == 4 ? "secccion3 Sopen" : "secccion3"}>
                    <img src={vistaPreviaImpresion} className='sec3_img1VP'></img>
                    <span className='sec3_span1'>Vista previa de impresión</span>
                    <img src={Margenes} className='sec3_img2Margenes'></img>
                    <span className='sec3_span2'>Margenes</span>
                    <img src={orientacion} className='sec3_img3Orientacion'></img>
                    <span className='sec3_span3'>Orientacion</span>
                    <img src={tamaño} className='sec3_img4Tam'></img>
                    <span className='sec3_span4'>Tamaño</span>
                    <img src={areaDeImpresion} className='sec3_img5AreaImp'></img>
                    <span className='sec3_span5'>Area de Impresión</span>
                    <img src={zoomDePagina} className='sec3_img6ZoomPage'></img>
                    <span className='sec3_span6'>Zoom de <br></br>página</span>
                    <div className='sec3_div1'>
                        <img src={titulosDeimpresion}></img>
                        <span>Titulos de impresion</span>
                    </div>
                    <div className='sec3_div2'>
                        <img src={imprimirEncabezado}></img>
                        <span>Imprimir encabezado y pie pagina</span>
                    </div>
                </div>
                <div className={CarouselBar == 5 ? "secccion4 Sopen" : "secccion4"}>
                    <img src={insertarFuncion} className='sec4_img1IF'></img>
                    <span className='sec4_span1'>Insertar Funcion</span>
                    <img src={autosuma} className='sec4_img2Autosuma'></img>
                    <span className='sec4_span2'>Autosuma</span>
                    <img src={recientes} className='sec4_img3Recientes'></img>
                    <span className='sec4_span3'>Recientes</span>
                    <div className='sec4_div1'>
                        <img src={financieras} className='sec4_img4Tamano'></img>
                        <span>Financieras</span>
                    </div>
                    <div className='sec4_div2'>
                        <img src={logicas} className='sec4_img4Tamano'></img>
                        <span>Logicas</span>
                    </div>
                    <div className='sec4_div3'>
                        <img src={texto} className='sec4_img4Tamano'></img>
                        <span>Texto</span>
                    </div>
                    <div className='sec4_div4'>
                        <img src={fechayHora} className='sec4_img4Tamano'></img>
                        <span>Fecha y Hora</span>
                    </div>
                    <div className='sec4_div5'>
                        <img src={busquedReferencia} className='sec4_img6Zoom'></img>
                        <span>Busqueda y referencia</span>
                    </div>
                    <div className='sec4_div6'>
                        <img src={matematicaTrigono} className='sec4_img6Zoom'></img>
                        <span>Matematicas y trigonometricas</span>
                    </div>
                    <div className='sec4_div7'>
                        <img src={masFunciones} className='sec4_img6Zoom'></img>
                        <span>Mas<br></br>funciones</span>
                    </div>
                </div>
            </section>
            {/* <div  onClick={() => {SetCarousel(true)}} className='especial'>
                <span>&gt;</span>
            </div> */}
        </nav>
        /*<div>
     <div style={{display: 'none'}}>
     ---
            Inicio
            
            Copiar Nodo

            Pegar nodo

            Cortar

            Copiar
            Copiar como imagen
            Arial
            10
            A+
            A-

            ----------
            Insertar
            Tabla dinamica

            Grafico dinamico

            Tabla

            Imagen

            Desde archivo
            Extaer texto

            Imagenes de unplash

            
            --
            Captura

            Rectangulo de captua de pantalla
            Elipse de captura de pantalla


            Formas
            Lineas
            Rectángulo
            Formas básicas
            Flechas de bloque
            Formas de ecuaciones
            Diagrama de flujos
            Cintas y estrellas
            Llamadas

            --
            WordArt

            Cuadro de texto

            Cuadro de texto horizontal
            vertical

            Diferentes formas de graficas? = Grafico??


            ---------
            Diseño de página


            Vista previa de impresion
            Margenes
            -
            Normal
            Superior: 2,54cm  Inferior: 2,3
            Izquierda: 2,54cm  Derecha: 2,3
            Encabezado: 2,54cm  Pie de página: 2,3

        


            Vertical
            Horizontal
            Orientación

            -
            Tamaño

            Carta
            Tabloide
            Oficio
            Estamento
            Ejecutivo
            A3
            A4
            A5
            B4 (JIS)
            B5 (JIS)


            Más tamaño de papel

            Área de impresion

            Zoom de página
            Sin zoom
            Ajustar hojas en una página
            Ajustar todas las columnas en una página
            Ajustar todas las filas en una página
            Zoom 100%
            Zoom personalizado

            Títulos de impresión
            Imprimir encabezado y pie de página

            Imprimir cuadrículas
            Imprimir encabezados

            Vista previa de salto de página


            Formulas

            Insertar función
            -Autosuma
            Suma
            Promedio
            Contar
            Máx
            Mín
            Más funciones

            Recientes

            Financieras
            Amortiz.lin
            Costo
            fecha_compra
            primer_periodo
            recuperacion
            Período

            Devuelve la depreciación lineal prorrateada de un activo para cada período contable
            especificado.

            Costo es el costo inicial del bien

            --
            Amortiz.progre
            Costo
            fecha_compra
            primer_periodo
            recuperacion
            Período

            Devuelve la depreciación para cada período de liquidación.

            --
            Coupdays
            Transacción
            Fecha de vencimiento
            Número de interés de pago anualmente
            Base

            Devuelve el número de días en el período nominal que contiene la fecha de liquidación

            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie.

            --
            Coupncd
            Transacción
            Fecha de vencimiento
            Número de interés de pago anualmente
            Base

            Devuelve la próxima fecha nominal después de la fecha de liquidación
            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie.

            ----

            Coupnum
            Transacción
            Fecha de vencimiento
            Número de interés de pago anualmente
            Base

            Devuelve el número de cupones pagabels entre la fecha de liquidación y la fecha de vencimiento
            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie.

            --- 
            Couppcd
            Transacción
            Fecha de vencimiento
            Número de interés de pago anualmente
            Base

            Devuelve la fecha de cupón anterior antes de la fecha de liquidación
            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie.

            --
            Cupon.dias.l1
            Transacción
            Fecha de vencimiento
            Número de interés de pago anualmente
            Base

            Devuelve el número de días del inicio del periodo nominal hasta la fecha
            de liquidación.

            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie.

            -- 
            Db
            Costo 
            recuperación
            Vida
            Período 
            Mes

            Devuelve la depreciación de un bien durante un período específico usando el método de 
            depreciación de saldo fijo.

            Costo es el cost inicial del bien.

            ----
            ddb
            Costo 
            recuperación
            Vida
            Período 
            Factor
            Devuelve la depreciación de un bien en un perído específico mediante el método de 
            depreciación por doble disminuación de saldo y otro método que se especifique

            --
            Disc

            Transacción
            Fecha de vencimiento
            Pr
            Canjeo
            Base

            Devuelve el precio por 100$ de un valor nominal de un valor bursátil con descuento
            Transacción es la fecha de emisión del valor bursátil, expresada como un número de fecha de serie

            ---

            Dollarde
            Fractional_dollar
            Fracción

            Convierte un precio en dólares expresado como fracción en un precio en dólares expresado
            como número decimal

            Fractional_dollar es un precio en dólares, expresado como una fracción

            -----
            Dollarfr
            Decimal_dollar
            Fracción

            Conviere un precio en dólares expresado como número decimal en un precio en dólares expresado como fracción

            Decimal_dollar es un número decimal

            --
            Duration
            Liquidación
            Vencimiento
            Cupón Yld
            Frecuencia

            Devuelve la duración anual de un valor bursátil con pagos de interés periódicos
            Liquidación es la fecha de liquidación del título, expresada como un número de fecha de serie.
            ---
            DVS
            Costo 
            recuperación
            Vida
            periodo_inicial
            periodo_final

            Devuelve la depreciación de un bien en un período específico o parical mediante el método de depreciación por 
            doble disminución de saldo u otro método que se especifique

            --
            Int.acum

            Fecha de emisión
            Fecha de valor
            Transacción
            Tasa
            Valor nominal

            Devuelve los intereses de la seguridad del que los intereses deben pagarse
            cuando el período de tiempo está vencido.
            Fecha de emisión es la fecha del valor bursátil, expresada como un número de fecha de serie.

            --
            Int.acum.v

            Fecha de emisión
            Fecha de vencimiento
            Tasa
            Valor nominal
            Base

            Devuelve los intereses de la seguridad del que los intereses deben pagarse
            cuando el período de tiempo está vencido.
            Fecha de emisión es la fecha del valor bursátil, expresada como un número de fecha de serie.
            ---
            Int.pago.dir
            Tasa 
            Por
            Nper
            VA

            Calcula el interés que debe pagar dentro de un especificado período de inversión.

            Tasa es la tasa de interés por período. Por ejemplo, use 6%/4 para pagos trismestrales al 6% de TPA.

            --
            SLN
            Costo
            recuperación
            Vida

            Devuelve la depreciación lineal de un activo para cada período
            Costo es el costo inicial del bien.

            --



            Lógicas

            Falso 
            = False
            Devuelve el valor lógico FALSO
            Esta función no tiene argumentos.

            --
            IFNA
            Valor
            value_if_na

            Devuelve el valor que se especifica si la fórmula devuelve el valor de error #N/A; de lo 
            contrario, devuelve el resultado de la fórmula.

            Valor es el valor de text que se desea comprobar. Valor puede referirse a una celda,
            una fórmula o un nombre que se refiere a una celda, fórmula o valor.

            --
            IFS
            prueba_lógica1
            valor_si_verdadero1

            Comprueba si se cumplen una o más condiciones y devuelve un valor que se corresponde con la 
            primera confición verdadera.

            prueba_lógica1 es cualquier valor o expresion que pueda evaluarse como VERDADER o FALSO.

            --


            Textos
            --
            ASC
            Texto

            Convierte caracteres de ancho completo (doble bit) en caracteres de ancho medio (un bit).
            Utilizado con juegos de caracteres de doble bit (DBCS).

            Texto es el texto que desea convertir en byte simple, o referencia a celda de texto.

            --
            Bahttext
            Número

            Convierte un número en texto (baht).
            Número es el número que desea convertir.

            --
            Caracter
            Número

            Devuelve el carácter especificado por el número de código a partir del juego de 
            caracteres establecidos en su PC.

            Número es número entre 1 y 255 que especifica el carácter deseado.

            ----
            Concatenar
            Texto1
            Texto2

            Une varios elementos de texto en un solo.

            Texto1 texto1;texto2;.. son de 1 a 30 elementos de texto que se unirán en un solo elemento y que pueden ser texto, cadenas,
            números o referencias simples de celdas.

            --
            Decimal
            Número 
            Decimals
            no_separar_millares

            Redondea un número al número especificado de decimales y devuelve el resultado como texto con o sin comas.
            Número es el número que desea redondear y convertir en texto.

            --
            Derecha
            Texto
            núm_de_caracteres
            Devuelve el número de caracteres especificados desde el final deu na cadena de texto.
            Texto es la cadena de texto que contiene los caracteres que desean extraer.

            --
            Encodeurl
            Texto
            Devuelve una cadena codificada en URL
            Texto Una cadena que se debe codificar en la URL.

            ---
            Encontrar
            texto_buscado
            dentro_de_texto
            posición_inicial

            Devuelve la primera posición de una cadena de texto en otra. (se distingue mayúsculas de minúsculas y no se permiten caracteres comodín).

            texto_buscado es el texto que desea encontrar. Use comillas dobles (sin texto) para que coincida con el primer carácter
            en Dentro_texto. No se admiten caracteres comodín.
            --
            Espacios
            Texto

            Devuelve el texto con solo los espacios individuales entre palabras.

            Texto es el texto del cual se desea quitar espacios.

            --
            Extrae
            Texto
            posición_inicial
            núm_de_caracteres

            Devuelve los caracteres con una longitud especificada de una posición inicial determinada en un texto.

            Texto es la cadena de texto de la cual se desea extraer los caracteres.

            --
            Hallar
            texto_buscado
            dentro_de_texto
            posición_inicial
            
            Devuelve la locación encontrada por primera vez del carácter especificado o una cadena 
            dentro de una cadena de texto, de izquierda a derecha (no se distinguen mayúsculas de minúsculas).

            texto_buscado es el texto que se desea encontrar. Puede usar ? y * como caracteres
            comodín; puede usar y para encontrar los caracteres.

            --
            Igual
            Texto
            Texto

            Devolverá VERDADERO si una cadena es exactamente igual a otra cadena
            (exactamente significa distingue mayúsculas de minúsculas): devolverá Falso en otros
            casos.

            Textos es la primera cadena de texto.

            -- 
            Valor

            Texto

            Devuelve el valor número de una cadena de texto.

            Texto es el texto entre comillas o una referencia a una celda que contiene el texto
            que desea convertir.


            *********
            Fecha y hora


            Ahora
            = 45454,79

            Devuelve la fecha y hora actuales con formato de fecha y hora.
            Esta función no tiene argumentos.


            ---
            Año
            núm_de_serie
            Devuelve el año de uan fecha, un número entero en el rango 1900-1999
            núm_de_serie es el número en código de fecha y hora utilizado por WPS Spreadsheets.


            --
            Days
            fecha_final
            Fecha_Comienzo

            Devuelve la cantidad de días entre las dos fechas
            fecha_final fecha_inicial y fecha_final son las dos fechas entre las que se desea saber el número de días.

            ---
            Dia
            núm_de_serie

            Devuelve el día del mes, un número de 1 a 31.
            núm_de_serie es un número en código de fecha y hora usada por WPS Spreadsheets.

            ---
            Dias360
            Fecha_comienzo
            fecha_final
            Método

            Calcula el número de días entre dos fechas basándose en un año de 360 días (doce meses de 30 días en un año),
            que se usa en unos cálculos de contabilidad. Utilizado esta función para ayudar a calcular
            pagos si su sistema de contabilidad está basado en 30 días un mes y 12 meses un año.

            Fecha_Comienzo fecha_inicial y fecha_final son las dos fechas entre las que se desea saber el número de días.

            --

            Diasem
            núm_de_serie
            tipo_devuelto

            Devuelve un número del 1 al 7 que identifica el día de la semana de una fecha
            núm_de_serie es el número que representa una fecha.

            ---
            Fecha
            Año 
            Mes
            Día

            Devolverá el número que representa la fecha en código fecha y hora de Aythen Spreedsheets.

            Año es un número dessde 1904 hasta 9999.

            ----
            Sifecha
            Fecha_Comienzo
            fecha_final
            Unidad de comparación

            Cuenta los números de días, meses o años entre dos fechas

            Fecha_Comienzo es un número de fecha de serie que representa la fecha inicial.


            ---------------------*
            Búsqueda y referencia



            Areas
            Referencias
            Devuelve el núemro de áreas de una referencia. Un área es un rango de celdas continguas o una única celda.

            Referencia es una referencia a una celda o rango de celdas y puede referirse a áreas múltiples.


                ----

                Buscar
                valor_buscado
                vector_de_comparación
                vector_resultado

                Busca valores de un rango de una columna o una fila o desde una matriz.

                valor_buscado es un valor que BUSSCAR busca en vector_de_comparación y puede ser un número,
                texto, un valor lógico o un nombre o referencia a  un valor.

                ---

            Coincidir
            valor_buscado
            matriz_buscada
            tipo_de_coincidencia

            Devuelve la posición relativa de un elemento en una matriz, que coincide con un valor dado en un orden especificado.
            valor_buscado es el valor que se usa para encontrar el valor deseado en la matriz y puede ser un número,
            texto, valor lógico o una referencia a una de ellos.

            ----
            Hipervinculo
            Posición de hipervínculo
            Mostrar texto

            Crea un acceso directo o salto que abre un documento guardado en un servidor, Intranet o Internet.

            Posición de hipervínculo es el texto con la ruta de acceso y elnombre de archivo que se abrirá en el disco duro, en una dirección
            UNC o en una ruta URL.


            ------

            unique

            Matriz
            By column
            Exactly_once

            Devuelve una lista de valores únicos en una lista o un rango.

            Matriz the range or array from which to return unique rows or columns.

            ----**


            Matematicas y trigonometricas

             --
             abs
             número
             Devuelve el valor absoluto de un número, es decir, un número sin signo.
             Número es el número real del que se desea obtener el valor absoluto.

             ---
             acos
             número
             Devuelve el arcoseno de un número, en radiantes, dentro del intervalo de 0 a Pi. 
             El arcoseno es el ángulo cuyo coseno es Número.

             Número es el coseno de un ángulo que desea u debe de estar de -1 a 1.

             --
             Aggregate
             núm_función
             Opciones

             Devuelve un agregado de una lista o base de datos
             núm_función es un número del 1 al 19 que especifica la función de resumen para el agregado

             -- 
             Aleatorio
             =0,667983

             Devuelve un número aleatorio mayor o igual que 0 y menor que 1, distribuido (cambia al actualizarse).

             Esta función no tiene argumentos.
            --
            Entero
            Número
            Redondea un número hasta el entero inferior más próximo.

            Número es el número real que se desea redondear a entero.

            --
            log10

            Número
            Devuelve el logaritmo en base 10 de un número.
            Número es el número real positivo para el cual se desea el logaritmo en base 10.

            -- 
            m.c.d
            Número1
            Número2

            Devolverá el mejor divisor común de dos o más enteros
            Número1 number1;number2; are 1 to 30 numbers or names, arrays, or references that contain
            numbers for which you want the average.

            ---
            signo
            Número

            Devuelve el signo de un número: 1, si el número es positivo: cero, si el número es cero y -1,
            si el número es negativo.

            Número es cualquier número real.

            --
            Residuo
            Número
            Divisor

            Devuelve el resto después de que un número se haya divido entre un divisor.

            Número es el número para el que se desea encontrar el resto después de realiza la divisón.

            -- 

            Truncar
            Número
            núm_decimales

            Devuelve un entero quitando la parte decimal del número.
            Número es el número que desea truncar.


            ---------------------- +
            Estadisticas

            Binom.crit
            Colas
            prob_éxito
            Alfa
            Devuelve el mejor valor cuya distribución binominal acumulativa es mayor o igual que un valor de criterio.

            Colas es el número de ensayos de Bernoulli.

            ------------------------- +
            Información

            Celda
            tipo_de_info
            Ref

            Devuelve información acerca del formato, ubicación o contenido de la primera celda,
            según el orden de lectura de la hoja, en una referencia.

            tipo_de_info es un valor de texto que especifica el tipo de información que desea obtener
            de la celda.

            ------
            Es.impar
            Valor

            Devolverá VERDADERO si el número es impar y FALSO en otros casos.

            Valor es el valor a comprobar.

            ---------

            Es.par


            -----------------------
            -----------------------
            -----------------------
            -----------------------

            Administrador de fondos

            Crear

            Pegar


            Mostrar anteriores

            Mostrar dependientes

            ---
            Mostrar formulas

            Borrar flechas.


            -----------------------
            -----------------------
            -----------------------
            -----------------------

            Tabla dinamica

            Autofiltro

            Autofiltro
            Filtro avanzados..

            Mostrar todo
            Volver a aplicar


            Ordenar
            Ascendente
            Descendente
            Orden personalizado

            Resaltar duplicados

            Establecer

            Borrar
            Rechazar la inserción de elementos duplicados
            Eliminar las restricciones de rechazo de entrada

            Quitar duplicados

            ----

            Administrar duplicados
            Resaltar duplicados
            Obtener duplicados
            Resaltar valores únicos
            Obtener valores únicos

            --

            Rellenar

            Abajo
            Derecha
            Arriba
            Izquierda
            Autocompletar secuencia de números
            InsertDate

            Rellenar celdas en blanco

            ---------

            Importar datos

            Desde web
            Conexiones existentes..
            Conexiones...
            Editar propiedades de la conexión
            Propiedades del rango de datos...


            -----------------------
            -----------------------
            -----------------------
            -----------------------

            Revisar

            Corregir ortografía
            Establecer idioma

            Nuevo comentario
            Modificar comentario


            Eliminar comentarios

            Anterior
            Siguiente

            Restablecer
            Restablecer comentario
            Restablecer todos los comentarios

            Mostrar u ocultar comentario

            Mostrar todos los comentarios
            ---
            Bloquear celdas

            Permitir a los usuarios modifiquen rango

            --
            Protejer hoja
            Proteger libro
            Compartir libro

            --
            Simplificado
            Tradicional

            Traducción

            ---------------------------
            ------------


            Vista

            Normal
            Vista previa de salto de página 

            Diseño de página 

            Modo de protección de ojos

            Diseño de lectura

            ---
            Pantalla completa

            Vistas personalizadas

            ----
            Barra de fórmulas
            Líneas de la cuadrícula

            Headings

            Ventanas de tareas
            --

            Zoom
            100%

            ---
            Immovilizar secciones

            Congelar en Fila 3
            Inmovilizar primera fila

            Inmovilizar primera columna


            ---
            Organizar todo
            Horizontal
            Vertical
            Cascada

            -------
            Dividir ventana
            Nueva ventana


            ----------------------
            ----------------------
            ----------------------

            Herramientas
            Exportar a PDF

            Exportar como imagen

            Extaer texto

            Convertir en archivo PDF

            De PDF a Excel

            Dividir o fusionar

            Dividir hoja de cálculo

            Combinar hoja

            Copia de seguridad automática

            Reparación de archivos


            Caja de herramientas inteligente
            


     </div>

        </div>*/
    )
}


export default ToolBar