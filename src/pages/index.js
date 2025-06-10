import * as React from "react"
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const particlesOptions = {
                        background: {
                            color: {
                                value: "#030303",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#FFFFFF",
                            },
                            links: {
                                color: "#FCFCFC",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 250,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    };

    return (
        <>
            {init && (
              <>
                <Particles
                    id="tsparticles"
                    className="fixed inset-0 z-[-1]"
                    particlesLoaded={particlesLoaded}
                    options={particlesOptions}
                />
                <div className="flex flex-col h-screen items-center justify-center text-white">
                  <h1 className="text-7xl font-bold">Omer Almas</h1>
                  <div className="text-center mt-4 text-3xl max-w-2xl">
                    <p className="inline text-red-300">Welcome to my personal website!</p>
                    <p className="inline ml-2">This is a work in </p>
                    <p className="inline ml-2 text-yellow-400">progress</p>
                    <p className="inline ml-2">, stay tuned for</p>
                    <p className="inline ml-2 text-green-300">updates.</p>
                    <p className="inline ml-2">Meanwhile you can contact me at </p>
                    <p className="inline ml-2 text-red-700">sheikhomeralmas@gmail.com</p>
                  </div>
                  <div className="text-center mt-4 text-3xl max-w-2xl">
                    <p className="inline">I am currently serving as </p>
                    <p className="inline ml-2 text-yellow-300">Specialist Information Technology</p>
                    <p className="inline ml-2">at</p>
                    <p className="inline ml-2 text-red-700">u-blox</p>
                  </div>
                </div>
              </>
            )}
        </>
    );
};

export default App;