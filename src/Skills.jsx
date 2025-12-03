import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "./firebase";
import SkillCards from "./skillCards";

export default function Skills({ skillRef }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const snapshot = await get(ref(db, "site/skills"));
        if (snapshot.exists()) {
          const obj = snapshot.val();
          const arr = Object.values(obj).sort(
            (a, b) => (a.order ?? a.id ?? 0) - (b.order ?? b.id ?? 0)
          );
          setSkills(arr);
        } else {
          setSkills([]);
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
        setSkills([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return (
    <div className="skillbox" ref={skillRef}>
      <h2>skills</h2>
      <div className="myskills">
        {loading ? (
          <div>Loading...</div>
        ) : (
          skills.map((skill) => (
            <SkillCards
              key={skill.id ?? skill.name}
              id={skill.id}
              img={{ src: skill.src, alt: skill.name }}
              name={skill.name}
            />
          ))
        )}
      </div>
    </div>
  );
}
