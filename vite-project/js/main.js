import "../css/style.css";
import { Weapons } from "./weapons";

const weaponsListContainer = document.getElementById('weapons-list');

Weapons.forEach(weapon => {
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
  weaponsListContainer.insertAdjacentHTML('beforeend', weaponHTML);
});