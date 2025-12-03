import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "./firebase";
import ProjectCards from "./projectCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Projects({ projectRef }) {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [leftBtnToggle, setLeftBtnToggle] = useState(false);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    async function fetchProjects() {
      try {
        const snapshot = await get(ref(db, "site/projects"));
        if (snapshot.exists()) {
          const obj = snapshot.val();
          const arr = Object.values(obj).sort((a, b) => {
            if (a.order != null || b.order != null) return (a.order ?? 0) - (b.order ?? 0);
            if (a.createdAt != null || b.createdAt != null) return (b.createdAt ?? 0) - (a.createdAt ?? 0); // newest first
            return 0;
          });
          setWorks(arr);
        } else {
          setWorks([]);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setWorks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    setLeftBtnToggle(page > 0);
  }, [page]);

  if (loading) {
    return (
      <>
        <h2 ref={projectRef}>my projects</h2>
        <div>Loading...</div>
      </>
    );
  }

  const totalPage = Math.max(1, Math.ceil(works.length / ITEMS_PER_PAGE));
  const startIndex = page * ITEMS_PER_PAGE;
  const visibleCards = works.slice(startIndex, Math.min(startIndex + ITEMS_PER_PAGE, works.length));

  const nextCards = () => {
    if (page < totalPage - 1) setPage((p) => p + 1);
    else setPage(0);
  };

  const prevCards = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  const cards = visibleCards.map((work, idx) => (
    <ProjectCards
      key={work.order}
      title={work.name}
      vid={work.vidsrc ?? null}
      desc={work.desc ?? ""}
      img={work.imgsrc ?? null}
      play={work.gamelink ?? null}
      goto={work.gitlink ?? null}
    />
  ));

  // bars
  const bars = new Array(totalPage).fill(0).map((_, i) => (
    <div key={i} className={`thebars ${i === page ? "active" : ""}`}></div>
  ));

  return (
    <>
      <h2>my projects</h2>
      <div className="viewbox">{cards}</div>

      <div className="cardNav" ref={projectRef}>
        <button onClick={prevCards} disabled={!leftBtnToggle}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={nextCards}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="bars">{bars}</div>
    </>
  );
}
