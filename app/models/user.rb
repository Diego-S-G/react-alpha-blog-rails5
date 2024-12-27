class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_many :articles, dependent: :destroy
  validates :username, presence: true, uniqueness: { case_sensitive: false }, 
            length: { minimum: 3, maximum: 25 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 105 },
            uniqueness: { case_sensitive: false },
            format: { with: VALID_EMAIL_REGEX }
  has_secure_password

  validates :color, format: { with: /\A#(?:\h{3}|\h{6})\z/, message: "must be a valid hex color code!" }
  before_validation :set_default_color

  private

  def set_default_color
    self.color = '#FFFFFF' if color.blank?
  end
end