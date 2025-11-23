import { useEffect, useState } from "react";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      try {
        const res = await fetch("http://localhost:5000/api/clients"); 
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.log("Backend not ready, using hardcoded data for testing.");

        // HARD-CODED TEST DATA (REMOVE LATER IF YOU WANT)
        setClients([
          {
            id: 1,
            name: "AIMS HOSPITAL",
            location: "Mumbai / Maharashtra",
            logo: t1,
          },
          {
            id: 2,
            name: "NIDAN VENTURES",
            location: "Ghatkopar / Maharashtra",
            logo: t2,
          },
          {
            id: 3,
            name: "AYUSH HOSPITAL",
            location: "Kalyan / Maharashtra",
            logo: t3,
          },
          {
            id: 4,
            name: "MAXILIFE HOSPITAL",
            location: t4,
            logo: t4,
          },
          {
            id: 5,
            name: "CENTURY RAYON",
            location: "Ulhasnagar / Maharashtra",
            logo: t5,
          }
        ]);
      }
    }

    loadClients();
  }, []);

  const dotColors = ["#3ac9a8", "#ff008c", "#febc24", "#d4e93e", "#b14b90"];

  return (
    <>
    <section className="bg-[#F5F5F5] w-full py-20 px-6 md:px-20">

      <h2 className="text-4xl font-semibold text-center mb-12 text-[#222]">
        Our Clients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 place-items-center">
        {clients.map((c, index) => (
          <div key={c.id} className="flex flex-col items-center text-center">

            <div className="w-32 h-32 rounded-full shadow-xl bg-white flex items-center justify-center" style={{ backgroundColor: dotColors[index % dotColors.length] }}>
              <img
                src={c.logo}
                alt={c.name}
                className="w-28 h-28 rounded-full object-contain"
              />
            </div>

            <div
              className="w-4 h-4 rounded-full mt-3"
              style={{ backgroundColor: dotColors[index % dotColors.length] }}
            ></div>

            <h3 className="mt-3 text-xl font-semibold text-black leading-tight">
              {c.name}
            </h3>

            <p className="mt-1 text-gray-600 text-sm leading-tight">
              {c.location}
            </p>

          </div>
        ))}
      </div>
    </section>
    </>
  );
}
