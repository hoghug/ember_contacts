Rails.application.routes.draw do
  root :to => 'application#index'
  resources :contacts, :except => [:new, :edit]
end
