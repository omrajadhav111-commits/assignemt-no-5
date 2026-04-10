# Engineering Product Design (EPD) Assignment 5
**Topic:** Human-Computer Interaction (HCI) Evaluation using usability testing tools like Google Forms, Hotjar, and UsabilityHub

---

## 1. Prologue

This assignment is a part of the Engineering Product Design (EPD) coursework. The subject of EPD focuses on understanding how to design, build, and evaluate products that are both highly functional and deeply user-friendly. One of the core pillars of good product design is Human-Computer Interaction (HCI), which studies how people interact with technology and how to make these interactions smoother.

This assignment specifically explores "HCI Evaluation." Creating an app or website is only half the battle. The other half is testing it with actual users to see if they find it confusing or easy to use. To do this effectively, we use various usability testing tools. Here, we focus on three popular tools: Google Forms for surveys, Hotjar for tracking user behavior, and UsabilityHub for quick design testing.

---

## 2. Table of Contents

1. Prologue
2. Table of Contents
3. Project Overview
4. Problem Statement
5. Proposed Solution
6. Objectives
7. Features of the Product
8. Accessibility Standards & Tools Used
9. System Requirements
10. System Design
11. Working / Methodology
12. Algorithm / Logic
13. Flowchart
14. Test Cases & Accessibility Testing
15. Use Case / Applications
16. Future Scope
17. Conclusion
18. References

---

## 3. Project Overview

**Introduction to HCI Evaluation**

Human-Computer Interaction (HCI) Evaluation is the structured process of testing a digital product (like a mobile app, website, or software) to see how easily and effectively a normal human being can use it. Imagine building a beautiful house, but the doors are too heavy to open. The house is useless, right? The same applies to software. 

Evaluation is critical because developers and designers often think their product is perfectly understandable since they built it. However, a regular user might struggle to find the "Checkout" button or might get lost in the menus. HCI evaluation bridges this gap.

In this project, we explore how to evaluate software using three modern tools:
- **Google Forms:** To collect direct feedback, opinions, and ratings from users through surveys and questionnaires.
- **Hotjar:** To secretly "watch" (anonymously) how users browse a website using heatmaps (which show where people click the most) and screen recordings.
- **UsabilityHub (now Lyssna):** To perform quick tests, like asking users where they would click first or showing them a design for 5 seconds to see what they remember.

By combining these methods, a product engineering team can understand exactly what is wrong with their design and how to fix it before giving it to thousands of end-users.

---

## 4. Problem Statement

Many software applications and websites are built with great features but fail in the real market. Why? Because they suffer from critical usability issues. 

Some common real-world usability problems include:
- **Confusing Navigation:** Users cannot find the information they are looking for because the menus are complicated.
- **High Cart Abandonment:** In e-commerce, users add items to their cart but leave without paying because the checkout process is too long or confusing.
- **Lack of Feedback:** When a user clicks a button like "Submit," nothing happens on the screen. The user doesn't know if the system is slow or broken.
- **Ignoring User Needs:** Designers often guess what the user wants instead of actually asking them, leading to unnecessary features that nobody uses.
- **Accessibility Issues:** Websites that cannot be used by people with visual impairments or disabilities.

**The Problem:** How can we scientifically and systematically identify these design flaws early in the software development process using standard testing tools?

---

## 5. Proposed Solution

To solve the problems mentioned above, the proposed solution is to strictly implement an **HCI Evaluation Phase** using standard usability testing tools before a product is fully launched.

Instead of guessing what is wrong with the design, we will rely on solid data. 
- We will use **Hotjar** to generate Heatmaps. Heatmaps show exactly which buttons get the most clicks and which parts of a page are completely ignored. If an important button is ignored, we know we need to move it or change its color.
- We will use **UsabilityHub** to test raw design images (wireframes) before writing a single line of code. We can run "First Click Tests" to see if a normal person can immediately guess where to click to perform a task.
- We will use **Google Forms** to ask specific, open-ended questions like "On a scale of 1 to 10, how hard was it to reset your password?" to measure user satisfaction (also known as the System Usability Scale - SUS).

This multi-tool approach ensures we get both quantitative data (numbers, click rates) and qualitative data (user feelings, complaints).

---

## 6. Objectives

The primary objectives of adopting this HCI evaluation method are:
*   To identify and fix design flaws, confusing layouts, and navigation errors before the final product release.
*   To understand user behavior, preferences, and frustrations through real-world data collection.
*   To increase user satisfaction and ensure the software is highly user-friendly.
*   To reduce development costs by catching mistakes early in the design stage rather than after the coding is finished.
*   To ensure the product meets global accessibility standards so everyone can use it.
*   To combine different testing methods (surveys vs. heatmaps) to get a complete picture of usability.

---

## 7. Features of the Product (Evaluated System)

When evaluating a digital product through HCI principles, we expect the product to have certain features that make it user-friendly. While we are evaluating the product, the product itself should ideally possess:

*   **User-Friendly Interface (UI):** Clean layout, readable fonts, pleasant colors, and avoiding clutter. The screen should not look aggressively crowded.
*   **Intuitive Navigation:** Menus should logicially flow. If a user is looking for settings, they should confidently find it behind a generic gear icon.
*   **Instant Feedback System:** If a file is uploading, there must be a progress bar. If an error occurs, an easy-to-understand error message should pop up in red.
*   **Consistency:** Buttons should look the same across all pages. If the "Cancel" button is red on page 1, it should not be green on page 2.
*   **Forgiveness / Error Prevention:** If a user accidentally deletes something, there should be an "Undo" button or a pop-up asking, "Are you sure you want to delete this?"
*   **Flexibility:** Shortcuts should exist for expert users (like hitting Ctrl+S to save) while beginners can simply click the "Save" icon.

---

## 8. Accessibility Standards & Tools Used

To make sure a digital product is usable by everyone, including people with disabilities, it must follow specific rules.

### Accessibility Standards
The global standard for accessibility is the **WCAG (Web Content Accessibility Guidelines)**. The main principles of WCAG are summarized by the acronym **POUR**:
1.  **Perceivable:** Information must be presented in ways users can perceive. For example, providing text alternatives (alt text) for images so screen readers can read them to blind users.
2.  **Operable:** The interface must be operable. For example, all website functions should be accessible using just a keyboard, without needing a mouse (for people with motor disabilities).
3.  **Understandable:** Information and operation of the interface must be easy to understand. Using plain English and avoiding complex jargon.
4.  **Robust:** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

### Tools Used for Evaluation
1.  **Google Forms:** A free tool for creating custom surveys, questionnaires, and feedback forms to gather direct user opinions.
2.  **Hotjar:** A powerful analytics tool that provides Heatmaps (visualizing clicks and scrolling) and Session Recordings (watching video playbacks of how actual users navigate the site).
3.  **UsabilityHub:** A remote user research platform that offers simple tests like First Click tests, Design Surveys, Preference Tests, and Five-Second Tests.

---

## 9. System Requirements

To conduct these HCI evaluations, researchers and designers need the following basic setup:

**Hardware Requirements:**
*   A modern desktop or laptop computer (Windows, Mac, or Linux).
*   A stable internet connection (broadband or Wi-Fi).
*   (Optional) A smartphone or tablet if evaluating mobile usability.

**Software Requirements:**
*   A modern web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge).
*   The product being tested (either a website URL, a mobile app, or design image files like PNGs or JPEGs of the UI).
*   Access to the active accounts on Google Forms, Hotjar, and UsabilityHub.

---

## 10. System Design

The architecture of our HCI evaluation process is designed to be simple and cyclic. It connects the product, the user, the tools, and the design team.

1.  **The Target Application:** This is the website or app we want to test. We either attach a Hotjar tracking script to its code, or we take screenshots of its pages.
2.  **The Testing Tools Layer:**
    *   *Hotjar Tracking:* Works silently in the background while real users use the live site.
    *   *UsabilityHub Setup:* Screenshots are uploaded, and specific tasks (like "Find the contact page") are given.
    *   *Google Forms Deployment:* Links are sent to users asking about their experience.
3.  **The User Interaction:** Real human users interact with the system or the tests.
4.  **Data Processing:** The tools process the interactions into understandable reports (Heatmaps, spreadsheets, success rates).
5.  **Design Team Analysis:** The developers and engineers review the results and decide what to change in the application.

This forms a feedback loop: Design → Test → Analyze → Redesign.

---

## 11. Working / Methodology 

Here is the step-by-step methodology used to perform an HCI Evaluation:

**Step 1: Define the Goals**
*   Decide exactly what we are testing. (e.g., "We want to know if the checkout process takes too long.")

**Step 2: Setup Hotjar (Passive Testing)**
*   Add a small piece of code provided by Hotjar to the website.
*   Once enabled, wait for a few days as normal users visit the site.
*   Hotjar automatically records their mouse movements, clicks, and scrolling depth, turning this into visual Heatmaps.

**Step 3: Setup UsabilityHub (Active Design Testing)**
*   Take screenshots of a new layout before coding it.
*   Upload them to UsabilityHub to create a "Five Second Test" or a "First Click Test".
*   Share the test link with a group of testers.
*   Wait for testers to complete tasks, such as clicking where they think they can change their password.

**Step 4: Setup Google Forms (Active Feedback)**
*   Create a simple survey with 5 to 10 questions.
*   Ask specific questions like, "What was the most frustrating part of using our website?"
*   Send the Google Form link via email or embedded on the website itself.

**Step 5: Analyze and Iterate**
*   Collect all data. Look at Hotjar to see *what* users are doing (e.g., not clicking the "Buy" button).
*   Look at Google Forms to see *why* they are doing it (e.g., "The 'Buy' button color is hard to see.")
*   Make design changes and repeat the test to see if the metrics improve.

---

## 12. Algorithm / Logic

This section defines the logical, step-by-step procedure of executing the usability test.

1.  **START**
2.  Identify the specific features or pages of the software that require testing.
3.  Select the appropriate testing tools based on the testing requirement (Hotjar for live tracking, UsabilityHub for design feedback, Google Forms for subjective surveys).
4.  Configure the selected tools with the software (embed Hotjar script, upload images to UsabilityHub, create questionnaire on Google Forms).
5.  Recruit target users to participate in the evaluation.
6.  Distribute the digital product or the testing links to the users.
7.  Collect data continuously or until enough responses are gathered.
8.  Import the collected data (Heatmaps, survey spreadsheets, click coordinates).
9.  Identify failure points:
    *   Are users clicking in the wrong places?
    *   Are they abandoning the task halfway?
    *   Are survey scores low?
10. If serious issues are found, propose UI/UX (User Interface / User Experience) improvements.
11. Implement the design changes.
12. (Optional) Loop back to step 3 to re-test the new design.
13. Compile the final evaluation report.
14. **STOP**

---

## 13. Flowchart

Below is a textual representation of the evaluation flowchart:

```text
[ START ]
   |
   V
[ Define UI/UX Testing Goals ]
   |
   V
[ Select Tools: Hotjar, UsabilityHub, Google Forms ]
   |
   V
[ Implement Tools on System / Upload Designs ]
   |
   V
[ Share Tests with Real Users ]
   |
   +-----------------------+----------------------+
   |                       |                      |
   V                       V                      V
[ Record Data via       [ Collect Responses    [ Track Live User
  Google Forms ]          via UsabilityHub ]     Behavior via Hotjar ]
   |                       |                      |
   +-----------------------+----------------------+
                           |
                           V
              [ Analyze Data and Feedback ]
                           |
                           V
              < Are Usability Issues Found? >
                 /                   \
            [ YES ]                 [ NO ]
               |                       |
               V                       V
       [ Redesign System ]      [ Draft Final Report ]
               |                       |
               +-----------------------+
                           |
                           V
                        [ END ]
```

---

## 14. Test Cases & Accessibility Testing

By running system test cases we check if the digital product correctly handles usability concepts.

| Test Case ID | Test Scenario | Steps to Execute | Expected Result | Pass/Fail Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | First Click testing using UsabilityHub | Ask the user to find the "Contact Support" option on the home page image. | User should correctly click on "Contact Us" located at the footer or nav bar. | **Pass:** Clicks within 3 seconds.<br>**Fail:** Clicks elsewhere or takes too long. |
| **TC-02** | Hotjar Heatmap Verification | Enable Hotjar on the landing page and record for one week. | The primary "Sign Up" button should have the highest click density (hottest color). | **Pass:** High click density on main button.<br>**Fail:** High density on unclickable elements. |
| **TC-03** | Google Forms feedback submission | Send a SUS (System Usability Scale) survey to 20 test users. | Average rating of overall usability should be greater than 7/10. | **Pass:** Average > 7.<br>**Fail:** Average < 7. |
| **TC-04** | Keyboard Navigability (WCAG) | Unplug the mouse and navigate the site using only the "Tab" and "Enter" keys. | A visible focus ring must show which button or link is currently selected. | **Pass:** Easy navigation via keyboard.<br>**Fail:** User gets stuck. |
| **TC-05** | Color Contrast (WCAG) | Use an online contrast checker tool on text over a dark background. | Contrast ratio should be at least 4.5:1. | **Pass:** Text is heavily legible.<br>**Fail:** Text is low contrast/difficult to read. |

---

## 15. Use Case / Applications

The HCI Evaluation using these specific tools is extremely useful in numerous real-life applications across various industries:

*   **E-Commerce (Amazon, Flipkart):** Testing the shopping cart procedure. Hotjar helps owners realize if users are constantly rage-clicking a broken "Add to Cart" button or why they suddenly close the tab at the payment page.
*   **Healthcare Portals (Hospitals, Clinics):** Patients, especially the elderly, need an extremely simple interface. Testing using UsabilityHub ensures the buttons to "Book an Appointment" are large, clear, and obvious.
*   **E-Learning Platforms (Coursera, Udemy):** Schools use Google Forms to continuously gather feedback from students regarding whether the course dashboards are organized and files are easy to find.
*   **Government Websites:** Government digital services must be accessible to all citizens (including those with disabilities). Evaluation checks ensure WCAG compliance like proper font sizes and screen reader compatibility.
*   **Startup App Development:** Startups don't have time to write code that users might hate. They heavily use 5-second tests on UsabilityHub to confirm their branding and design before building it.

---

## 16. Future Scope

The future of Human-Computer Interaction Evaluation is shifting towards extreme automation and intelligence.

*   **Artificial Intelligence Review:** Instead of humans watching hours of Hotjar videos, AI will soon instantly watch massive amounts of sessions and provide a text summary, e.g., "75% of your users are getting stuck on the login page due to the password requirement tooltip."
*   **Biometric Testing Integration:** In advanced labs, tools will analyze real-time eye-tracking (via webcams) and facial micro-expressions to gauge if a user is frustrated, happy, or confused, rather than waiting for them to fill out a Google Form.
*   **Voice and Gestures:** As technology moves from traditional mouse/keyboard to voice assistants (Alexa, Siri) and AR/VR spatial computing (Apple Vision Pro), testing tools will adapt to evaluate the "usability" of hand gestures and voice commands.
*   **Predictive Evaluation Tools:** Tools like Lyssna or Hotjar might adopt software that scans a newly designed image and immediately warns, "This button color will fail WCAG guidelines," before any real user even tests it.

---

## 17. Conclusion

In conclusion, evaluating Human-Computer Interaction is an absolute necessity in modern engineering and software development. Building a product simply based on the visual preferences of a developer is a dangerous gamble. True validation only happens when real end-users interact with the system.

Tools like Google Forms, Hotjar, and UsabilityHub offer excellent, cost-effective ways to measure this interaction. By utilizing surveys to hear user complaints, heatmaps to silently observe behaviors, and rapid design tests to prevent bad ideas, engineering teams can guarantee a user-centric product. Implementing strict HCI evaluation, adhering to WCAG accessibility guidelines, and maintaining a cycle of testing and redesigning will inevitably result in a product that not only functions perfectly but also offers an enjoyable and fluid experience for its users.

---

## 18. References

To further understand and apply the concepts discussed in this assignment, refer to the following resources:

*   **Hotjar Official Website & Guides:** Information on Heatmaps and Behavior Analytics.
    [https://www.hotjar.com/](https://www.hotjar.com/)
*   **Lyssna (Formerly UsabilityHub):** Platform for remote user research and usability testing.
    [https://www.lyssna.com/](https://www.lyssna.com/)
*   **Google Forms:** Platform for creating surveys and gathering user feedback.
    [https://www.google.com/forms/about/](https://www.google.com/forms/about/)
*   **W3C - Web Content Accessibility Guidelines (WCAG):** The definitive rules for global accessibility.
    [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
*   **Nielsen Norman Group:** Detailed research articles on HCI, usability guidelines, and user testing.
    [https://www.nngroup.com/](https://www.nngroup.com/)

---
