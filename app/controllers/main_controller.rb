class MainController < ApplicationController
  def index
    @latest_note = Note.last
  end

  def about
  end

  def contact
  end
end
