import CardNav from './sections/CardNav';

const App = () => {
  const items = [
    {
      label: "Home",
      description: "KEMBALI",
      bgColor: "rgba(18, 18, 18, 0.7)",
      borderGradient: "linear-gradient(135deg, #4ddf9e, #3db2bc)",
      textColor: "#fff",
      href:"/"
    },
    {
      label: "PROFIL", 
      description: "SIAPAKAH AKU?",
      bgColor: "rgba(15, 32, 67, 0.35)",
      borderGradient: "linear-gradient(135deg, #4FACFE, #00F2FE)",
      textColor: "#fff",
      href:"/Profil"
    },
    {
      label: "SKILLS",
      description: "SKILL SOFTWAREKU",
      bgColor: "rgba(193, 193, 97, 0.35) 0%, rgba(193, 193, 97, 0.35) 0%, rgba(212, 212, 177, 0.35) 100%)",
      borderGradient: "linear-gradient(90deg,#C1C161 0%, #C1C161 0%, #D4D4B1 100%)", 
      textColor: "#fff",
      href:"/skills" 
    },
    {
      label: "JEJAK DIGITAL",
      description: "APA YANG SUDAH AKU LAKUKAN?",
      bgColor: "rgba(95, 114, 189, 0.35)",
      borderGradient: "linear-gradient(135deg, #5F72BD, #9B23EA)", 
      textColor: "#fff",
      href:"/timeline"  
    },
    {
      label: "KARYA",
      description: "APA YANG SUDAH AKU BUAT?",
      bgColor: "rgba(255, 88, 88, 0.35) 0%, rgba(240, 152, 25, 0.35) 100%", 
      borderGradient: "linear-gradient(-60deg, #FF5858 0%, #F09819 100%)",
      textColor: "#fff",
      href:"/projects"  
    },
    {
      label: "KONTAK",
      description: "FOLLOW IGKU DONG :)",
      bgColor: "rgba(188, 197, 206, 0.35) 0%, rgba(146, 158, 173, 0.35) 98%",
      borderGradient: "linear-gradient(-180deg, #BBCAE2 20%, #93A5CF 98%)",
      textColor: "#fff",
      href:"/contact"
    },
    {
      label: "INFO",
      description: "TENTANG WEBSITE INI!!",
      bgColor: "rgba(41, 50, 60, 0.35) 0%, rgba(72, 85, 99, 0.35) 100%)",
      borderGradient: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
      textColor: "#fff",
      href:"/Info",
      fullWidth: true
    }
  ];

  return (
    <CardNav
      logo="/MyLogo.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="rgba(10, 10, 10, 0.4)"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
/>
  );
};

export default App; 