import { icons } from "../utils/icons.js";

export const creativeScore = (score){
    const el= document.getElementById("form-interactive-score");
    let scoreHTML="";
    for (let i=0; i<5; i++){
        html += `<button class="icon-btn score" onclick="updateFormScore(${i})">${
            i <= score ? icons.score : icons.not_score
          }</button>`;
        }
        el.innerHTML = html;
      };