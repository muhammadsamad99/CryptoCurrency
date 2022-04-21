class Currency < ApplicationRecord

    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end

    def current_price
        request = HTTParty.get("https://api.coinbase.com/v2/prices/#{self.currency_symbol}-usd/spot")
        response = request.dig('data', 'amount')
    end

end
