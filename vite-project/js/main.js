import "../css/style.css";
import { Weapons } from "./weapons";



const weaponsListContainer = document.getElementById("weapons-list");

function presentWeapons(Weapons) {
  Array.from(weaponsListContainer.children).forEach(child => child.remove());

  Weapons.forEach((weapon) => {
    const weaponHTML = `
      <div class="weapon-item">
        <h2>${weapon.name}</h2>
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

presentWeapons(Weapons)

tiersorter.addEventListener('click', () => {
  const tiers = Weapons.filter(weapon => weapon.Tier === "Unique" || weapon.Tier === "Legendary");
  presentWeapons(tiers);
});

bestsorter.addEventListener('click', () => {
  const ranks = Weapons.filter(weapon => weapon.Overall === "S");
  presentWeapons(ranks);
});

oglist.addEventListener('click', () => {
  presentWeapons(Weapons);
});
