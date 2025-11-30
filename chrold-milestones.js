
---

### **4. `dist/chrold-milestones.js`**
```javascript
class CHRMilestones {
  constructor(ageInputSelector, containerSelector) {
    this.ageInput = document.querySelector(ageInputSelector);
    this.container = document.querySelector(containerSelector);
    this.milestones = [
      { age: 1, label: "Startled by loud noises", name: "startle_noises" },
      { age: 2, label: "Smile Responsively", name: "smile" },
      { age: 3, label: "Holds Head Up", name: "head_up" },
      { age: 3, label: "Make Simple Sounds", name: "simple_sounds" },
      { age: 4, label: "Wiggles and Kicks", name: "wiggle_kick" },
      { age: 4, label: "Communicate Needs", name: "communicate_needs" },
      { age: 4, label: "Sits with Support", name: "sits_support" },
      { age: 5, label: "Eye Tracking", name: "eye_tracking" },
      { age: 5, label: "Roll Over", name: "roll_over" },
      { age: 6, label: "Turns Head to Sound", name: "turn_head_sound" },
      { age: 6, label: "Reach and Grasp", name: "reach_grasp" },
      { age: 7, label: "Sits Well Without Support", name: "sits_unsupported" },
      { age: 8, label: "Pass Objects", name: "pass_objects" },
      { age: 9, label: "Stand Holding On", name: "stand_hold" },
      { age: 9, label: "Imitate Speech", name: "imitate_speech" },
      { age: 10, label: "Pull to Stand", name: "pull_stand" },
      { age: 11, label: "Object Container", name: "object_container" },
      { age: 11, label: "Peek-a-Boo Game", name: "peekaboo_game" },
      { age: 11, label: "Copy Gesture", name: "copy_gesture" },
      { age: 11, label: "Crawl", name: "crawl" },
      { age: 14, label: "Stand Alone", name: "stand_alone" },
      { age: 14, label: "Say Mama", name: "say_mama" },
      { age: 14, label: "Wave Bye", name: "wave_bye" },
      { age: 15, label: "Point One Word", name: "point_one_word" },
      { age: 16, label: "Walk Alone", name: "walk_alone" },
      { age: 17, label: "Drink from Cup", name: "drink_cup" },
      { age: 21, label: "Tower of 2 Cubes", name: "tower_2" },
      { age: 24, label: "Kick Ball", name: "kick_ball" }
      // Add more milestones as needed
    ];
  }

  loadMilestones() {
    this.container.innerHTML = '';
    const age = parseInt(this.ageInput.value);
    if (!age) return;

    const matched = this.milestones.filter(m => m.age === age);
    matched.forEach(m => {
      const div = document.createElement('div');
      div.classList.add('milestone-item');
      div.innerHTML = `
        <label>${m.label}</label>
        <select name="${m.name}" class="milestone-select">
          <option value="">--Select--</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      `;
      this.container.appendChild(div);
    });
  }
}
