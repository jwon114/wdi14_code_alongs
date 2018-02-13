# ['ruby', 'js', 'css']

# "ruby, js and css"

def to_sentence(arr)
	# return arr.first if arr.length == 1
	# last = arr.pop
	# arr.join(', ') + ' and ' + last
	case arr.length
	when 1
		arr[0]
	when 2
		arr.join(' and ')
	else
		"#{arr[0..-2].join(', ')} and #{arr[-1]}"
	end
end

# if to_sentence(['ruby', 'js', 'css']) == 'ruby, js and css'
# 	puts 'good job'
# end