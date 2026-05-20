/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

// Task 1: Generate Attendee Badge
/*
Built a function generateBade that
takes a name (Alice and Bob) and role and
returns a formatted badge string with the role capitalized.
We used three methods charAt(0).toUpperCase()and slice(1);
*/



function generateBadge(name, role)
{
let formattedRole =
role.charAt(0).toUpperCase() + role.slice(1);
return `Name: ${name}, Role: ${formattedRole}`;
}



console.log(generateBadge("Alice", "Software Engineer"));
console.log(generateBadge("Ben", "Systems Engineer"));
console.log(generateBadge("John", "Data Scientist"));


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

function calculateEventCost(attendees,costPerAttendee
)
{
    let total = attendees * costPerAttendee;
    if (attendees > 100) {
total = total * 0.90;
    }
    return total;
}

console.log(calculateEventCost(100, 50));
console.log(calculateEventCost(200, 350));
console.log(calculateEventCost(75, 40));


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

// Task 3: Validate Email

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(validateEmail("sugi@gmail.com"));
console.log(validateEmail("chrisgmail.com"));
console.log(validateEmail("sherie@gmailcom"));

 