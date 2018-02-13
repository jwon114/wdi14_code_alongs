require 'minitest/autorun'
require 'minitest/reporters'
require_relative 'leap_year'

Minitest::Reporters.use!
Minitest::Reporters::SpecReporter.new

class LeapYearTest < Minitest::Test
	def test_year_2000_is_true
		assert_equal true, leap_year?(2000)
	end

	def test_year_1999_is_false
		assert_equal false, leap_year?(1999)
	end

end