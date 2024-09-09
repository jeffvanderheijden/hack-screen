import React from "react"
import "./styles.css"
import TeacherCard from "./TeacherCard"
import jeff from "./images/docenten/jeff.jpeg"
import soraya from "./images/docenten/soraya.jpeg"
import oskar from "./images/docenten/oskar.jpeg"
import arthur from "./images/docenten/arthur.jpeg"
import brian from "./images/docenten/brian.jpeg"
import floris from "./images/docenten/floris.jpeg"
import henk from "./images/docenten/henk.jpeg"
import hilda from "./images/docenten/hilda.jpeg"
import judith from "./images/docenten/judith.jpeg"
import maarten from "./images/docenten/maarten.jpeg"
import ron from "./images/docenten/ron.jpeg"
import saskia from "./images/docenten/saskia.jpeg"
import ward from "./images/docenten/ward.jpeg"
import yorik from "./images/docenten/yorik.jpeg"
import marien from "./images/docenten/marien.jpeg"
import meredith from "./images/docenten/meredith.jpeg"
import chelsea from "./images/docenten/chelsea.jpeg"
import abdeslam from "./images/docenten/abdeslam.jpeg"

const App = () => {
  const Randomizer = () => {
    return Math.random() > 0.5 ? true : false
  }

  return (
    <div className="App">
      <h1>Docenten Creative Software Development</h1>
      <ul className="teachers">
        <TeacherCard glitched={Randomizer()} name={"Soraya Goldewijk"} image={soraya} />
        <TeacherCard glitched={Randomizer()} name={"Oskar Maan"} image={oskar} />
        <TeacherCard glitched={Randomizer()} name={"Arthur Steijlen"} image={arthur} />
        <TeacherCard glitched={Randomizer()} name={"Brian Hokke"} image={brian} />
        <TeacherCard glitched={Randomizer()} name={"Floris van Dijk"} image={floris} />
        <TeacherCard glitched={Randomizer()} name={"Henk Bijlsma"} image={henk} />
        <TeacherCard glitched={Randomizer()} name={"Hilda Uitvlugt"} image={hilda} />
        <TeacherCard glitched={Randomizer()} name={"Judith Pouwelse"} image={judith} />
        <TeacherCard glitched={Randomizer()} name={"Maarten Tacoma"} image={maarten} />
        <TeacherCard glitched={Randomizer()} name={"Ron Segaar"} image={ron} />
        <TeacherCard glitched={Randomizer()} name={"Saskia Heinsdijk"} image={saskia} />
        <TeacherCard glitched={Randomizer()} name={"Yorik Geurts"} image={yorik} />
        <TeacherCard glitched={Randomizer()} name={"Ward Klomp"} image={ward} />
        <TeacherCard glitched={Randomizer()} name={"Jeff van der Heijden"} image={jeff} />
        <TeacherCard glitched={Randomizer()} name={"Emily Kornaat"} />
        <TeacherCard glitched={Randomizer()} name={"Amy Marks"} />
        <TeacherCard glitched={Randomizer()} name={"Daan Kösters"} />
        <TeacherCard glitched={Randomizer()} name={"Jeffrey Arts"} />
        <TeacherCard glitched={Randomizer()} name={"Quincy Daflaar"} />
        <TeacherCard glitched={Randomizer()} name={"Marien van Buuren"} image={marien} />
        <TeacherCard glitched={Randomizer()} name={"Mèredith Wongsosetro"} image={meredith} />
        <TeacherCard glitched={Randomizer()} name={"Chelsea Vos"} image={chelsea} />
        <TeacherCard glitched={Randomizer()} name={"Abdeslam Hakil"} image={abdeslam} />
      </ul>
    </div>
  );
}

export default App;
