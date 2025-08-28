
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById -it  returns only one element which is call by specific id name.

        getElementByClassName - it returns all elements with that class .It can be known live list.

        querySelector - it returns the first matching selector which is using in CSS.

        querySelectorsAll - it returns all the matching selector which is using in CSS. It can also be known static list.



2. How do you create and insert a new element into the DOM?

Answer:  At first i create an element (document.createElement("tag")) then set a content or attributes like .textContent , .id etc. After that have to insert into the DOM by using .before(), .after(), .appendChild().


        let element = document.createElement("p"); element.textContent = "Assalamualikum";
        parent.appendChild(element);


3. What is Event Bubbling and how does it work?


Answer:  