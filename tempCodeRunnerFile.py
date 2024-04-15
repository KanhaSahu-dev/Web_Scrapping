import pandas as pd

# Read the CSV file
df = pd.read_csv("amazon_products.csv")

# Convert DataFrame to JSON
json_data = df.to_json("amazon_products.json", orient="records")
