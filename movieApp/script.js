function addMovie () {
	let $row = $('<tr>');
	$row.append($('<td>').text($('input').eq(0).val()));
	$row.append($('<td>').text($('input').eq(1).val()));

	$row.append(
		$('<td>').append(
			$('<button>Remove</button>').on('click', function () {
				$row.remove();
			})
		)
	);
	$('table').append($row);
}

$('button').on('click', addMovie);
