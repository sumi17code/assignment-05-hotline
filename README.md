
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


Answer:  Event bubbling means when I trigger an event on a child element, it also passes up to its parent elements one by one.

At first it works by first running the event on the clicked element, then it automatically moving up the DOM tree to its parent, after that grandparent until it reaches the on the top (document or window).

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:  In JavaScript Event Delegation means by attaching a single event listener to a parent element to handle events on its child elements by using event bubbling.

It is useful because its better performance, dynamically added its children and it no need to attach listeners to every child.


5. What is the difference between preventDefault() and stopPropagation() methods?


Answer:  The preventDefault() method stops the default action of an element .Like as it can stop a link <a> from its navigating or a form from submitting.

        The stopPropagation() method stops the event from bubbling up to his parent.Like as a button clicked but it won't move up to parent elements.