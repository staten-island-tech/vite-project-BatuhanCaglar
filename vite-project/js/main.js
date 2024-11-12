import "../css/style.css";
import { Weapons } from "./weapons";

const weaponsListContainer = document.getElementById("weapons-list");

function presentWeapons(Weapons) {
  weaponsListContainer.innerHTML = "";
  Weapons.forEach((weapon) => {
    const weaponHTML = `
      <div class="weapon-item">        
        <h2>${weapon.name}</h2>        
        <img src="${weapon.image}" alt="${weapon.name}" />
        <p>Tier: ${weapon.Tier}</p>
        <p>Scaling: ${weapon.Scaling}</p>
        <p>Stat Requirement: ${weapon.StatRequirement}</p>
        <p>Status: ${weapon.Status}</p>
        <p>Overall Rating: ${weapon.Overall}</p>
    </div>
  `;
    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

presentWeapons(Weapons);

tiersorter.addEventListener("click", () => {
  const tiers = Weapons.filter(
    (weapon) => weapon.Tier === "Unique" || weapon.Tier === "Legendary"
  );
  presentWeapons(tiers);
});

bestsorter.addEventListener("click", () => {
  const ranks = Weapons.filter((weapon) => weapon.Overall === "S");
  presentWeapons(ranks);
});

oglist.addEventListener("click", () => {
  presentWeapons(Weapons);
});

dexsorter.addEventListener("click", () => {
  const dex = Weapons.filter((weapon) => weapon.Scaling.includes("Dex"));
  presentWeapons(dex);
});

themebtn.addEventListener("click", function(){
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
 