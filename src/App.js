import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <Avatar />
        <Intro />
        <SkillList />
        <Skill />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="Avatar">
      <img
        src="https://images.unsplash.com/photo-1696489149180-bb53f8c38bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="image"
        width="300px"
        height="250px"
      />
    </div>
  );
}

function Intro() {
  return (
    <div className="Intro">
      <h1>Nature Lover</h1>
      <p>
        I love nature .. Especially night attracts me the most ,because night is
        dark and calm so i feel so confortable when i am alone staring at sky
        and watching moon and stars.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="Skill-list">
      <Skill skill="HTML + CSS" Emoji="🤩" color="gray" />
      <Skill skill="Javascript" Emoji="😎" color="red" />
      <Skill skill="Github and Git" Emoji="😻" color="lightgreen" />
      <Skill skill="Web Development" Emoji="🫶" color="orange" />
      <Skill skill="Svelte" Emoji="🤥" color="lightblue" />
      <Skill skill="React" Emoji="❤️" color="pink" />
    </div>
  );
}

function Skill({ skill, Emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{Emoji}</span>
    </div>
  );
}
