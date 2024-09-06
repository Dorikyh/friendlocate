import { Member } from "@/types/member";
import SectionTitle from "../Common/SectionTitle";
import Single from "./single";

const teamData: Member[] = [
  {
    id: 1,
    name: "Nicolas Sandoval",
    instagram: "r.o.d.s.a.c",
    image: "/images/team/notfound.jpg",
    designation: "CEO"

  },
  {
    id: 2,
    name: "Alexandra Gomez",
    instagram: "keisyvg_",
    image: "/images/team/notfound.jpg",
    designation: "CMO"
  },
  {
    id: 3,
    name: "Sofia Estrada",
    instagram: "keynner_sm",
    image: "/images/team/notfound.jpg",
    designation: "CTO"
  },
  {
    id: 4,
    name: "David Vargas",
    instagram: "russo_180",
    image: "/images/team/notfound.jpg",
    designation: "COO"
  },
  {
    id: 5,
    name: "Sergio Herrera",
    instagram: "juanda._._xd",
    image: "/images/team/notfound.jpg", 
    designation: "COO"
  },

];

const Team = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-6 md:py-12 lg:py-12">
      <div className="container">
        <SectionTitle
          title="Equipo de desarrollo"
          paragraph="Quienes estamos detras de todo el proyecto"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <Single key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
