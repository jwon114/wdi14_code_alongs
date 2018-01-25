class CreateCommentsWithReferences < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :details
      t.references :user, foreign_key: true
      t.references :project, foreign_key: true
    end
  end
end
