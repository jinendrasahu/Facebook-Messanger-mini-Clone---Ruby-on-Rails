Rails.application.routes.draw do
  resources :messages
  resources :groups

  root 'groups#index'
end
