No-01(ANS) :
getElementById : It select a item by id. It use to single element operation with id name. if id not match it return null.
getElementsByClassName : It select multiple item using class name. It return HTML Collection.
querySelector: It give the first element of matching class,tag Name , even id work here etc. 
querySelectorAll: It similiar like getElementsByClassName but it has special power to select element . Like if i want to select the class inside a div. It work well but getElementsByClassName select all document class.

No-02(ANS):
Firstly create an element using createElement . secondly add essential Content (innerHTML,innerText,Css,Id etc). Then it add to document using append,appendChild etc.

No-03(ANS):
It is process where chilldren and parent have different event but parent automatic trigger by chilldren clicking, but we stop it using event.stopPropagation.

No.4(ANS): 
It is a technique where add an event to a parent element, but still detect and handle events on its child elements using event.target

No.5(ANS):
preventDefault() : It used to stop some browser default behaviour. I use it when i work in form.
stopPropagation() : It used to stop triggering parent when child is clicked.
