import CardNav from './sections/CardNav';

const App = () => {
  const items = [
    {
      label: "Home",
      description: "KEMBALI",
      bgColor: "linear-gradient(to right, #4ddf9e, #3db2bc)",
      textColor: "#fff",
      href:"/"
    },
    {
      label: "PROFIL", 
      description: "SIAPAKAH AKU?",
      bgColor: "#2F293A",
      textColor: "#fff",
      href:"/profil"
    },
    {
      label: "SKILLS",
      description: "APA YANG BISA AKU LAKUKAN?",
      bgColor: "#2F293A", 
      textColor: "#fff",
      href:"/skills" 
    },
    {
      label: "JEJAK DIGITAL",
      description: "APA YANG SUDAH AKU LAKUKAN?",
      bgColor: "#2F293A", 
      textColor: "#fff",
      href:"/timeline"  
    },
    {
      label: "KARYA",
      description: "APA YANG SUDAH AKU BUAT?",
      bgColor: "#2F293A", 
      textColor: "#fff",
      href:"/projects"  
    },
    {
      label: "KONTAK",
      description: "FOLLOW IGKU DONG :)",
      bgColor: "#2F293A",
      textColor: "#fff",
      href:"/contact"
    },
    {
      label: "INFO",
      description: "APA YANG AKU LAKUKAN?",
      bgColor: "#2F293A",
      textColor: "#fff",
      href:"/info"
    }
  ];

  return (
    <CardNav
      logo="/MyLogo.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
  theme="dark"
/>
  );
};

export default App; 