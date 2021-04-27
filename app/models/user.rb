class User < ApplicationRecord
    validates_uniqueness_of:username

    def self.generate
        adjectives=['jinendra','vansh','vedansh','sid']
        nouns=['sahu','singh','gracy','agarwal']
        number=rand.to_s[2..4]
        username="#{adjectives.sample}-#{nouns.sample}-#{number}"
        create(username:username)
    end
end
