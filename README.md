# house-rent-prediction

We have created an ensemble of three models namely CatBoost, LightGBM and Xgboost. Our approach was mainly focused on feature engineering and modelling which can be summed as below :-

## Feature Engineering 

After initial exploratory data analysis we had figured out that the dataset consisted of various categorical features and also amenities feature consisted of JSON formatted data. So for the activation date we decided to split it into date, month, year and day of week using pandas. Then we decoded the Amenities column and converted it into different columns using a function which you can find in our code. After that label encoding and one hot encoding was performed on the rest of categorical columns. Thus we had created 63 columns from initial 24. We had also tried using Principal Component Analysis but that approach didn’t work for us.

## Model

We have made use of three models namely CatBoost, XgBoost and LightGBM. All the hyperparameter tuning of the columns was done using Optuna. Then inorder to ensemble the models we just averaged out the predictions from each model in order to give the final output. 

Using this we were able to obtain a local CV  score of 3293.7463 RMSE.

### Handle Heroku Push 
`git subtree split --prefix server main`
This returns a number `123`
`git push heroku 123:main --force`

## Hosted on
https://house-rent-predictor.netlify.app/