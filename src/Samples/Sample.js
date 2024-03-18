let a = 10;
a = 'ali';

function Sum(x, y) {
	if (x !== typeof Number) {
		x = 0;
	}

	if (y !== typeof Number) {
		y = 0;
	}

	return x + y;
}

Sum('Ali', 'Can'); // AliCan => 0
