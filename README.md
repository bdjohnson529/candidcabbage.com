# Jekyll blog
This is a Jekyll blog, deployed on AWS.

## Setup
1. Install [Ruby](https://www.ruby-lang.org/en/).
2. Install all dependencies. This command installs the dependencies listed in `Gemfile`.
```
bundle install
npm install
```
3. Serve the application locally.
```
bundle exec jekyll serve
```
View the application at `http://localhost:4000/`. Notice that the website is saved in the `_site` folder.

# Deployment

## Serve Locally
To serve the website locally, enter the following command in the Anaconda CMD.
```
python -m http.server
```

## Deploy to S3
The website is hosted using AWS S3 and Route 53. To deploy the website to AWS S3, enter the following command in the Windows CMD. Make sure you run the command from the `_site` directory so you only upload the static website, not the associated Jekyll files!
```
cd _site
aws s3 sync . s3://codechalet.com/ --delete
```

Refresh Cloudfront (note that Cloudfront supports only 1000 free refreshes per month). Here is [a reference](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serving-outdated-content-s3/).
```
aws cloudfront create-invalidation --distribution-id distribution_ID --paths "/*"
```
