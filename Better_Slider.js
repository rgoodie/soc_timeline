
function BetterSlider () {


	/*
	To help me later with deeply nested closures. Self will always refer to the
	Object (BetterSlider) level. So Self to me is just more semantically correct
	and relieves me of the mental hurdle of what 'this' may be referring to. Just
	trying to save my little brain some clock cycles.
	*/
	self = this;


	/*
	o for options. For some reason I wanted to keep these in a nicely packed
	collection with a small name. Perhaps I should append 'rama' to the end
	of variable names. This would just be fun to say if not to type. Think
	self.o.first-a-rama or self.of.index-a-rama. I'm over thinking this.
	*/
	self.o = {
		container: 			'#issues ',
		memberid_prefix: 	'#date',
		members:  			'#issues li ',
		index: 1,
		first: 1,
		count: -1
	};

	self.o.count = jQuery(self.o.members ).length;



	self.hideall =  function() {
		jQuery(self.o.members ).hide();
	}

	self.checkIndex = function(n) {
		if (n < self.o.first) {
			return self.o.first;
		} else if (n > self.o.count) {
			return self.o.count;
		} else if (! jQuery.isNumeric(n) ) {
			return self.o.first;
		} else {
			return n;
		}
	}

	self.moveToIndex = function(n) {

		if (n > self.o.index ) {
			self.o.direction = 'right';
		} else {
			self.o.direction = 'left';
		}

		self.o.index = self.checkIndex(n );

	}

	self.process = function() {
		self.hideall();
		jQuery(self.o.container + self.o.memberid_prefix + self.o.index).show('slide', { direction: self.o.direction });
	}
}
