# require 'pg' # need to use version 0.21.0, doesn't work with 1.0.0
# settings for activerecord
require 'active_record'

options = {
	adapter: 'postgresql',
	database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(options)