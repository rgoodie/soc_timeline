
function SOCSlider (container, member_prefix) {


	/*
	To help me later with deeply nested closures. Self will always refer to the
	Object (SOCSlider) level. So Self to me is just more semantically correct
	and relieves me of the mental hurdle of what 'this' may be referring to. Just
	trying to save my little brain some clock cycles.
	*/
	self = this;


	/*
	o for options. For some reason I wanted to keep these in a nicely packed
	collection with a small name. Perhaps I should append 'rama' to the end
	of variable names. This would just be fun to say if not to type. Think
	self.o.first-a-rama or self.of.index-a-rama. I'm over thinking this.

	Also, bring in as much from the Drupal module as possible through the
	Drupal.settings name spaceing.
	*/
	self.o = {
		container: 			container + ' ',
		memberid_prefix: 	member_prefix,
		members:  			container + ' #issues li',
		index: 1,
		first: 1,
		count: -1,
		direction: '',
		duration: 			Drupal.settings.soc_timeline.duration,
		prev_button: 		container + Drupal.settings.soc_timeline.prev_button,
    	next_button: 		container + Drupal.settings.soc_timeline.next_button,
    	number_group: 		'#dates li:has(a)'

	};


	/*
	Set up click handlers
	*/
	jQuery(self.o.prev_button).click(function(e) {
		self.moveToIndex(self.o.index - 1);
	});
	jQuery(self.o.next_button).click(function(e) {
		self.moveToIndex(self.o.index + 1);
	});
	jQuery(self.o.number_group).click(function(e){
		number_index = jQuery(this).index() + 1;
		console.log(number_index);
		self.moveToIndex(self.checkIndex(number_index));
	});


	/*
	A count of just how many members we have
	*/
	self.o.count = jQuery(self.o.members ).length;


		console.dir(self.o);

	/*
	Hides all. Duh.
	*/
	self.hideall =  function() {
		jQuery(self.o.members ).hide();
	}


	/*
	Checks to ensure that the number coming in (n) is between 1 and the count
	of all member items. It also checks that it is a number using jQuery isNumeric
	function. That comes in handy, eh! No real errors are thrown. Rather it just
	returns the boundaries (self.o.first or self.o.count).
	*/
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


	/*
	Moves Index to n. Also decides if the show slide should come in from the
	right or left. Basically, if the new index (n) is greater than the previous
	one (self.o.index), come in from the right. If not, default to come in from
	the left. After that is decided, change to new index position and execute the
	hide()s and the show().
	*/
	self.moveToIndex = function(n) {

		if (n > self.o.index ) {
			self.o.direction = 'right';
		} else {
			self.o.direction = 'left';
		}

		self.o.index = self.checkIndex( n );

		console.log('New index:' + self.o.index);

		self.hideall();

		console.log('selector to show: ' + self.o.container + self.o.memberid_prefix + self.o.index);
		jQuery(' ' + self.o.container + self.o.memberid_prefix + self.o.index).show('slide', { direction: self.o.direction }, self.o.duration);
	}


}
