/*** ES6 Class ***/

// Q. inbox, outbox ?
// (ref: https://books.google.co.kr/books?id=K_aEDwAAQBAJ&pg=PA173&lpg=PA173&dq=javascript+stack+queue+inbox&source=bl&ots=fT7E1xwSb0&sig=ACfU3U1uK9s4VooMb7ulBC21jpHqng8UIw&hl=ko&sa=X&ved=2ahUKEwjn8o26897nAhWxy4sBHYFxCLAQ6AEwBHoECAoQAQ#v=onepage&q=javascript%20stack%20queue%20inbox&f=false)
// (ref: https://medium.com/@dfriedenbach/the-two-stack-queue-ae5bbdc673be)
let Queue = function () {
  let inbox = new Stack();
  let outbox = new Stack();

  this.enqueue = function (value) {
    inbox.push(value);
  };

  this.dequeue = function () {
    if (outbox.size() !== 0) {
      return outbox.pop();
    } else {
      while (inbox.size()) {
        outbox.push(inbox.pop());
      }
      return outbox.pop();
    }
  };

  this.size = function () {
    return inbox.size() + outbox.size();
  };
};
