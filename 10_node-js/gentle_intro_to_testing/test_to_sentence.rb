require 'minitest/autorun'
require 'minitest/reporters'
require_relative 'to_sentence'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

class ToSentenceTest < Minitest::Test
	# must start with test_
	def test_to_sentence
		# assert_equal expected, actual
		assert_equal 'ruby, js and css', to_sentence(['ruby', 'js', 'css'])
	end

	def test_when_pass_in_2_elements
		assert_equal 'ruby and js', to_sentence(['ruby', 'js'])
	end

	def test_when_one_element
		assert_equal 'ruby', to_sentence(['ruby'])
	end
end
