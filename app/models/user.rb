class User < ActiveRecord::Base
  attr_accessor :skip_password_validation

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  has_many :appointments
  enum role: [:client, :admin]

  protected

  def password_required?
    return false if skip_password_validation
    super
  end
end
