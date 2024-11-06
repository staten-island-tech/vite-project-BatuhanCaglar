import "../css/style.css";

const Weapons = [
  {
    name: "Blood Hound's Fang",
    Tier: "Unique",
    Scaling: "Dex",
    StatRequirement: "Mid",
    Status: "Blood",
    Overall: "S",
  },
  {
    name: "Rivers of  Blood",
    Tier: "Unique",
    Scaling: "Arc",
    StatRequirement: "High",
    Status: "Blood",
    Overall: "S",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Broadsword",
    Tier: "Common",
    Scaling: "Strength",
    StatRequirement: "Low",
    Status: "None",
    Overall: "C",
  },
  {
    name: "Lusat's Glinstone Staff",
    Tier: "Unique",
    Scaling: "Intelligence",
    StatRequirement: "High",
    Status: "None",
    Overall: "S",
  },
  {
    name: "Dracon Communion Seal",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
  {
    name: "Golden Halbred",
    Tier: "Unique",
    Scaling: "Faith",
    StatRequirement: "High",
    Status: "None",
    Overall: "A",
  },
];

const cat = "meow";
Weapons.box.insertAdjacentHTML("afterend", "<h1> We are an ${cat} </h1>");

const container = document.getElementById("weapons-container");

weapons.forEach((weapon) => {
  const weaponHTML = `
    <div class="weapon">
      <h2>${weapon.name}</h2>
      <p><strong>Tier:</strong> ${weapon.Tier}</p>
      <p><strong>Scaling:</strong> ${weapon.Scaling}</p>
      <p><strong>Stat Requirement:</strong> ${weapon.StatRequirement}</p>
      <p><strong>Status:</strong> ${weapon.Status}</p>
      <p><strong>Overall:</strong> ${weapon.Overall}</p>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", weaponHTML);
});
