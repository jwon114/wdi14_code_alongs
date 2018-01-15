require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
	conn = PG.connect(dbname: 'goodfoodhunting')
	sql = "SELECT * FROM dishes;"
	@dishes = conn.exec(sql)
	conn.close
	erb :index
end

get '/dishes/new' do
	erb :new
end

post '/dishes' do
	# this is where we create the record in the db
	# connect to db
	conn = PG.connect(dbname: 'goodfoodhunting')
	# execute a SQL statement
	sql = "INSERT INTO dishes (name, image_url) VALUES ('#{params[:name]}', '#{params[:image_url]}');"
	results = conn.exec(sql)
	# close the db connection
	conn.close
	# redirect to avoid inserting another record on refresh
	redirect '/'
end

get '/dishes/:id' do
	# get a single dish with this id
	conn = PG.connect(dbname: 'goodfoodhunting')
	sql = "SELECT * FROM dishes WHERE id = '#{params[:id]}';"
	@dish = conn.exec(sql).first # exec returns an array of hashes even if it contains one record
	# binding.pry
	conn.close

	erb :show
end

# use post to delete. HTTP has delete but doesn't implement it
post '/dishes/:id/delete' do
	conn = PG.connect(dbname: 'goodfoodhunting')
	sql = "DELETE FROM dishes WHERE id = '#{params[:id]}';"
	results = conn.exec(sql)
	redirect '/'
end
