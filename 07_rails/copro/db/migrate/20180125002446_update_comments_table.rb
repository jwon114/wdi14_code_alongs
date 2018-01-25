class UpdateCommentsTable < ActiveRecord::Migration[5.1]
  def change
  	rename_column :comments, :details, :body
  end
end
