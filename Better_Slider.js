
function BetterSlider () {

	self = this;

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
