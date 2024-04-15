import pandas as pd

# Read the CSV file
df = pd.read_csv('amazon_products.csv')

# Remove currency symbol and commas from the 'Price' column and convert to numeric
df['Price'] = df['Price'].str.replace('Rs ', '').str.replace(',', '').astype(float)

# Calculate means
Customers_Rated_mean = df["Customers_Rated"].mean()
Price_mean = df["Price"].mean() / 2

# Apply filter
Best_product = df[(df["Customers_Rated"] >= Customers_Rated_mean) & (df["Price"] >= Price_mean)]

# Sort the filtered dataframe based on multiple criteria
sorted_df = Best_product.sort_values(by=['Customers_Rated', 'Price', 'Rating'], ascending=[False, False, False])

# Concatenate the filtered and sorted dataframe with the remaining data
final_df = pd.concat([sorted_df, df[~df.index.isin(Best_product.index)]])

# Save the final dataframe back to CSV
final_df.to_csv('amazon_products.csv', index=False)
