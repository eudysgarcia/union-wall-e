import TextAnimation from "../components/textAnimation.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faPeopleGroup, faBullhorn} from "@fortawesome/free-solid-svg-icons";
import Reveal from "../components/reveal.tsx";
import CountUpOnView from "../components/countUpOnView.tsx";

export default function Home() {
  return (
    <>
      <section>
        <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-124 border-b border-gray-200 shadow-lg">
          <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2">
            <img
              className="object-cover w-full h-full rounded-lg shadow-lg transform scale-100"
              src="/walle.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-2 max-w-7xl">
            <div className="max-w-[800px] mx-[-230px] text-center">
              <h1 className="mt-3 text-5xl font-bold text-gray-900 sm:mt-8 sm:text-6xl xl:text-8xl">
                <TextAnimation />
              </h1>

              <div className="mt-8 sm:mt-12">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600">
                  Regalando amor, sonrisas y una mano de ayuda a quien más lo
                  necesita.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <a
                  href="#"
                  title=""
                  className="
                        inline-flex
                        items-center
                        justify-center
                        px-8
                        py-3
                        text-base
                        font-bold
                        leading-7
                        text-white
                        transition-all
                        duration-200
                        bg-blue-600
                        border border-transparent
                        rounded-md
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-blue-800
                        focus:ring-offset-[#FFE942]
                    "
                  role="button"
                >
                  Conoce más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mision */}
      <section className="py-20">
        <div className="w-full text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-blue-600 sm:mt-25 sm:text-6xl xl:text-6xl">
              Mision
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl mt-5 sm:text-2xl md:text-lg font-semibold text-gray-600 mx-auto max-w-[1000px]">
              Nuestra misión es transformar la vida de niños y niñas en
              situación de calle, ofreciéndoles oportunidades de desarrollo
              integral en un entorno seguro, lleno de amor y esperanza.
              Trabajamos para brindarles acceso a educación, alimentación, salud
              y acompañamiento emocional, con el firme propósito de devolverles
              la niñez que merecen y guiarlos hacia un futuro digno y lleno de
              posibilidades.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impactos */}
      <section className="py-20">
        <div className="w-full text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-blue-600 sm:mt-25 sm:text-6xl xl:text-6xl">
              Nuestros Impactos
            </h1>
          </Reveal>
          <div className="max-w-2xl mx-auto bg-white">
            <div className="">
              <div className="p-4 bg-white rounded-lg md:p-8 light:bg-gray-800">
                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
                  <Reveal className=" w-[400px] flex flex-col items-center justify-center block max-w-sm p-12 mx-[-290px] bg-white rounded-xl shadow-sm" >
                    <dt className="mb-2 text-6xl font-extrabold text-blue-600">
                      <CountUpOnView to={5000} suffix="+" />
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-600 text-2xl">
                      Familias Ayudadas
                    </dd>
                  </Reveal>

                  <Reveal delay={0.05} className=" w-[400px] flex flex-col items-center justify-center block max-w-sm p-12 mx-[-90px] bg-white rounded-xl shadow-sm">
                    <dt className="mb-2 text-6xl font-extrabold text-blue-600">
                      <CountUpOnView to={200} suffix="+" />
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-600 text-2xl">
                      Voluntarios activos
                    </dd>
                  </Reveal>

                  <Reveal delay={0.1} className=" w-[400px] flex flex-col items-center justify-center block max-w-sm p-12 mx-[100px] bg-white rounded-xl shadow-sm">
                    <dt className="mb-2 text-6xl font-extrabold text-blue-600">
                      <CountUpOnView to={5} suffix="+" />
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-600 text-2xl">
                      Años de servicio
                    </dd>
                  </Reveal>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como puedo ayudar */}
      <section className="py-20">
        <div className="w-full text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-blue-600 sm:text-6xl xl:text-6xl">
              Como puedes ayudar
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-xl mt-5 sm:text-2xl md:text-lg font-semibold text-gray-600 mx-auto max-w-[700px]">
              Tu apoyo puede transformar vidas. Explora las diferentes formas en
              que puedes constribuir a nuestra causa.
            </p>
          </Reveal>

          <div className="flex flex-col items-center justify-center gap-10 mt-10 mx-auto max-w-screen-xl md:flex-row">
            <Reveal className="mt-10 mx-auto max-w-sm p-6 bg-white border border-blue-600 rounded-lg shadow-sm dark:bg-white dark:border-blue-600">
              <FontAwesomeIcon
                icon={faDonate}
                className="text-gray-500 text-3xl dark:text-blue-600 mb-3 bg-blue-300 rounded-full p-4 w-12 h-12"
              />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-600">
                  Donar
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-600">
                Haz una donacion unica o recurrente para apoyar nuestros
                programas.
              </p>
            </Reveal>
            <Reveal delay={0.06} className="mt-10 mx-auto max-w-sm p-6 bg-white border border-blue-600 rounded-lg shadow-sm dark:bg-white dark:border-blue-600">
            <FontAwesomeIcon icon={faPeopleGroup}
                className="text-gray-500 text-3xl dark:text-blue-600 mb-3 bg-blue-300 rounded-full p-4 w-12 h-12"
              />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-600">
                  Voluntariado
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-600">
                Unete a nuestro equipo de voluntarios y dedica de tu tiempo y habilidades para hacer la diferencia.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 mx-auto max-w-sm p-6 bg-white border border-blue-600 rounded-lg shadow-sm dark:bg-white dark:border-blue-600">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-gray-500 text-3xl dark:text-blue-600 mb-3 bg-blue-300 rounded-full p-4 w-12 h-12"
              />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-600">
                  Recaudar fondos
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-600">
                Organiza un evento o campaña para recaudar fondos en apoyo de nuestra misión.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-blue-50 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Empieza a marcar la diferencia hoy
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
              Tu contribución, sin importar el tamaño, puede tener un impacto significativo en
              las vidas de aquellos a quienes servimos.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Donar Ahora
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-700 border-2 border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Únete como Voluntario
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
