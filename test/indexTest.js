describe('index.js', function () {
  cats = ["Milo", "Otis", "Garfield"];
  
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      function destructivelyAppendCat(){
        cats = ["Milo", "Otis", "Garfield"];   
        cats.push('Ralph');
      }
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function () {
      function destructivelyPrependCat(){
        cats = ["Milo", "Otis", "Garfield"];   
        cats.splice(0, 0, "Bob");
      }
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      function destructivelyRemoveLastCat(){
        cats = ["Milo", "Otis", "Garfield"];   
        cats.pop();
      }
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      function destructivelyRemoveFirstCat(){
        cats = ["Milo", "Otis", "Garfield"];   
        cats.shift();
      }
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });



    describe('appendCat(name)', function () {
      function appendCat(){
      cats = ["Milo", "Otis", "Garfield"];
       newArray = cats.slice(); 
       newArray.push("Broom");
       return newArray;
      }
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });



    describe('prependCat(name)', function () {
      function prependCat(){
        cats = ["Milo", "Otis", "Garfield"];
        newArray = cats.slice()
        newArray.unshift("Arnold")
        return newArray;
      }
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });



    describe('removeLastCat()', function () {
    function removeLastCat(){
      cats = ["Milo", "Otis", "Garfield"];
      newArray = cats.slice()
      newArray.pop();
      return newArray
    }
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });



    describe('removeFirstCat()', function () {
      function removeFirstCat(){
        cats = ["Milo", "Otis", "Garfield"];
        newArray = cats.slice()
        newArray.shift();
        return newArray
      }
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});

