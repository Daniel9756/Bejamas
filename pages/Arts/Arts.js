import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import useSWR from "swr";
import Art from "./art";

export default function Arts({onAdd, setOpen}) {
  const { data: arts } = useSWR("./api/artwork");

  console.log(arts);
  return (
    <div>
      
      <main>
        
        <div>
          {arts &&
            arts.length &&
            arts.map((art, index) => (
             (index < 1) ?
              <Art key={art.data.id} art={art} id={art.data.id}  onAdd={onAdd}  setOpen={setOpen} /> : ""
            ))}
        </div>
      </main>

      
    </div>
  );
}
