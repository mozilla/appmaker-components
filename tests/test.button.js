(function() {

  describe('app-button', function() {
    beforeEach(function () {
      this.element = document.createElement('app-button');
      document.body.appendChild(this.element);
      Ceci.convertElement(this.element);
    });

    it('should have a default value', function () {
      expect.equal(this.element.querySelector('button').innerHTML, 'Default');
    });

    describe('setText', function () {
      it('should set button text to specified value', function () {
        this.element.setText('Most Viking Passion');
        expect.equal(this.element.querySelector('button').innerHTML, 'Most Viking Passion');
      });

      it('should respond to channel updates', function (done) {
        var element = this.element;

        element.setSubscription('blue', 'setText');
        
        // Use a helper element to emit an event so as to actual propagate data down
        // to the button element (since events with target === element are ignored).
        var testHelperElement = window._createHelperElement();
        testHelperElement.emit('Most Passionate Viking');

        // Use a timeout here in case event happens asynchronously.
        setTimeout(function () {
          expect.equal(element.querySelector('button').innerHTML, 'Most Passionate Viking');
          done();
        }, 10);
      });
    });

    describe('click', function () {
      it('should broadcast a click event on the selected channel', function (done) {
        this.element.setBroadcastChannel('red');

        var testHelperElement = window._createHelperElement();
        testHelperElement.setSubscription('red', 'setValue');
        this.element.querySelector('button').onclick();

        setTimeout(function () {
          expect.equal(testHelperElement.value, 1);
          done();
        }, 10);
      });
    });

    afterEach(function () {
      document.body.removeChild(this.element);
    });
  });
})();